import { app, BrowserWindow, ipcMain, ipcRenderer } from 'electron'
var AWS = require("aws-sdk");
const fs = require('fs');

// AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//     console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
//     console.log("Region: ", AWS.config.region);
//   }
// });
// =====================ASSUME ROLE====================================================
AWS.config.region = 'us-east-1';

var sts = new AWS.STS();
sts.assumeRole({
  RoleArn: 'arn:aws:iam::921245065062:role/supreme-S3',
  RoleSessionName: 'supremeSession'
}, function(err, data) {
  if (err) { // an error occurred
    console.log('Cannot assume role');
    console.log(err, err.stack);
  } else { // successful response
    AWS.config.update({
      accessKeyId: data.Credentials.AccessKeyId,
      secretAccessKey: data.Credentials.SecretAccessKey,
      sessionToken: data.Credentials.SessionToken
    });
  }
});

// ==================S3============================================================
const BUCKET_NAME = "thicc-boi-thiccbucket-1lqm0m2iu7gji"
const s3 = new AWS.S3({
  accessKeyId: AWS.config.credentials.accessKeyId,
  secretAccessKey: AWS.config.credentials.secretAccessKey
});

// const uploadFile = (fileLocation, fileName) => {
//   // Read content from the file
//   const fileContent = fs.readFileSync(fileLocation);

//   // Setting up S3 upload parameters
//   const params = {
//       Bucket: BUCKET_NAME,
//       Key: fileName, // File name you want to save as in S3
//       Body: fileContent
//   };

//   // Uploading files to the bucket
//   s3.upload(params, function(err, data) {
//       if (err) {
//           throw err;
//       }
//       console.log(`File uploaded successfully. ${data.Location}`);
//       ipcRenderer.send('success')
//   });
// };

var path = require("path");

const uploadDir = function(s3Path, artistName, bucketName) {

    let s3 = new AWS.S3();

    function walkSync(currentDirPath, callback) {
        fs.readdirSync(currentDirPath).forEach(function (name) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                walkSync(filePath, callback);
            }
        });
    }

    walkSync(s3Path, function(filePath, stat) {
        let bucketPath = artistName + '/' + filePath.substring(s3Path.length + 1);
        let params = {Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath) };
        s3.putObject(params, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log('Successfully uploaded '+ bucketPath +' to ' + bucketName);
            }
        });

    });
};



/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('sendFiles', (event, data) => {
  // console.log(data)
  var fileLocation = data[0];
  var fileName = data[1]
  uploadFile(fileLocation, fileName)
})

ipcMain.on('uploadDir', (event, data) => {
  var path = data[0]
  var artistName = data[1]
  uploadDir(path, artistName, BUCKET_NAME);
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

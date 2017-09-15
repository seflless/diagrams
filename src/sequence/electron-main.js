const {app,BrowserWindow} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.

  mainWindow = new BrowserWindow({
      width: 1000,
      height: 1000,
      show: false
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  const ipcMain = require('electron').ipcMain;
  mainWindow.webContents.on('did-finish-load', function() {
     // Tell the BrowserWindow to generate our SVG for us
     mainWindow.webContents.send('sequence-render-start', {
         inputPath: process.argv[2],
         outputPath: process.argv[3]
     });

     // Listen for when the browserwindow has finished or failed
     ipcMain.on('sequence-error', function(event, message){
         console.log(message);
         app.quit();
     });
     ipcMain.on('sequence-render-finished', function(){
         app.quit();
     });
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev')

// ########################################## Browser Window
let browserWindow;

function createBrowserWindow() {
    browserWindow = new BrowserWindow({
        show: false,
        title: "Electron React Bootstrap Boilerplate",
        webPreferences: {
            nodeIntegration: true
        }
    });
    browserWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'build/index.html')}`)

    if(isDev){
        browserWindow.webContents.openDevTools();
    }

    browserWindow.once('ready-to-show', function (){
        browserWindow.maximize();
        browserWindow.show();
    });
}

// ########################################## App
app.whenReady().then(createBrowserWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
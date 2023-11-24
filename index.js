const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createMainWindow() {

    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        title: 'Electron'
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
    });

    mainWindow.loadURL(startUrl);

}

app.whenReady().then(createMainWindow);
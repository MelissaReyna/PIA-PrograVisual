const { app, BrowserWindow, Menu, ipcMain } = require('electron');

const url = require('url');
const path = require('path');

let mainWindow;
let newProductWindow;

// Reload in Development for Browser Windows
if(process.env.NODE_ENV !== 'production') {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
  });
}


app.on('ready', () => {

  // The Main Window
  mainWindow = new BrowserWindow({
    resizable: false,
    width: 1000, 
    height: 600, 
    icon: path.join(__dirname, 'mathematics-symbol.ico')
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  // Menu
  const mainMenu = Menu.buildFromTemplate(templateMenu);
  // Set The Menu to the Main Window
  Menu.setApplicationMenu(mainMenu);

  // If we close main Window the App quit
  mainWindow.on('closed', () => {
    app.quit();
  });

});


function createSumWindow() {
  newSumWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Opción Sumar'
  });
  newSumWindow.setMenu(null);

  newSumWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'options/sumar.html'),
    protocol: 'file',
    slashes: true
  }));
  newSumWindow.on('closed', () => {
    newSumWindow = null;
  });
}

function createRestWindow() {
  newRestWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Opción Restar'
  });
  newRestWindow.setMenu(null);

  newRestWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'options/restar.html'),
    protocol: 'file',
    slashes: true
  }));
  newRestWindow.on('closed', () => {
    newRestWindow = null;
  });
}

function createMultipWindow() {
  newMultipWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Opción Multiplicar'
  });
  newMultipWindow.setMenu(null);

  newMultipWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'options/multiplicar.html'),
    protocol: 'file',
    slashes: true
  }));
  newMultipWindow.on('closed', () => {
    newMultipWindow = null;
  });
}

function createDivWindow() {
  newDivWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Opción Dividir'
  });
  newDivWindow.setMenu(null);

  newDivWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'options/dividir.html'),
    protocol: 'file',
    slashes: true
  }));
  newDivWindow.on('closed', () => {
    newDivWindow = null;
  });
}


// Menu Template
const templateMenu = [
  {
    label: 'Opciones',
    submenu: [
      {
        label: 'Sumar',
        accelerator: 'Ctrl+S',
        click() {
          createSumWindow();
        }
      },
      {
        label: 'Restar',
        accelerator: 'Ctrl+R',
        click() {
          createRestWindow();
        }
      },
      {
        label: 'Multiplicar',
        accelerator: 'Ctrl+M',
        click() {
          createMultipWindow();
        }
      },
      {
        label: 'Dividir',
        accelerator: 'Ctrl+D',
        click() {
          createDivWindow();
        }
      },
      {
        label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];


// if you are in Mac, just add the Name of the App
if (process.platform === 'darwin') {
  templateMenu.unshift({
    label: app.getName(),
  });
};

// Developer Tools in Development Environment
if (process.env.NODE_ENV !== 'production') {
  templateMenu.push({
    label: 'DevTools',
    submenu: [
      {
        label: 'Show/Hide Dev Tools',
        accelerator: process.platform == 'darwin' ? 'Comand+D' : 'Ctrl+D',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}
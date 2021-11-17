const { ipcRenderer } = require('electron');

document.querySelector('#btnSum').addEventListener('click', (e) => {
  ipcRenderer.send('btnSum_onClick');
});

document.querySelector('#btnRest').addEventListener('click', (e) => {
  ipcRenderer.send('btnRest_onClick');
});

document.querySelector('#btnMult').addEventListener('click', (e) => {
  ipcRenderer.send('btnMult_onClick');
});

document.querySelector('#btnDiv').addEventListener('click', (e) => {
  ipcRenderer.send('btnDiv_onClick');
});

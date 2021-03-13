
const { BrowserWindow } = require('electron').remote;
const path = require('path')
// grab buttons
const adminBtn = document.getElementById('admin-btn')
const staffBtn = document.getElementById('staff-btn')
const pupilsBtn = document.getElementById('pupils-btn')

// create windows param
const createadminWin = () => {
    const adminWin = new BrowserWindow({
        width: 800,
        height: 500,
        autoHideMenuBar: true
    })
    adminWin.loadFile(path.join(__dirname, './admin/base.html'));

};

const createpupilsWin = () => {
    const pupilsWin = new BrowserWindow({
        width: 500,
        height: 700,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    })
    pupilsWin.loadFile(path.join(__dirname, './pupils/base.html'));

};

// click events
adminBtn.addEventListener('click', () => {
    createadminWin()
});

pupilsBtn.addEventListener('click', () => {
    createpupilsWin()
});

var BrowserWindow = require('browser-window')

module.exports = {
  shortcut: 'ctrl + cmd + d',
  handler: toggle,
  description: `
    toggle devtools for a focused window
  `
}

function toggle () {
  (toggle.last = BrowserWindow.getFocusedWindow() || toggle.last)
    .toggleDevTools()
}

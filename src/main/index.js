import { app, BrowserWindow } from 'electron'

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`


const express = require("express");
const apicache = require("apicache");
const path = require("path");

let cache = apicache.middleware; // 缓存

import routes from './routers'

function createWindow () {
  const app = express();
  // 跨域设置
  app.all("*", function(req, res, next) {
      if (req.path !== "/" && !req.path.includes(".")) {
          res.header("Access-Control-Allow-Credentials", true); // 允许跨域
          res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
          res.header("Access-Control-Allow-Headers", "X-Requested-With");
          res.header("Access-Control-Allow-Methods", "PATCH,PUT,POST,GET,DELETE,OPTIONS");
          res.header("Content-Type", "application/json;charset=utf-8");
      }
      next();
  });
  // 状态是否只为200
  const onlyStatus200 = (req, res) => res.statusCode === 200; 

  app.use(cache("2 minutes", onlyStatus200)); // 对接口做缓存，防止网易服务器高频ip错误

  app.use(express.static(path.resolve(__dirname, "public"))); // 设置静态资源访问路径

  app.use(function(req, res, next) {
      const proxy = req.query.proxy;
      if (proxy) {
          req.headers.cookie = req.headers.cookie + `__proxy__${proxy}`;
      }
      next();
  });

  app.use('/', routes); // 后端路由

  const port = 3000;
  app.listen(port, () => {
      console.log(`server running @ http://localhost:${port}`);
  });
  /**
   * 初始化窗口配置
   */
  mainWindow = new BrowserWindow({
    height: 670,
    width: 1000,
    useContentSize: true,
    frame: false,
    title: '仿网易云音乐'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // 隐藏默认菜单
  // mainWindow.setMenu(null)

  require('./ipcMain.js')
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

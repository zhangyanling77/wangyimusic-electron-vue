//接收渲染进程广播的数据执行最小化 最大化  关闭的操作
const { ipcMain,BrowserWindow } = require('electron');

ipcMain.on('window-min',()=>{
    BrowserWindow.getFocusedWindow().minimize()
})

ipcMain.on('window-max',()=>{
    // 如果已经最大化恢复原来的状态,这里不清楚为什么restore不起作用？
    if(BrowserWindow.getFocusedWindow().isMaximized()){
        BrowserWindow.getFocusedWindow().unmaximize() 
     }else{
        BrowserWindow.getFocusedWindow().maximize()
    }
})

ipcMain.on('window-close',()=>{
    BrowserWindow.getFocusedWindow().close()

})
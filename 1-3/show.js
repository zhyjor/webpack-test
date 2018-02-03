function show (content) {
    window.document.getElementById('app').innerText = 'Hello ' + content;
}

//通过commonJS 规范导出函数
module.exports = show;
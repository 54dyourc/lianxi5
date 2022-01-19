/**
 * 递归
 * 读取文件夹再判断文件夹下的是文件夹还是文件,文件夹的话再继续读取
 */
var fs = require('fs');//引用文件系统模块

function findfile(startPath) {
    var result = [];//查询结果
    function finder(path) {
        var files = fs.readdirSync(path);
        console.log(files);
        files.forEach((val, index) => {
            var stats = fs.statSync(path+val);
            if (stats.isDirectory()) {
                finder(path+val+"/");
            }
            if (stats.isFile()) {
                result.push(val);
            }
        });
    }
    finder(startPath);
    return result;
}
var fileNames = findfile('G:/nodeProjects/js/');
console.log(fileNames);
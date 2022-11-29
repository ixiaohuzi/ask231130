document.write("<script src=\"//unpkg.com/docsify/lib/docsify.min.js\"></script>");

var urlPath = window.document.location.href;  //浏览器显示地址 http://10.15.5.83:5555/ISV/demo.aspx?a=1&b=2
var docPath = window.document.location.pathname; //文件在服务器相对地址 /ISV/demo.aspx
var index = urlPath.indexOf(docPath);
var serverPath = urlPath.substring(0, index);

console.log(serverPath)
console.log(docPath)
console.log(urlPath)


$.get('test.txt',function(data) {
    var lines = data.split("\n"); //按行读取

    $.each(lines,function(i, v) {
        console.log(v);
    });
});
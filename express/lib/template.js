var template = {   //===module.exports = {
    html:function(title, list, body, control){
        return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB1</a></h1>
    ${list}
    ${control}

    ${body}
  </body>
  </html>
  `;
    },
    list:function(filelist){
        var list = '<ul>';
        var i = 0;
        while(i < filelist.length){
            list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
        }
        list = list+'</ul>';
        return list;
    }
}
module.exports = template; //이거 안쓰고 1번쨰 줄
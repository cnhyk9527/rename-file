/*
 * @Author: yanlichen
 * @Date: 2021-05-26 17:24:25
 * @LastEditors: yanlichen
 * @LastEditTime: 2021-05-26 18:17:18
 * @Description: Do not edit
 */
(function (key, type) {
  /*
  type: replace直接替换 interReplace截取替换
  */
  let fs = require('fs')
  let path = './file'
  let file = fs.readdirSync(path)
  file.forEach(v => {
    let name = path + '/' + v
    switch (type) {
      case 'replace':
        /*
        key[0]需要替换的字符
        key[1]要替换成的字符
        */
        fs.rename(name, name.replace(key[0], key[1]), err => {
          if (err) {
            throw err
          }
        })
        break;
      case "interReplace":
        fs.rename(name, path + '/' + v.slice(v.indexOf(key) + 1), err => {
          if (err) {
            throw err
          }
        })
        break
    }

  })
})('-', 'interReplace')
// function addScript('lib\jquery.js'){
// 	document.write("<script language=javascript src="+url+"></script>");
// }
// var url = "http://www.liulongbin.top:3007"
// console.log(122)
// 对输入内容进行限制
var zh = document.getElementById('username')
var mm = document.getElementById('password')

zh.onblur = function() {
        if (zh.value) {
            if (zh.value.length < 6) {
                console.log('用户名太短了')
                return
            }
        }

    }
    // 使用原生Ajax请求

// 如果用户名和密码注册时被占用，提示已被占用
// 1.获取用户输入的用户名和密码
var zc = document.getElementById('zhuce')
zc.onclick = function() {
    let zh = document.getElementById('username').value
    let mm = document.getElementById('password').value
        // console.log(typeof(zh))
        // console.log(typeof('admin'))
        // console.log(zhmm)
        //Ajax请求
        // 1. 创建 xhr 对象
    var xhr = new XMLHttpRequest()
        // 2. 调用 open()
    xhr.open('POST', 'http://www.liulongbin.top:3007/api/reguser')
        // 3. 设置 Content-Type 属性（固定写法）
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        // 4. 调用 send()，同时将数据以查询字符串的形式，提交给服务器
        // console.log(`username=${zh.toString()}&password=${mm.toString()}`)
        // xhr.send(`'username=${zh}&password=${mm}'`)
    xhr.send(`username=${zh}&password=${mm}`)
        // 5. 监听 onreadystatechange 事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
    zh.value = null
    mm.value = null
}


// 登录
var dl = document.getElementById('denglu')
dl.onclick = function() {
    let zh = document.getElementById('username').value
    let mm = document.getElementById('password').value

    //Ajax请求
    // 1. 创建 xhr 对象
    var xhr = new XMLHttpRequest()
        // 2. 调用 open()
    xhr.open('POST', 'http://www.liulongbin.top:3007/api/login')
        // 3. 设置 Content-Type 属性（固定写法）
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        // 4. 调用 send()，同时将数据以查询字符串的形式，提交给服务器
        // console.log(`username=${zh.toString()}&password=${mm.toString()}`)
        // xhr.send(`'username=${zh}&password=${mm}'`)
    xhr.send(`username=${zh}&password=${mm}`)
        // 5. 监听 onreadystatechange 事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
            localStorage.setItem('token', xhr.responseText.token)
            location.href = './index.html'
        }
    }
}
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
            const data = JSON.parse(xhr.responseText)
                // 注册成功后清楚数据，停留在原地
            if (data.status != 0) {
                alert(data.message)
                zh.value = null
                mm.value = null
                location.href = './loge.html'
            } else {
                alert(data.message)
            }
        }
    }


}

// 用户信息的请求
// 获取用户信息
function userApi(Authorization) {
    // 1. 创建 XHR 对象
    var xhr = new XMLHttpRequest()
        // 2. 调用 open 函数，指定 请求方式 与 URL地址
    xhr.open('GET', 'http://www.liulongbin.top:3007/my/userinfo')
        // 3. 调用 send 函数，发起 Ajax 请求
    xhr.setRequestHeader('Authorization', Authorization)
    xhr.send()
        // 4. 监听 onreadystatechange 事件
    xhr.onreadystatechange = function()  {
        // 4.1 监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status
        if  (xhr.readyState === 4 && xhr.status === 200) {
            // 4.2 打印服务器响应回来的数据
            localStorage.setItem('data', xhr.responseText)
            const data = JSON.parse(localStorage.getItem('data'))
                // console.log(JSON.parse(localStorage.getItem('data')))
            console.log(data.message)
            location.href = './index.html'
        }
    }
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
    xhr.send(`username=${zh}&password=${mm}`)
        // 5. 监听 onreadystatechange 事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 原生Ajax返回的数据格式JSON字符串，需要转换为JS对象
            const data = JSON.parse(xhr.responseText)
            token = data.token
                // 获取通过ajax返回的数据，其中有个token用来验证用户身份，同时将token保存在浏览器本地中
            localStorage.setItem("token", token)
            if (data.status == 0) {
                try {
                    userApi(token)
                        // console.log(2)
                } catch (err) {
                    console.log(err)
                        // console.log(3)
                }
            } else {
                alert(data.message)
            }
        }
    }
}
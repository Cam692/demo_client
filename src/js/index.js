// 文章类别
const wenzhangliebian = document.getElementById("wenzhangliebian")
    // 文章列表
const wenzhangliebiao = document.getElementById("wenzhangliebiao")
    // 发布文章
const fabuwenzhang = document.getElementById("fabuwenzhang")
    // 基本资料
const jibenziliao = document.getElementById("jibenziliao")
    // 更换头像
const genghuantouxiang = document.getElementById("genghuantouxiang")
    // 重置密码
const chongzhimima = document.getElementById("chongzhimima")

// 点击文章管理展开子标签
var wenzhangguanli = document.getElementById("wenzhangguanli")
count = 3
wenzhangguanli.onclick = function() {
    if ((count % 2) != 0) {
        wenzhangliebian.style.display = "block"
        wenzhangliebiao.style.display = "block"
        fabuwenzhang.style.display = "block"
        if (jibenziliao.style.display === "block") {
            jibenziliao.style.display = "none"
            genghuantouxiang.style.display = "none"
            chongzhimima.style.display = "none"
            count1 = count1 + 1
            count = count + 1
            return false

        }
    }

    if ((count % 2) === 0) {
        wenzhangliebian.style.display = "none"
        wenzhangliebiao.style.display = "none"
        fabuwenzhang.style.display = "none"

    }
    count = count + 1
    return false
}

// 点击个人中心展开子标签
var gerenzhongxin = document.getElementById("gerenzhongxin")
count1 = 3;
gerenzhongxin.onclick = function() {
        if ((count1 % 2) != 0) {
            jibenziliao.style.display = "block"
            genghuantouxiang.style.display = "block"
            chongzhimima.style.display = "block"
            if (wenzhangliebian.style.display === "block") {
                wenzhangliebian.style.display = "none"
                wenzhangliebiao.style.display = "none"
                fabuwenzhang.style.display = "none"
                count = count + 1
                count1 = count1 + 1
                return false
            }

        }
        if ((count1 % 2) === 0) {
            jibenziliao.style.display = "none"
            genghuantouxiang.style.display = "none"
            chongzhimima.style.display = "none"
            return false
        }
        count1 = count1 + 1
        return false
    }
    // // 文章管理
    // const obj17 = document.getElementById("wenzhangguanli")
    // var count = 3
    // obj17.onclick = function() {
    //         if ((count % 2) != 0) {
    //             obj11.style.display = "block"
    //             obj12.style.display = "block"
    //             obj13.style.display = "block"
    //             if (obj14.style.display === "block") {
    //                 obj14.style.display = "none"
    //                 obj15.style.display = "none"
    //                 obj16.style.display = "none"
    //                 count1 = count1 + 1
    //                 count = count + 1
    //                 return false

//             }
//         }

//         if ((count % 2) === 0) {
//             obj11.style.display = "none"
//             obj12.style.display = "none"
//             obj13.style.display = "none"

//         }
//         count = count + 1
//         return false

//     }
//     //个人中心
// var count1 = 3
// var obj18 = document.getElementById('gerenzhongxin')
// var obj19 = obj18.getElementsByTagName('dd')
// obj18.onclick = function() {
//     console.log(obj19)
//     if ((count1 % 2) != 0) {
//         console.log(obj14)
//         obj14.style.display = "block"
//         obj15.style.display = "block"
//         obj16.style.display = "block"
//         if (obj11.style.display === "block") {
//             obj11.style.display = "none"
//             obj12.style.display = "none"
//             obj13.style.display = "none"
//             count = count + 1
//             count1 = count1 + 1
//             return false
//         }

//     }
//     if ((count1 % 2) === 0) {
//         obj14.style.display = "none"
//         obj15.style.display = "none"
//         obj16.style.display = "none"
//         return false
//     }
//     count1 = count1 + 1
//     return false

// }

// 退出
function tuichu() {
    const obj = document.getElementById("tuichu")
    location.href = './loge.html'
    localStorage.removeItem("token")
}
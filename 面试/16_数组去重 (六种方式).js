/*
 * @Description:
 * @Author: Wangyue
 * @Date: 2021-12-02 20:03:29
 * @LastEditTime: 2021-12-21 14:52:47
 * @LastEditors: Wangyue
 * @Reference:
 */
/*   数组去重：让数组所有元素都独一无二，没有重复元素   */

// 创建一个含有重复元素的数组
let arr = [1, 1, 2, 3, 3, 6, 7, 2, 9, 9]

// 第一种方法：利用 Set数据结构 + Array.from() 函数
function removeRepeat1(arr) {
    return Array.from(new Set(arr))
}

// 第二种方法： 利用 Set数据结构 + ...扩展运算符
function removeRepeat2(arr) {
    return [...new Set(arr)]
}

// 第三种方法： 利用for嵌套for，然后splice去重（ES5中最常用）
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1)
                j--
            }
        }
    }
    return arr
}

// 第四种方法： 利用 indexOf 函数
function removeRepeat3(arr) {
    let new_arr = []

    for (let i in arr) {
        let item = arr[i]

        if (new_arr.indexOf(item) === -1) {
            new_arr.push(item)
        }
    }

    return new_arr
}

// 第五种方法： 利用 includes 函数
function removeRepeat4(arr) {
    let new_arr = []

    for (let i in arr) {
        let item = arr[i]

        if (!new_arr.includes(item)) {
            new_arr.push(item)
        }
    }

    return new_arr
}

// 第六种方法： 利用 filter 函数
function removeRepeat5(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index
    })
}

// 第七种方法： 利用 Map 数据结构
function removeRepeat6(arr) {
    let map = new Map()
    let new_arr = []

    for (let i in arr) {
        let item = arr[i]

        if (!map.has(item)) {
            map.set(item, true)
            new_arr.push(item)
        }
    }

    return new_arr
}

// 测试方法
console.log(removeRepeat1(arr))
console.log(removeRepeat2(arr))
console.log(removeRepeat3(arr))
console.log(removeRepeat4(arr))
console.log(removeRepeat5(arr))
console.log(removeRepeat6(arr))

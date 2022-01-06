/*  数组扁平化就是将多维数组转成一维数组   */

// 多维数组
let arr = [1, 2, [3, 4, [6, 7]]]

// 第一种方法：利用 flat() 函数
function flatArr1(arr) {
    return arr.flat(Infinity)
}

// 第二种方法： 正则匹配
function flatArr2(arr) {
    return JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']')
}

// 第三种方法：利用 reduce() 遍历所有的元素
function flatArr3(arr) {
    return arr.reduce((i, j) => {
        return i.concat(Array.isArray(j)? flatArr3(j) : j)
    }, [])
}

// 第四种方法：直接使用递归函数
function flatArr4(arr) {
    let new_arr = []

    function innerArr(v) {
        for(let i in v) {
            let item = v[i]

            if(Array.isArray(item)) {
                innerArr(item)
            } else {
                new_arr.push(item)
            }
        }
    }

    innerArr(arr)

    return new_arr
}

// 方法测试
console.log(flatArr1(arr));
console.log(flatArr2(arr));
console.log(flatArr3(arr));
console.log(flatArr4(arr));

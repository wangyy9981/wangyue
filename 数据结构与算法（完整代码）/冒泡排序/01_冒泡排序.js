/*
 * @Description:
 * @Author: Wangyue
 * @Date: 2021-12-02 20:03:12
 * @LastEditTime: 2021-12-21 14:47:33
 * @LastEditors: Wangyue
 * @Reference:
 */
function bubbleSort(arr) {
    // 两个数据进行交换
    function exchange(v1, v2) {
        let temp = arr[v1]
        arr[v1] = arr[v2]
        arr[v2] = temp
    }

    // 数组长度
    let length = arr.length

    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                exchange(j, j + 1)
            }
        }
    }

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // 返回最终数组
    return arr
}

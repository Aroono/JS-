/**
 * 只能搜索
 * 根据“80-20”原则，我们常用的数据其实只占20%，所以希望随着搜说次数的增加，能够更快的搜到常用数据
 * 搜到这个数据返回true，否则返回false。只不过如果搜到的话会把这个数据向前移动一位，这样随着搜索次数的增加，常用的数据会一直往前移动，从而逐渐减少搜索次数。
 */
function seqSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === data) {
            if (i > 0) {
                const temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
            }
            return true
        }
    }
    return false
}

/**
 * 二分搜索
 * 二分搜索的前提条件是数据必须有序，起初设置一个上限和下限，然后通过循环比较中间的数字和数据的大小来缩小查找范围
 */
function binSearch(arr, val) {
    let up = arr.length - 1
    let down = 0
    while (down <= up) {
        const mid = Math.floor((up + down) / 2)
        if (arr[mid] < val) {
            down = mid
        } else if (arr[mid] > val) {
            up = mid
        } else {
            return mid
        }
    }
    return -1
}
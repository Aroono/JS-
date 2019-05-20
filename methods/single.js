// 给定一个整数数组，除了某个元素外其余元素均出现两次。请找出这个只出现一次的元素。线性时间复杂度
function singleNumber(arr) {
    arr.sort()
    for(let i = 0; i < arr.length; i++) {
        const prev = arr[i]
        const next = arr[i + 1]
        if (prev !== next) {
            return prev
        }
    }
}
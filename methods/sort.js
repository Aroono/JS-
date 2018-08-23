// 冒泡排序
// 时间复杂度 O(n²)
// 思路就是两个循环，让数组中的每一项都与后面所有的数比较，如果这一项比后面的数字大，则交换位置
function bubbleSort(ary) {
    for (let i = 0; i < ary.length; i++) {
        for (let j = i + 1; j < ary.length; j++) {
            if (ary[i] > ary[j]) {
                //交换位置
                let temp = ary[i]
                ary[i] = ary[j]
                ary[j] = temp
            }
        }
    }
    return ary
}

// 选择排序
// 冒泡是比较前后两个交换位置，而选择排序是先找到后面所有数字最小的，再与当前数字交换位置
function slectionSort(ary) {
    let min
    for (var i = 0; i < ary.length - 1; i++) {
        min = i
        for (var j = i + 1; j < ary.length; j++) {
            if (ary[j] < ary[min]) {
                min = j
            }
        }
        let temp = ary[min]
        ary[min] = ary[i]
        ary[i] = temp
    }
    return ary
}


// 插入排序
// 思路就是从第二项开始拿数字，然后用这个数字逐个与前面的数字比较，找到比它小的然后放到它后面
function insertSort(ary) {
    for(let i=1;i<ary.length;i++){
        let j = i;
        let temp = ary[i];
        //循环找到比它小的是第j-1项
        while(j>0 && ary[j - 1]>temp){
            ary[j] = ary[j-1]
            j--
        }
        //把第j项赋值为temp，相当于把temp插入到第j-1项后面了
        ary[j] = temp
    }
    return ary
}

// 归并排序
// Firefox浏览器的Array.prototype.sort就是归并排序，Chrome浏览器用的是快速排序
// 思路：归并排序的思想是分而治之。我理解就是把一个数组从中间无限分割，直到只剩一个元素，然后把这些数组的item取出来放入最后的数组中
function mergeSort(ary) {
    if (ary.length == 1) {
        return ary
    }
    let mindle = Math.floor(ary.length / 2)
    let left = ary.slice(0, mindle)
    let right = ary.slice(mindle)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    let result = []
    let il = 0
    let ir = 0
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < left.length) {
        result.push(left[il++])
    }
    while (ir < right.length) {
        result.push(right[ir++])
    }
    return result
}

// 快速排序
// 快排采用的是递归的方法，将数据依次分解为较小的数据集合(left)和较大的数据集合(right)，最后把这左中右三个数组组合在一起
function fastSort(ary) {
    if (ary.length == 0) {
        return []
    }
    let pivot = ary[0]
    let left = [], right = []
    for (let i = 1; i < ary.length; i++) {
        let current = ary[i]
        if (current < pivot) {
            left.push(current)
        } else {
            right.push(current)
        }
    }
    return fastSort(left).concat(pivot, fastSort(right))

}





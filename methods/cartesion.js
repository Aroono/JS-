// 任意长度数组的笛卡尔积
function cartesion (...arys) {
    if (arys.length === 0) {
        return []
    }
    if (arys.length === 1) {
        return arys
    }
    return arys.reduce((prev, item) => {
       let arr = []
       for (let i = 0; i < prev.length; i++) {
           for (let j = 0; j < item.length; j++) {
               arr.push(Array.isArray(prev[i]) ? [...prev[i], item[j]] : [prev[i], item[j]])
           }
       }
       return arr
    })
}

console.log(cartesion([1,2],['a','b'],[3,4]))
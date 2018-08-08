// 递归1：
function fb(n){
    var res = [1,1];
    if(n == 1 || n == 2){
        return 1;
    }      
    for(var i=2;i<n;i++){
        res.push(res[i-1] + res[i-2]);
    }
    return res;
}
console.log(fb(10))

// 递归2:
// 声明了一个catch数组用来缓存，递归之前判断如果该项没有值才会进行递归
function fibonacciCatch(num) {
    let cache = [1, 1];
    (function fibonacci(n) {
        return typeof cache[n] == 'number' ? cache[n] : (cache[n] = fibonacci(n - 1) + fibonacci(n - 2))
    })(num - 1);
    return cache;
}
console.log(fibonacciCatch(10))

// Generator
function* fibonacci() {
    let a = 1, b = 1
    yield a
    yield b
    while (true) {
        const t = b
        b = a + b
        a = t
        yield b
    }
}

function fibonacciGenerator(n) {
    let it = fibonacci()
    return Array.from(Array(n), it.next, it).map(x => x.value)
}
console.log(fibonacciGenerator(10))  //[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]


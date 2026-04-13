function parimpar(n) {
    if (n%2 == 0) {
        return'Par!'
    } else {
        return 'impar!'
    }
}

console.log(parimpar(5))


function soma(n1 , n2) {
    return n1 + n2
}

console.log(soma(1,3))

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1 ; c--) {
        fat *= c
    }
        
    return fat
}

console.log(fatorial(5))
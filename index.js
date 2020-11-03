if(window){
    import('./my-module.js').then(module => {
        console.log(module.a)
    })
}else{
    console.log('now is not browser runtime')
}

// ??
const nullType = null
const emptyText = " "
const numType = 42

let val1 = nullType ?? 'default value A';
let val2 = emptyText ?? 'default value B'
let val3 = numType ?? 0

console.log(val1,val2, val3)

// 
const man = {
    name: 'pachverb'
}
let user_name = man?.name   // 'pa..'
let user_city = man?.city ?? 'No Set'   // undefined
console.log(user_name, user_city)

// bigint
let a = 2n
console.log(typeof a) // bigint

// global
console.log(globalThis)
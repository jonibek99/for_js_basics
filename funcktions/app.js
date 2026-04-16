// function Hello(){
//     console.log('hello world')
// }
// Hello()

// const hello=function(){
//     console.log('hello my funcktion')
// }
// hello()


// const me = () => {
//     console.log('hi')
// }
// me()




// function My_first_function(name){
//     return `Hello mr ${name} good morning`
// }
// console.log(My_first_function(prompt('enter name')))



// const my_funck=function(num){
//     let a=2*34*num
//     return a
// }
// let a=Number(prompt('enter number'))
// console.log(my_funck(a))


// let plus=(a,b)=>{
//     return a+b
// }
// let a=Number(prompt('enter  1 thnumber'))
// let b=Number(prompt('enter 2nd  number'))

// console.log(plus(a,b))



// function arrays(a){
//     let list=[]
//     for(let i=0;i<=a.length;i++){if(a[i]%2==0){list.push(a[i])}}
//     return list
// }
// let arr=[2,3,4,5,6,7,8,9,10]
// console.log(arrays(arr))



function count_chars(he){
    let obj = {}

    for(let i = 0; i < he.length; i++){
        let char = he[i]

        if(obj[char]){
            obj[char]++
        } else {
            obj[char] = 1
        }
    }
    return obj
}
console.log(count_chars(String(prompt('enter something'))))
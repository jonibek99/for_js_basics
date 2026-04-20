// let arr_names=['jonibek','Azizbek','Otabek','Laziz']

// let  new_ismlar=[]
// arr_names.forEach(function(names){
//    let new_names = 'Hello ' + names.charAt(0).toUpperCase() + names.slice(1).toLowerCase()
// if(!new_names.includes('bek')){
//     new_names=new_names+"bek"
// }
// new_ismlar.push(new_names)
// })
// console.log(new_ismlar)


// let names = ['ali', 'vali', 'hasan']

// let list=[]
// names.forEach(function(names){
//     let new_name=names.charAt().toUpperCase()+names.slice(1).toLowerCase()
//     list.push(new_name)
// })
// console.log(list)


// let numbers = [1,2,3,4]
// let list=[]
// numbers.forEach(function(number){
//     let a=number*2
//     list.push(a)
// })
// console.log(list)

// let users = [
//   {name: 'ali', age: 17},
//   {name: 'vali', age: 22},
//   {name: 'hasan', age: 15}
// ]

// let list=[]

// users.forEach(function(user){
//     if(user.age>18){
//         user=user.name,user.age
//     }
//     list.push(user)
// })
// console.log(list)

// let data = {
//   numbers: [1,2,3,4,5]
// }

// function getEven(obj){
//     let list = []

//     obj.numbers.forEach(function(n){
//         if(n % 2 === 0){
//             list.push(n)
//         }
//     })

//     return list
// }

// console.log(getEven(data))

// let orders = [
//   {user: 'ali', total: 100},
//   {user: 'vali', total: 200},
//   {user: 'ali', total: 50}
// ]
// let res={}
// orders.forEach(order=>{
//     if(res[order.user]){
//         res[order.user]+=order.total;
//     } else{
//         res[order.user]=order.total
//     }
// });

// let users = [
//   {name: 'ali', skills: ['js', 'html']},
//   {name: 'vali', skills: ['css', 'js']}
// ]
// let res={}
// users.forEach(user=>{
//     res[user.skills]=user.skills.length
// });
// console.log(res)


// let data = {
//   numbers: [3, 7, 10, 15, 20]
// }
// let list=[]

// data.numbers.forEach(n=>{
//     if(n>10){list.push(n)};

// })
// console.log(list)

let res = {}

let users = [
  {name: 'ali', age: 20},
  {name: 'vali', age: 25},
  {name: 'ali', age: 30}
]

users.forEach(user => {
  res[user.name] = (res[user.name] || 0) + 1
})

console.log(res)
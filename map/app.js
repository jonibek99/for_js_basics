let arr=[5,2,3,15,20,49,40,33,150,75]
// let list=[]
// console.log(
//     arr.map((i)=>{
//         if(i%2!==0) {
//              list.push(i**2)
//         }
//     })
// );
// console.log(list)




// arr.forEach((i)=>{
//     if(i%3===0 && i%5===0){
//         console.log(i)
//     }
// })


let filters=arr.filter((i)=>i%2==0)
console.log(filters);


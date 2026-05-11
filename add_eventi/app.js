// let button =document.querySelector('button')
// button.addEventListener('click',()=>{
//     console.log('You clicked my page')
// })

let items=document.querySelectorAll('li')

items.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log(`you just touched ${e.target}`)
    })
})



let button=document.querySelector('button')
button.addEventListener('click',(e)=>{
    console.log('you just touched buton ')
})
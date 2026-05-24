let student='success'
let promise=new Promise((resolve,reject)=>{
    if (student=='success'){
        let data='reading'
        let place='sharshara'
        resolve(data)

    }else{
        let data='playing'
        reject(data)
    }
})
promise.then((data)=>{
    return data
}).then((data)=>{console.log(data)}).then((place)=>{
    return place
}).then((place)=>{
    console.log(place)
}).catch((error) => {
        console.log(error)

})
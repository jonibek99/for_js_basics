// 1 - Masala juft || toq
// let num=Number(prompt('enter your number'))
// const juft_Toq=(val)=>{
// if (val%2==0){return('Juft')} else{return("toq")} // 1 - Masala
// }
// console.log(juft_Toq(num))

// 2 masala harorat
// const My_Fucktion=(value)=>{
// if(value<0){
//     return('juda sovuq')
// } else if(value >0 && value<20){
//     return('Salqin')
// } else if( value>20 && value<35){
//     return('ILliq/Issiq')
// } else{
//     return('Juda issiq')
// }
// }
//  console.log(My_Fucktion(num))


//3 masala kabisa yili
// const Cabisa_yili=(val)=>{
// if(val%4==0 && val%100!=0 || val %400==0){
//     return('Kabisa yili')
// } else{
//     return('Kabisa mas')
// }
// }
//  console.log(Cabisa_yili(num))

//4 masala baholash tizimi

// const baholash_tizim=(val)=>{
// switch (true) {
//     case val <60:
//         return('F');
//         break;
//     case val >=60 && val<70:
//         return ('D');
//         break;
//     case val>=70 && val<80:
//         return ('C');
//         break;
//     case val>=80 && val <90:
//         return ('B');
//         break;
//     case val>=90 && val<100:
//         return ('A');break;
//     default:
//         return ('notgri ball');
    
// }
// }

//  console.log(baholash_tizim(num))


//5 masala 3 ta sondan katasini topish

// const kattasini_topish=(a,b,c)=>{
// if(a>b&&a>c){
//     return( a+'kattasi')
// } else if(b>a&&b>c){
//     return( b+'eng kattasi')
// } else{
//     return(c+"eng kattsi")
// }
// }
// let a=Number(prompt('enter a'))
// let b=Number(prompt('enter b'))
// let c=Number(prompt('enter c'))
//  console.log(kattasini_topish(a,b,c))


// 6 masala chegirma
// const Chegurma_funck=(val)=>{val
// if(val>100000){
//     let discount=val*0.10;
//     let final_cost=val-discount;
// return('chegirma ' +" "+ discount);
//     return('yakuniy chegirma '+" "+ final_cost);
// } else{
//     return('chegirma yuq');
//     return('yakuniy tulov '+" "+ val)
// }
// }
// console.log(Chegurma_funck(num))


//7 masala yosh chegarasi
// const Yosh_Masalasi=(val)=>{
// if (val>=18){
//     return('Ruxsat etildi')
// }else{
//     return('Kattalar bn kirishingiz mumkin')
// }
// }
// console.log(Yosh_Masalasi(num))


//8 masala kalkulator
//  let a=Number(prompt('enter a'))
//  let b=Number(prompt('enter b'))
//  let c=prompt('enter operator')
// const cla_culator=(a,b,c)=>{

//  switch (c){
//     case '+':
//         return(a+b); break;
//     case '-':
//         return(a-b);break;
//     case '*':
//         console.log(a*b);break;
//     case '/':
//         if (b != 0) {
//             return(a / b);
//         } else {
//             return("0 ga bo'lish mumkin emas");
//         }
//         break;
//     default:
//         return('Notugri amal')
//  }
// }
// console.log(cla_culator(a,b,c))
//9 masala kvadrat

// const Kvadrat_Yuzi=(a,b)=>{
//  let a=Number(prompt('enter a'))
//  let b=Number(prompt('enter b'))
//  if(a===b){
//     return('Bu kvadrat')
//  } else{
//     return('Bu turtburchak')
//  }
// }
// console.log('turtburchak yuzasi '+" "+a*b)
// console.log(Kvadrat_Yuzi(a,b))


//10 masala musbat , manfir yoki 0
// const Calculator=(val)=>{
// switch(true){
//     case val>0:
//         return('Musbat');break;
//     case val<0:
//         return('Manfiy');break;
//     default:
//         return('Nol')
// }
// }
// console.log(Calculator(num))



// let li = []

// const list_array = (list) => {
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] % 2 == 0) {
//             li.push(list[i])
//         }
//     }
//     return li
// }
// let lists = [1,2,3,4,5,6,7,8,9,10]

// console.log(list_array(lists))

// setTimeout(() => {
//     console.log('interval ishladi', list_array(lists))
// },4000)





// let cout=0;
// const interval=setInterval(()=>{
//     cout++;
//     if (cout%2===0){
//         console.log(cout**2)
//     }
//     if(cout==10){
//         clearInterval(interval);
//     }
// },5000);
let list=[]
let arr= [5, 2, 3, 15, 20, 49, 40, 33];
for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0 && arr [i] % 5==0){
        list.push(arr[i])
    }
}
console.log(list)
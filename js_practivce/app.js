// 1 - Masala juft || toq

let num=Number(prompt('enter your number'))
// if (num%2==0){console.log('Juft')} else{console.log("toq")}.  // 1 - Masala


//2 masala harorat

// if(num<0){
//     console.log('juda sovuq')
// } else if(num >0 & num<20){
//     console.log('Salqin')
// } else if( num>20 & num<35){
//     console.log('ILliq/Issiq')
// } else{
//     console.log('Juda issiq')
// }


//3 masala kabisa yili

// if(num%4==0 & num%100!=0 || num %400==0){
//     console.log('Kabisa yili')
// } else{
//     console.log('Kabisa mas')
// }

//4 masala baholash tizimi
// switch (true) {
//     case num <60:
//         console.log('F');
//         break;
//     case num >60 && num<70:
//         console.log('D');
//         break;
//     case num>=70 && num<80:
//         console.log('C');
//         break;
//     case num>=80 && num <90:
//         console.log('B');
//         break;
//     case num>=90 && num<100:
//         console.log('A');break;
//     default:
//         console.log('notgri ball');
    
// }


//5 masala 3 ta sondan katasini topish

// let a=Number(prompt('enter a'))
// let b=Number(prompt('enter b'))
// let c=Number(prompt('enter c'))

// if(a>b&&a>c){
//     console.log( a+'kattasi')
// } else if(b>a&&b>c){
//     console.log( b+'eng kattasi')
// } else{
//     console.log(c+"eng kattsi")
// }

// 6 masala chegirma
// if(num>100000){
//     let discount=num*0.10;
//     let final_cost=num-discount;
//     console.log('chegirma ' +" "+ discount);
//     console.log('yakuniy chegirma '+" "+ final_cost);
// } else{
//     console.log('chegirma yuq');
//     console.log('yakuniy tulov '+" "+ num)
// }
//7 masala yosh chegarasi

// if (num>=18){
//     console.log('Ruxsat etildi')
// }else{
//     console.log('Kattalar bn kirishingiz mumkin')
// }



//8 masala kalkulator

//  let a=Number(prompt('enter a'))
//  let b=Number(prompt('enter b'))
//  let c=prompt('enter operator')

//  switch (c){
//     case '+':
//         console.log(a+b); break;
//     case '-':
//         console.log(a-b);break;
//     case '*':
//         console.log(a*b);break;
//     case '/':
//         if (b != 0) {
//             console.log(a / b);
//         } else {
//             console.log("0 ga bo'lish mumkin emas");
//         }
//         break;
//     default:
//         console.log('Notugri amal')
//  }

//9 masala kvadrat

//  let a=Number(prompt('enter a'))
//  let b=Number(prompt('enter b'))
//  if(a===b){
//     console.log('Bu kvadrat')
//  } else{
//     console.log('Bu turtburchak')
//  }
//  console.log('turtburchak yuzasi '+" "+a*b)


//10 masala musbat , manfir yoki 0

switch(true){
    case num>0:
        console.log('Musbat');break;
    case num<0:
        console.log('Manfiy');break;
    default:
        console.log('Nol')
}



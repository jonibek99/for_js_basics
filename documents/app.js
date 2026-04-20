// let user={
//     name:'jonibek',
//     Surname:'Annaev',
//     nation:'Uzbek',
//     relegion:'Islam',
//     lang:['Uzbek','English','tajik','Python','Js'],
//     location:'Samarqand',
//     country:'Uzbekistan',
//     age:20,
//     login:function(){
//         console.log('siz saytga kirdingiz')
//     },
//     logout:function(){
//         console.log('siz saytdan chiqdingiz')
//     }
// }

// user.login()
// user.logout()

let user = {
  name: 'ali',
  age: 20,
 getInfo: function(){
    console.log(`${user.name} ${user.age} yoshda`)
 }
}

user.getInfo()
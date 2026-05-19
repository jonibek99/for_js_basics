function Person(f_name,l_name) {
    this.f_name=f_name
    this.l_name=l_name
    this.My_func=()=>{
        console.log(` Salom ${this.f_name} xush kelibsiz ${this.l_name} `)
    }
}
Person.prototype.convertAge=function(age){
    console.log(`${this.f_name} age is ${age}`)
}

const F_Person=new Person('samamndar','annnoev')
const sec_person=new Person('jonibek','abdu')
F_Person.convertAge(22)
sec_person.convertAge(33)
 F_Person.My_func()
 sec_person.My_func()

 console.log(F_Person)
 console.log(sec_person)
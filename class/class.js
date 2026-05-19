class Person{
    constructor(f_name, l_name){
        this.f_name=f_name
        this.l_name=l_name
    }

    whole=()=>{
        return ` hello ${this.f_name} ${this.l_name}`
    }
    business=()=>{
        return `${this.f_name} is a programmer and his last name is ${this.l_name}`
           
        }
    }
class Person_status extends Person{
    constructor(f_name,l_name,age,job){
        super(f_name,l_name)
        this.age=age
        this.job=job
    }

    full_info=()=>{
        return `Username:${this.f_name}, last_name:${this.l_name}, age:${this.age}, job:${this.job}`
    }
    small=()=>{
        return ` the user is ${this.f_name} his last name is ${this.l_name} he is ${this.age} and his job is a ${this.job}`
    }
}
let f_person=new Person('jonibek','annaev')

let fuLL_info=new Person_status('jonibek','annaev',20,'programmer')

console.log(f_person.whole())
console.log(f_person.business())

console.log(fuLL_info.full_info())
console.log(fuLL_info.small())




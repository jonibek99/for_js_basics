//7 masala
// let products = [
//   { name: "A", category: "Texnika" },
//   { name: "B", category: "Kiyim" },
//   { name: "C", category: "Texnika" }
// ]

// products.forEach((product)=>{
//     if(product.category===products.category)
// })
// 8 masala
let students = [
  { name: "Ali", score: 80 },
  { name: "Vali", score: 55 },
  { name: "Sami", score: 95 },
  { name: "Joni", score: 40 }
]
let list=[]
let sum=0
let max_score=0
let failed_score=0

students.forEach((student)=>{
  sum+=student.score
  if(student.score>max_score){
    max_score=student.score
  }
  if(student.score<60){
    failed_score++
  
  }
})
let result = {
  average: sum / students.length,
  max: max_score,
  failed: failed_score
}
console.log(result)

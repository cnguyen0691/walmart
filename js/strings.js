
let gradec = function(score, total){
    let percent = (score/total)*100
    let letter =''

    if (percent >= 90)  {
        letter =  'A'
   }else if ( percent >=80) {
       letter = 'B'
   }else if (percent>=70){
       letter =  'C'
   }else if (percent >=60){
       letter = 'D'
       } else {
        letter = 'F'
       }
   return `You got a ${letter} (${percent}%)`
}

let result = gradec(35, 45)
console.log(result)
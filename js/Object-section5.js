
let me={
    name: 'Andrew',
    age: 27,
    location: 'Philadephia'
}

 console.log(`${me.name} is ${me.age} and lives in ${me.location}`)

 me.age = me.age + 1

 console.log(`${me.name} is ${me.age} and lives in ${me.location}`)

 //how object work with function video 28



let summary = function(Fah){
    return{
        Fah: Fah,
        Cel: (Fah-32) *5/9,
         Kel :(Fah+32) *5/9
       
      
    }
    
}
let temp = summary(76)
console.log(temp)

//trying to model video 30
let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}
let addExpenses = function(account, amount){

    account.expenses = account.expenses + amount
}
let addincome = function(account, income){
    account.income = account.income + income
}
let getaccountsummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}
addincome =(myAccount, 2000)
addExpenses=(myAccount, 2.8)
addExpenses=(myAccount, 500)

console.log(getaccountsummary(myAccount))

let resetaccount = function(account){
    account.expenses = 0
    account.income=0
}
resetaccount(myAccount)
console.log(getaccountsummary(myAccount))
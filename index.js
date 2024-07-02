function introduction(name){
   return (`Hi, my name is ${name}.`)
}
console.log(introduction("Kevin"))

function introductionWithLanguage(name, language){
   
   return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguage("Kevin", "JavaScript"))

function introductionWithLanguageOptional(name = "User",language = "JavaScript"){
   return (`Hi, my name is ${name} and I am learning to program in ${language}.`) 
}
console.log(introductionWithLanguageOptional("Kevin",))



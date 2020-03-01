const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {  
                
     let x = tutorials.map( x => x.split(" ") );  
     let abc =  x.map(function(y) {  
         let firstLetteryUpArray  = y.map(function(suby){  
         let replaceLetter = suby[0].toLocaleUpperCase(); 
         return suby.replace(suby[0], replaceLetter)}  

     )
     return firstLetteryUpArray
           });  
           
      let a1 =   abc.map( arry => arry.join(" ")) ;
     
  return a1
}
 
let aba = titleCased() 
console.log(aba);
// QUESTION NO 1 


//  function power(a,b){
//     return Math.pow(a,b)
// }
// document.write("<h1 style='color:red; font-size:50px; text-align:center; margin-top:200px'>"+power(2,3))






// QUESTION NO 2 

// function check(){
//     var year = prompt('enter year')
//     if(year==''){
//         alert('Please Enter Value')
//     }
//     else{
//     if((year%100!=0) && (year%4==0) || (year%400==0)) {
//         document.write("<h1 style='color:green; text-align:center;font-size:50px; margin-top:250px'>"+year+" Is a Leap Year </h1>")
//     }
//     else{
//         document.write("<h1 style='color:red; text-align:center;font-size:50px; margin-top:250px'>"+year+" Is not a Leap Year </h1>")
//     }
// }
// }
// check()



// QUESTION NO 3

// side1 = +prompt("enter side 1 of triangle")
// side2 = +prompt("enter side 2 of triangle")
// side3 = +prompt("enter side 3 of triangle")
// function S(){
//     var s =(side1+side2+side2)/2
//     return s;
// }
// function AreaOfTriangle(){
//     var side = S()
//     var calculation = side * ((side-side1) * (side-side2) * (side-3))
//     return calculation;
// }
// document.write("<h1 style='color:green; text-align:center;font-size:50px; margin-top:250px'>"+"Area of triangle is :"+ AreaOfTriangle())






// QUESTION NO 4 



// marks1 = +prompt("enter maths marks")
// marks2 = +prompt("enter english marks")
// marks3 = +prompt("enter urdu marks")
// function main(){
// A()
// // document.write("<br>")
// P()
// }
// function A(){
//     avg= (marks1+marks2+marks3)/3
// document.write("<h1 style='color:green; text-align:center;font-size:50px; margin-top:200px'>"+"Average of three subjects is :"+ avg + "<br>")
// }
// function P(){
// total = 300;
// obtained = marks1+marks2+marks3
// per = (obtained / total)*100
// document.write("<h1 style='color:green; text-align:center;font-size:50px'>"+"Percentage of three subjects is :"+ per + "%"+ "<br>")
// }
// main()





// QUESTION NO 5



// function findingIndex(sentence, character) {
//     S = sentence.split("");
//     for (var i = 0; i < S.length; i++) {
//         if (S[i] === character) {
// document.write("<h1 style='color:orange; text-align:center;font-size:40px; margin-top:5px'>"+" Index Of "+ S[i] + " is " + i +  "<br>")
//         }}}
// sentence = prompt("Enter a sentence : ")
// character = prompt("Enter a character : ")
// findingIndex(sentence, character)
// 

// 
// var user = prompt("Enter some text");
// var char = prompt("Find Index Number");
// var check = user.split("");
// function findOut(user,char) {
// for(i=0; i < check.length; i++){
//     if( char === check[i]){
//         document.write(" index of " + check[i] + " is " + i);
//     }
// }
// }
// findOut(user,char)
// // console.log(check,char)
// 


// QUESTION NO 6 

// var s = prompt('enter any sentence')
// function vowels(){
// var  b = s.replace( /[aeiou]/g, '' );
// document.write("<h1 style='color:green; text-align:center;font-size:50px; margin-top:200px'>"+ b)
// }
// vowels()
// 


// QUESTION NO 7    

//function Check_Occurrences() {
    //         var str = "Please read this application and give me gratuity";
    //         document.write(str + "<br>");
    //         var count = 0;
    //         let findvowel = false;
    
    //         for (const letter of str.toLowerCase()) {
    //           switch (letter) {
    //             case 'a':
    //             case 'e':
    //             case 'i':
    //             case 'o':
    //             case 'u':
    //               {
    //                 if (findvowel) {
    //                   count++;
    //                   findvowel = false;
    //                 } else {
    //                   findvowel = true;
    //                 }
    //                 break;
    //               }
    //             default:
    //               findvowel = false
    //           }
    //         }
    
    //         return count
    //       }
    //       document.write("Checked Occurences: "+ Check_Occurrences());
    
    




//  QUESTION NO 8 

// var d = +prompt('enter distance between to cities in km')
// function main(){
// meter()
// feet()
// inches()
// centimeter()
// }
// function meter(){
//     var m = d*1000
// document.write("<h1 style='color:green; text-align:center;font-size:40px; margin-top:200px'>" +"meter:" + m +"<br>")
// }
// function feet(){
//     var f = d*3280.84
// document.write("<h1 style='color:orange; text-align:center;font-size:40px;'>" +"feets:" + f +"<br>")
// }
// function inches(){
// var i = d*39370.1
// document.write("<h1 style='color:green; text-align:center;font-size:40px;'>" +"inches:" + i +"<br>")
// }
// function centimeter(){
// var c = d*100000
// document.write("<h1 style='color:orange; text-align:center;font-size:40px;'>" +"centimeter:" + c +"<br>")
// }
// main()



//  QUESTION NO 9


// bonus = 12
// hours=+prompt("Enter your overtime hours:")
// if(hours>40)
// {
//     pay=(hours*12)
//     alert("Your overtime pay is: "+pay);
// document.write("<h1 style='color:orange; text-align:center;font-size:40px; margin-top:250px'>" + "✨🎉🎊Congratulations🎊✨🎉" )
// }
// else{
//     alert("you will get bonus after completing 40 hours" );
// }



// QUESTION NO 10 

// var amount = +prompt("Enter your amount: ")
// var hundred = parseInt(amount / 100)
// var remaining1 = parseInt(amount % 100)
// var fifty = parseInt(remaining1 / 50)
// var remaining2 = parseInt(remaining1 % 50)
// var ten = parseInt(remaining2 / 10)
// console.log("• 100 Notes: " + hundred + "<br>" + "• 50 Notes: " + fifty + "<br>" + "• 10 Notes: " + ten )


//        Chapter 43-48

// All questions are one in index.html file....



 
    
    
    

    
    
    
    
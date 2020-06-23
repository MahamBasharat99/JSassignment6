// Assignment # 6
// Chapter # 21-25


// Task # 1
// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var fullName=firstName+" "+lastName;
// alert("Hello! to "+ fullName);

// // Task # 2
// var favPhone=prompt("Enter your favourite Phone");
// var phoneLength=favPhone.length;
// alert("My favourite Phone is : "+favPhone+"\n"+" Length of String is : "+phoneLength);

// Task # 3
// var text="Pakistan";
// var findIndex=text.lastIndexOf("n");
// alert("String: "+text+" \nIndex of 'n' is "+findIndex);

// Task # 4
// var text="Hello World"
// var lastIndex=text.lastIndexOf("l");
// alert("String: "+text+" \nIndex of 'l' is "+lastIndex);

// Task # 5
// var text="Pakistan";
// var checkIndex= text.charAt(3)
// alert("String : "+text+"\nCharacter at index 3 : "+checkIndex);

// Task # 6
// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var concatemethod = firstName.concat(lastName); 
// alert("Hello! to " +concatemethod);

// Task # 7
// var text="Hyderabad";
// var changeText=text.indexOf("Hyder");
// var afterChange=text.slice(0,changeText)+"Islam"+text.slice(changeText+5);
// alert("City : "+text+"\n After replacing "+afterChange);

// Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var repmessage=message.replace(/and/g,"&");
// alert(repmessage);

// Task # 9
// var str="492";
// // var num= Number(str);
// var num= parseInt(str)
// alert("Value "+str+"\nType : String \n"+"Value "+num+"\nType : Number \n");

// Task # 10
// var inputWord=prompt("Enter any word");
// var upperWord=inputWord.toUpperCase();
// alert("User input  "+inputWord+ "\nUpper Case  "+upperWord);

// Task # 11
// var inputWord=prompt("Enter any word");
// var firstWord=inputWord.slice(0,1);
// var otherWord=inputWord.slice(1);
// var firstLetter=firstWord.toUpperCase();
// var otherLetter=otherWord.toLowerCase();
// var concat=firstLetter+otherLetter;
// alert("User Input: "+inputWord+"\nTitle Case :"+concat);

// Task # 12
// var num = 35.36 ;
// num1=num*100;
// var strr=num1.toString();
// alert("Number "+num+"\nString "+strr);

// Task # 13
// var userName=prompt("Enter input");
// for(var i=0;i<userName.length;i++){
//     var n = userName[i].charCodeAt(0);
//     if(n==33 || n==44 || n==46 || n==64){
//         alert("Enter valid input");
//     }
// }

// Task # 14
// var A=["cake","apple pie","chips","cookies","patties"];
// var enterChoice=prompt("Enter your choice you want to eat");
// var caseChoice=enterChoice.toLowerCase();
// if(caseChoice==="cake"||caseChoice==="apple pie"||caseChoice==="chips"||caseChoice==="cookies"||caseChoice==="patties")
// {for(var i=0;i<A.length;i++){
// if(A[i]===caseChoice){
//     alert("Welcome to our dawood general Store.\n "+enterChoice+" is available at index "+[i]+" in our bakery")
// }}}
// else{
//     alert("Sorry "+caseChoice+" is not avalaible in our bakery");
// }

// Task #15
// var password=prompt("Enter Password must contain numbers and letters");
// document.write("<br>Enter password : "+password);
// if(password[0]==="0"||password[0]==="1" ||password[0]==="2"||password[0]==="3"||password[0]==="4"||password[0]==="5"||password[0]==="6"||password[0]==="7"||password[0]==="8"||password[0]==="9"){
//     document.write("<br>Password can not begin with a number");
//     document.write ("<br>Enter valid password");

// }
// else if(password.length<6){
// document.write("<br>Password must be at least 6 characters");
// document.write ("<br>Enter valid password");

// }
// else{
    
// }

// Task #16
// var m = "University of Karachi";
// var k = m.split(''); 
// for(i=0;i<k.length;i++)  
//  document.write("<br>"+k[i]); 









// ////split method is used to make string in an array and substring


//  Task# 17
// var inputUser=prompt("Enter any input");
// document.write("User Input :"+inputUser+"<br>");
//     var lastChar = inputUser.charAt(inputUser.length - 1);
//     document.write("last character of "+inputUser+" is "  +lastChar);

//  Task# 18
// var string="The quick brown fox jumps over the lazy dog";
// var strr=string.toLowerCase();
// var count=0;
// for(var i=0;i<string.length;i++){
//     if(strr.slice(i,i+3)==="the"){
//         count++;
//     }
// }
// document.write("<br>Text : The quick brown fox jump over the lazy dog")
// document.write("<br>There are "+count+" occurence of word 'the'")




// Assignment # 6
// Chapter # 26-30




//  Task# 1
// var val=prompt("Enter Number");
// document.write("<br>Number "+val);
// val3=Math.round(val);
// document.write("<br>Round Off Value "+val3);
// val1=Math.ceil(val);
// document.write("<br>Ceil Value "+val1);
// val2=Math.floor(val);
// document.write("<br>Floor Value "+val2);

//  Task# 2
// var val=+prompt("Enter Negative Floating point  Number");
// if(val<0){
// document.write("<br>Number "+val);
// val3=Math.round(val);
// document.write("<br>Round Off Value "+val3);
// val1=Math.ceil(val);
// document.write("<br>Ceil Value "+val1);
// val2=Math.floor(val);
// document.write("<br>Floor Value "+val2);}
// else{
//     alert("please enter negative floating point number");
// }

//  Task# 3
// var absolNum=+prompt("Enter Number");
// var corabsolNumber=Math.abs(absolNum);
// document.write("<br>The absolute value of  "+absolNum+" is "+corabsolNumber);

//  Task# 4
// var diceNum=Math.random()*7;
// var diceNum1=Math.floor(diceNum);
// document.write("<br>Random dice Value : "+diceNum1);

//  Task# 5
// var tossNumber=Math.random()*2;
// var tossNumber1=Math.ceil(tossNumber);
// if(tossNumber1===1){
// document.write("<br> Random Coin Value:  Tail");
// }
// else{
//     document.write("<br> Random Coin Value:  Head")
// }

//  Task# 6
// var number=Math.random()*100;
// var number1=Math.ceil(number);
// document.write("<br>Random number between 1 and 100 : "+number1);

//  Task# 7
// 7(a)
// var weighta=prompt("Enter your weight in ex: 50kg");
// var weia=parseInt(weighta);
// document.write("<br>The weight of user is :"+weia+" kg");
// 7(b)
// var weightb=prompt("Enter your weight in ex: 50kgs");
// var weib=parseInt(weightb);
// document.write("<br>The weight of user is :"+weib+" kgs");
// 7(c)
// var weightc=prompt("Enter your weight in ex: 50.2kgs");
// var weic=parseFloat(weightc);
// weic=weic.toFixed(1);
// document.write("<br>The weight of user is :"+weic+" kgs");
// 7(d)
// var weightd=prompt("Enter your weight in ex: 50.2kilograams");
// var weid=parseFloat(weightd);
// weid=weid.toFixed(1);
// // var stg=weid.toString();
// // if (stg.charAt(stg.length-1)>=5){
// //     stg=stg.slice(0,stg.length-1)+"6";
// //     stg=Number(stg)

// // document.write("<br>The weight of user is :"+stg+" kg");
// // }

//     document.write("<br>The weight of user is :"+weid+" kilograms");


//  Task# 8
// var secNum=Math.random()*10;
// var secNum1=Math.ceil(secNum);
// document.write("<br>Secret number is "+secNum1);
// var inputNum=prompt("Enter Number between 1 & 10");
// var inputNum=parseInt(inputNum);
// if(inputNum<11 && inputNum>0){
// if(inputNum===secNum1){
//     document.write("<br>Congratulation ! ");
// }
// else{
//     document.write("<br>Try Again")
// }}
// else{
//     document.write("<br>you should not enter number between 1 & 10");
// }





// Assignment # 6
// Chapter # 31-34




//  Task# 1
// var currentTime=new Date();
// document.write("<br>Our time is <br>"+currentTime);

//  Task# 2
// var monthNames=["January","Febrauary","March","April","May","June","July","August","September","October","November",""]
// var now=new Date();
// var month=now.getMonth();
// monthName=monthNames[month];
// document.write("<Br>Current Month: "+monthName);

//  Task# 3
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now=new Date();
// var dayindex=now.getDay();
// var dayname=dayNames[dayindex];
//  var sliceMethod=dayname.slice(0,3);
//   document.write("<br> Today is "+sliceMethod);


//  Task# 4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now=new Date();
// now=now.getDay();
// var dayname=dayNames[now];
// dayname=dayname.toString();
// if(dayname==="Saturday"||dayname==="Sunday"){
//     document.write("<br>It's Fun day")
// }
// else{
//     document.write("<br>It's a "+ dayname);
// }

//  Task# 5
// var date=new Date();
// var onlyDate=date.getDate();
// if(onlyDate<=15){
//     document.write("First 15 days of month")
// }
// else{
//     document.write("Last Days of Month")
// }

//  Task# 6
//  var today=new Date();
//  document.write(today);
// var milliseconds =today.getTime();
// document.write("<br>Elapsed Milliseconds since January 1 1970:    "+milliseconds);
//  var minute=milliseconds/1000/60;
//  document.write("<br>Elapsed Milliseconds since January 1 1970:   "+minute);

// // task#7
// var today=new Date();
// var time=today.getTime();
// if(time<=12){
// document.write("<br>It's PM");
// }
// else{
//     document.write("<br>It's AM")
// }
// // task#8
// var laterdate=new Date("December 31,2020 ");
// document.write("<br>Last Date:"+laterdate);

// // task#9
// var ramadandate=new Date("June 18,2015");
// var lastdate =new Date("Dec 5,2015");
// var milli=ramadandate.getTime();
// var milli2=lastdate.getTime();
// var days=milli2-milli;
// var days=days/(1000*60*60*24);
// days=Math.floor(days);
// document.write("<br> "+days+"have passed since 1st ramadan  "+ramadandate.getFullYear());

// task#10
// var referenceDate=new Date("Dec 5,2015");
// var begningDate =new Date("Jan 1,2015");
// var milli=referenceDate.getTime();
// var milli2=begningDate.getTime();
// var milliseconds=milli-milli2;
// var sec=milliseconds/(1000*60);
// days=Math.floor(sec);
// document.write("<br> On "+referenceDate+",<br>"+sec+" seconds had passed since begining of "+referenceDate.getFullYear());

// task#11
// var currDate=new Date()
// document.write("<br>Current Date:     "+currDate);
// var hou=currDate.getHours();
// var min=currDate.getMinutes();
// var sec=currDate.getSeconds();
// var timeShow=document.write("<br>"+hou+":"+min+":"+sec);
// var timeAhead=document.write(""+hou-1+":"+min+":"+sec);
// var aheadDate = new Date()
// aheadDate.setHours(hou-1,min,sec);
//  document.write("<br> One Hour it was:     "+aheadDate);


// task#12
// var currDate=new Date("Dec,15 2015 23:09:37");
// document.write("<br>Current Date:     "+currDate);
// var year=currDate.getFullYear();
// var year100=currDate.setFullYear( year-100);
// var d=new Date(year100);
// document.write("<br>"+d);



 // task#13
//  var age=prompt("Enter your age");
//  var currDate=new Date();
//  var curryear=currDate.getFullYear();
//  var birthyear=curryear-age;
//  document.write("your age is "+age);
//  document.write("<br>your birth year is "+birthyear);

// task#14
// document.write("<h1>K-Electric Bill</h1>");
// var name=prompt("Enter User Name");
// document.write("<br>User Name "+name);
// var month=prompt("Enter Month");
// document.write("<br>Month: "+month);
// var noOfUnit=prompt("Enter Units");
// noOfUnit=Math.round(noOfUnit);
// noOfUnit=noOfUnit.toFixed(2);
// document.write("<br>Units are "+noOfUnit);
// var charPerUnit=prompt("Enter Charges Per Unit");
// document.write("<br>Charges of a bill "+charPerUnit);
// var mul=noOfUnit*charPerUnit;
// mul=Math.round(mul);
// mul=mul.toFixed(2);
// document.write("<br>Net Amount Pyable Within Due Date "+mul);
// var lateSurcharge=+prompt("Enter late payment surcharge");
// lateSurcharge=Math.round(lateSurcharge);
// lateSurcharge=lateSurcharge.toFixed(2);
// document.write("<br>Month: "+lateSurcharge);
// var total=noOfUnit*charPerUnit+lateSurcharge;
// total=Math.round(total);
// total=mul.toFixed(2);
// document.write("<br>Gross Amount payable after due date "+total);









// Assignment 6
// Chapter 35-38

// task#1
// showdate();
// function showdate(){
// var date=new Date();
// document.write(date);}

// task#2
// inputbiodata();
// function inputbiodata(){
// var firstName=prompt("Enter first name");
// var lastName=prompt("Enter last name");
// var fullName=firstName+" "+lastName;
// alert("Welcome! to "+ fullName);}

// task#3
// var num1=+prompt("Enter first Value");
// var num2=+prompt("Enter second Value");
// document.write("Sum of two numbers is "+add(num1,num2));
// function add(a,b){
//     return(a+b);
// }

// task #4
//  var num1=+prompt("Enter first Value");
//  var num2=+prompt("Enter second Value");
//  var operator=prompt("Enter operator");
// document.write("<br>You Calculation is :"+num1+" "+operator+" "+num2+"  ="+cal(num1,operator,num2))

// function cal(num1,operator,num2){
//     if(operator=== "+"){
//         return(num1 +  num2);
// }
//     if(operator=== "-"){
//         return(num1 -  num2);
// }
//     if(operator=== "*"){
//         return(num1 *  num2);
// }
//     if(operator=== "/"){
//         return(num1 /  num2);
// }
//     if(operator=== "%"){
//         return(num1 %  num2);
// }

// }

// task #5
// var inputNumber=+prompt("Enter any Number");
// document.write("<BR>Square of Argument number "+inputNumber+" is "+square(inputNumber));
// function square(squ){
//     var sum="";
//     sum=Math.pow(squ,2)
//     return(sum);
// }

// task #6
// var num=+prompt("Enter Number For Factorial");
//  document.write("<BR>Factorial of a Number "+num+ " is "+ fact(num));
  // function fact(n){
//     var sum=1; 
//     if (num === 0 || num === 1)
//      return 1; 
//     for(var i=n;i>0;i--)
//     {
//         sum=sum*n;
//         n--;
//     }
//     return(sum);
// }

////     for (var i = num - 1; i >= 1; i--) {
////       num *= i;
////   }
////  return num;
////}Just for concept

// task # 7
// var first=prompt("Enter First #");
// var last=prompt("Enter Last #");
// document.write("<BR> Counting from "+first+ " to "+ last +" is ");
// +showcount(first,last)
// function showcount(num1,num2){
//     for(var i=num1;i<=num2;i++){
//         document.write("<br>"+i);
//         num1++;
//     }
// }

// task #8
// var base=prompt("Please Enter base of a triangle");
// var perpandicular=prompt("Please Enter perpandicular of a triangle");
// document.write("<BR>Base Is :"+base+"<br>Perpandicular is "+perpandicular+"<br>Hypotaneous of a triangle is   "+calculateHypotenus(base,perpandicular));


// function calculateHypotenus(base,perpandicular){
//     var hypo="";
//     hypo=calculataSquare(base,perpandicular);
     
//     function calculataSquare(base,perpandicular){
//         hypo=Math.pow(base,2)+Math.pow(perpandicular,2);
//                 return(hypo);
//     }
// return(Math.sqrt(hypo));
// }

// task #9
// var area="";
// var width=prompt("Enter width of a rectangle");
// var height=prompt("Enter height of a rectangle");
// document.write("<br"+ calAreaRec(width,height));argument as a variable
// function calAreaRec(width,height){
// area=width*height;
// document.write(area)
// return(area);
// }
// document.write("<br"+ calArea(5,4));argument as value
// function calArea(a,b){
// alert(a*b);
// }

// // task #10****
// // var word=prompt("Enter any palindrome Word");
// // document.write(word[0]);
// var check="";
// // for(var i=0;i<word.length;i++){
// // 
//   check+=word;
// }
// //   if(word===check)
// //   {
// //     document.write("<br>"+word+" is Palindrome");
// //   }
// //   else{
// //     document.write("<br>"+word+" is Not Palindrome");
// //   }
// //   
// // 


// task #11***
// function capital(enterString){
// var enterString=prompt("Enter any string");
// document.write("User Input "+enterString);
// var wholeLine=enterString.toLowerCase().split(" ");
// for(var i=0;i<.length;i++){
// wholeLine  =wholeLine[i][0].toUpperCase()+wholeLine[i].slice(1);
// }
// document.write("<br>Title Case "+wholeLine.join(" "));}

// capital();



// task #12**
// function long(string){
//   var long="";
//   var word=string.split(" ")
//   for(var i=0;i<word.length;i++){
//     if(word.charAt[i]>long.charAt[i])
//     {
//       word=long;
//       alert(word)
//     }
//   }
//   return word;
// }
// var string=prompt("Web Development Tutorial");
// long(string);
// alert(u);

// task #13
// var count=0;
// var string=prompt("Enter string");
// var letter=prompt("Enter letter");
// checker(string,letter);
// function checker(string,letter){
// for(var i=0;i<string.length;i++){
//  if(letter==string[i]){
//     count++;
//   }
// }
// document.write("<BR> Occurance of a specified letter "+letter+" within a string "+string+" is" +count);


// task 14
// var rad=prompt("Enter radius");
// calCircumference(rad);
// function calCircumference(rad){
//   var r=2*2.14*rad;
//   document.write("circumference is "+r);
// }
// calArea(rad);
// function calArea(rad){
//   var t=2.14*rad*rad
// ;

// document.write("Area is "+t);}
}

//QA a
let XMLHttpRequest= require("xhr2")

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){

    var res=JSON.parse(xhr.responseText);

    var result=res.filter((ele)=>(ele.region==="Asia"));
    var results=result.map((a)=>(a.name.common));
    
    
    console.log(results);
   

}
/*************************************************************************************************************************/
//QA b

var request1=new XMLHttpRequest;
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function(){

    var data1 =request1.response;
    var res1=JSON.parse(data1);

    var result1=res1.filter((ele1)=>(ele1.population<200000));
    var results1=result1.map((a)=>(a.name.common));

    console.log(results1);
}

/*************************************************************************************************************************/
//QA c
var request2=new XMLHttpRequest;
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload=function(){

    var data2 =request2.response;
    var res2=JSON.parse(data2);

    var result2=res2.forEach((ele2)=>(console.log(`Name : ${ele2.name.common} Capital : ${ele2.capital} Flags : ${ele2.flag} `)));
    

}
/*************************************************************************************************************************/
//qa d

var req=new XMLHttpRequest;
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){

    var data3 =req.response;
   
    var res3=JSON.parse(data3);
    
    
    var result3=res3.reduce((acc,cv)=>{
        return acc+cv.population},0);
    console.log(result3);
}

/*************************************************************************************************************************/var request3=new XMLHttpRequest;
var request4=new XMLHttpRequest;
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload=function(){

    var data4 =request4.response;
    var res4=JSON.parse(data4);
    
    var result4=res4.filter((ele4)=>ele4.currencies && ele4.currencies.USD);
    var value=result4.forEach((ele4)=>console.log(ele4.name.common));
}
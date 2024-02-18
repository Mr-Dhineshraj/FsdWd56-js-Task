
// How to compare two JSON have the same property with out order
let obj1={
    name:"Person1",
    age:5
}
let obj2={
    age:5,
    name:"Person1",
    
}

let sortKey1=Object.keys(obj1).sort();
let sortKey2=Object.keys(obj2).sort();

let values1 = sortKey1.forEach(element1=> {console.log(obj1[element1])});

let values2 = sortKey2.forEach(element2=>{ console.log(obj2[element2])});

if(JSON.stringify(values1)===JSON.stringify(values2)){
    console.log("Two JSON Have The Equal Property")
}else{
    console.log("Two JSON are Not Equal")
}
/************************************************************************************* */

//QA.2

let XMLHttpRequest= require("xhr2")

let xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload=function(){

    let countries=JSON.parse(xhr.responseText);
    for(let i=0;i<countries.length-1;i++){
    console.log(countries[i].flags);
    }

}

/************************************************************************************* */

//QA3

let XMLHttpRequest= require("xhr2")

let xhr1 = new XMLHttpRequest();

xhr1.open("GET","https://restcountries.com/v3.1/all");
xhr1.send();

xhr1.onload=function(){

    let countries=JSON.parse(xhr1.responseText);
    for(let i=0;i<countries.length-1;i++){
    console.log(countries[i].name,countries[i].region,countries[i].subregion,countries[i].population);
    }

}



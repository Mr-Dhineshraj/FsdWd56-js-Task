//Json im resume


let myResume={
    "name":"Dhineshraj",
    "Email":"Dhineshdj369@gmail.com",
    "Phone":8736454735,
    "address":{
        "Street":"mainroad",
       "village": "SembanarKoil",
        "City":"Mayiladuthurai dt",
        "Postalcode":"609309"
},
"Summary":"Experinced in Fullstack Developer",
"Education":[{

    "Degree":"BE",
    "University":"Anna University",
    "Passing Year":2016,
},
{
    
    "Degree":"HSC",
    "School":"Kalaimahal matric hr sec school",
    "Passing year":2012,
},
{
    
    "Degree":"SSLC",
    "School":"Kalaimahal matric hr sec school",
    "Passing year":2010,
    
}],
"experience": 
    {
      "position": "Software Engineer",
      "company": "Tech Company XYZ",
      "start_date": "2018-01-01",
      "end_date": "2023-09-01",
      "responsibilities":"Developing the web application based on its requirements"
      
},
"skills":[
    
    "java",
    "javascript",
    "Node.js",
    "React.js",
    "MangoDB",
]
}

//JSON Iterate over all for loops

let jsonData = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    hobbies: ["reading", "traveling", "cooking"]
  };
  
  for (let key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      console.log(key + ": " + jsonData[key]);
    }
  }
  

//JSON format iteration

//{


   
let basics={


    Name:"Dhineshraj",
    Email:"dhineshrajbaskaran01@gmail.com",
    age: 28,
    PhoneNumber:"8734877493",
    url:"give the github url",
    location:{

        address:"mainroad,sembanarkoil",
        city:"Mayiladuthurai",
        State:"TamilNadu"  ,
        PostalCode:"609309"  
    
    },
    hobbies:
        ["travelling","music","cricket"]


};

for(var key in basics){
   console.log(basics[key]);

};
let basics1=[{



    Name:"Dhineshraj",
    Email:"dhineshrajbaskaran01@gmail.com",
    Age: 28,
    PhoneNumber:"8734877493",
    url:"give the github url",
    location:{

        address:"mainroad,sembanarkoil",
        city:"Mayiladuthurai",
        State:"TamilNadu"  ,
        PostalCode:"609309"  
    
    },
    hobbies:
        ["travelling","music","cricket"]


}];
for(var value of basics1){
    console.log(value);

}

let basics3={
    Name:"Magesh",
    Email:"magesh@123.com",
    Age:21,
    phoneNumber:8765432345,
    location:{
        address:"sekizar st",
        city:"Mayiladuthurai",
        state:"tamilnadu",
}
}

for(var i=0;i<basics3.length;i++){
    console.log(basics3[i]);
}

//for each
let basics4={
    Name:"Magesh",
    Email:"magesh@123.com",
    Age:21,
    phoneNumber:8765432345,
    location:{
        address:"sekizar st",
        city:"Mayiladuthurai",
        state:"tamilnadu",
}
}

let keyvalue=Object.entries(basics4);

keyvalue.forEach(([key,value])=>{
    console.log(`${key}:${value}`)
});


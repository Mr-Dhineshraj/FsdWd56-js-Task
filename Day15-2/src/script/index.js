const container=document.createElement("div");
const form=document.createElement("form")
const div1=document.createElement("div");
const divName=document.createElement("div");
const inputFirstName=document.createElement("input");
const inputLastName=document.createElement("input");
const div2=document.createElement("div");
const divAddress=document.createElement("div")
const inputAddress=document.createElement("input");
const div3=document.createElement("div");
const divPincode=document.createElement("div");
const inputPincode=document.createElement("input");
const div4=document.createElement("div");
const divGender=document.createElement("div");
const divGenderList=document.createElement("ul")
const div5=document.createElement("div");
const divFood=document.createElement("div");
const divList=document.createElement("div");
const ul=document.createElement("ul");
const div6=document.createElement("div");
const divState=document.createElement("div");
const inputState=document.createElement("input");
const div7=document.createElement("div");
const divCountry=document.createElement("div");
const inputCountry=document.createElement("input");
const div8=document.createElement("div");
const submitButton=document.createElement("button");



const divTable=document.createElement("div");
const table=document.createElement("table");
const thead=document.createElement("thead");
const tableRow=document.createElement("tr");
const thFirstName=document.createElement("th");
const thLastName=document.createElement("th");
const thAddress=document.createElement("th");
const thPincode=document.createElement("th");
const thGender=document.createElement("th");
const thFood=document.createElement("th");
const thState=document.createElement("th");
const thCountry=document.createElement("th");


container.setAttribute("class","container-fluid d-flex justify-content-center py-10")


inputFirstName.setAttribute("type","text")
inputLastName.setAttribute("type","text")
inputAddress.setAttribute("type","text")
inputPincode.setAttribute("type","text")
inputState.setAttribute("type","text")
inputCountry.setAttribute("type","text")
submitButton.setAttribute("type","button")

inputFirstName.setAttribute("class","form-control");
inputLastName.setAttribute("class","form-control");
inputAddress.setAttribute("class","form-control");
inputPincode.setAttribute("class","form-control");
inputState.setAttribute("class","form-control");
inputCountry.setAttribute("class","form-control");
submitButton.setAttribute("class","btn btn-success")

inputFirstName.setAttribute("placeholder","FirstName");
inputLastName.setAttribute("placeholder","LastName");
inputAddress.setAttribute("placeholder","Address");
inputPincode.setAttribute("placeholder","Pincode");
inputState.setAttribute("placeholder","State");
inputCountry.setAttribute("placeholder","Country");

divName.setAttribute("class","input-group");
divAddress.setAttribute("class","input-group");
divPincode.setAttribute("class","input-group");
divFood.setAttribute("class","input-group");
divGender.setAttribute("class","input-group");
divState.setAttribute("class","input-group");
divCountry.setAttribute("class","input-group");
submitButton.setAttribute("class","input-btn")

div1.setAttribute("class","font");
div2.setAttribute("class","font");
div3.setAttribute("class","font");
div4.setAttribute("class","font");
div5.setAttribute("class","font");
div6.setAttribute("class","font");
divGender.setAttribute("class","font");

table.setAttribute("class","table");
thFirstName.setAttribute("scope","col");
thLastName.setAttribute("scope","col");
thAddress.setAttribute("scope","col");
thPincode.setAttribute("scope","col");
thFood.setAttribute("scope","col");
thState.setAttribute("scope","col");
thCountry.setAttribute("scope","col");


div1.innerText="Name:";
div2.innerText="Address:"
div3.innerText="Pincode:"
divGender.innerText="Gender:"
div4.innerText="Food:"
div5.innerText="State:"
div6.innerText="Country:"
submitButton.innerText="Success"

divGenderList.innerHTML=`<li><input type="radio" value="Male" name="gender"> Male</li>
<li><input type="radio" value="Female" name="gender">  Female</li>
<li><input type="radio" value="Other" name="gender"> Other</li>`


ul.innerHTML=`<li><input type="checkbox"> Lemon rice</li>
<li><input type="checkbox"> Tomatto rice</li>
<li><input type="checkbox"> Curd rice</li>
<li><input type="checkbox"> Vegettable rice</li>
<li><input type="checkbox"> Curry rice</li>`

thFirstName.innerText="First Name"
thLastName.innerText="Last Name"
thAddress.innerText="Address"
thPincode.innerText="Pincode"
thGender.innerText="Gender"
thFood.innerText="Food"
thState.innerText="State"
thCountry.innerText="Country"




container.appendChild(form);
form.append(div1,div2,div3,div8,div4,div5,div6,div7);
div1.append(divName);
divName.append(inputFirstName,inputLastName);
div2.appendChild(divAddress);
divAddress.appendChild(inputAddress);
div3.appendChild(divPincode);
divPincode.appendChild(inputPincode);
div4.appendChild(divFood);
divFood.appendChild(divList)
divList.appendChild(ul);
div5.appendChild(divState);
divState.appendChild(inputState);
div6.appendChild(divCountry);
divCountry.appendChild(inputCountry);
div7.appendChild(submitButton);
div8.appendChild(divGender);
div8.appendChild(divGenderList);


divTable.appendChild(table);
table.appendChild(thead);
thead.appendChild(tableRow);
tableRow.append(thFirstName,thLastName,thAddress,thPincode,thGender,thFood,thState,thCountry);
document.body.append(container,divTable);

let row=1;
let checkedcheckboxs;

submitButton.addEventListener("click",validateAndDisplayTheData);

function validateAndDisplayTheData(){
    console.log("Display the car")
    checkedcheckboxs=document.querySelectorAll('input[type="checkbox"]:checked');

    let selectedGender=getSelectedGender();
    if (checkedcheckboxs.length<2||!selectedGender){
        alert("please select atleast 2 food options");
        return;
    }
    displayTheData(selectedGender);

}

function getSelectedGender(){
    let selectedGender=document.querySelector('input[name="gender"]:checked');

    if (selectedGender){
        return selectedGender.value;
    }
    return null;
}


function displayTheData(selectedGender){
    console.log("display thre data")
    let firstName=inputFirstName.value;
    let lastName=inputLastName.value;
    let address=inputAddress.value;
    let pincode=inputPincode.value;
    let state=inputState.value;
    let country=inputCountry.value;

    let selectedFoods=Array.from(checkedcheckboxs).map(checkbox=>checkbox.parentNode.textContent.trim());
    console.log(selectedFoods);
    
   

    if(!firstName||!lastName||!address||!pincode||!state||!country){
        alert("Please fill the input fields")
    }else{

       const newRow=table.insertRow(row);
       let cell1=newRow.insertCell(0);
       let cell2=newRow.insertCell(1);
       let cell3=newRow.insertCell(2);
       let cell4=newRow.insertCell(3);
       let cell5=newRow.insertCell(4); 
       let cell6=newRow.insertCell(5);
       let cell7=newRow.insertCell(6);
       let cell8=newRow.insertCell(7);
       
       

       
       cell1.innerHTML=firstName;
       cell2.innerHTML=lastName;
       cell3.innerHTML=address;
       cell4.innerHTML=pincode;
       cell5.innerHTML=selectedGender;
       cell6.innerHTML=selectedFoods.join(", ");
       cell7.innerHTML=state;
       cell8.innerHTML=country;
      
row++;

inputFirstName.value="";
inputLastName.value="";
inputAddress.value="";
inputPincode.value="";
inputState.value="";
inputCountry.value="";
checkedcheckboxs.forEach(function(checkbox){
    checkbox.checked=false;
});
    }
}



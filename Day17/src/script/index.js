

const container = document.createElement("div");
container.classList.add("container", "row", "d-flex","justify-content-center");

let fetchCountries = () => {
    let code='960c93e69adcec3a0f660e6ac31f45d0'
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      console.log("fetch unsuccessfully");
    })
    .then((countries) => {
      countries.forEach((country) => {
        const card = document.createElement("div");
        const headerDiv = document.createElement("div");
        const bodyDiv = document.createElement("div");
        const flagDiv = document.createElement("div");
        const flagImg = document.createElement("img");
        const breakElement = document.createElement("br");
        const paraDiv = document.createElement("div");
        const capital = document.createElement("p");
        const capitalsmall = document.createElement("p");
        const region = document.createElement("p");
        const regionsmall = document.createElement("p");
        const countrycode = document.createElement("p");
        const countrycodesmall = document.createElement("p");
        const btnDiv = document.createElement("div");
        const button = document.createElement("Button");

        headerDiv.innerText = country.name.common;
        button.innerText = "Click to Weateher";
        capitalsmall.innerText = `Capital : ${
          country.capital ? country.capital : "N/A"
        }`;
        regionsmall.innerText = `Region : ${country.region}`;
        countrycodesmall.innerText = `Countrycode : ${
          country.cca3 ? country.cca3 : "N/A"
        }`;
        button.innerText = "Click for Weather";

        card.setAttribute("class", "card");
        card.classList.add("col-lg-4", "col-sm-12", "m-4");
        headerDiv.setAttribute("class", "card-header");
        bodyDiv.setAttribute("class", "card-body");
        flagImg.setAttribute("class", "img-fluid");
        flagImg.setAttribute("src", `${country.flags.png}`);
        paraDiv.setAttribute("class", "text-center");
        capital.setAttribute("class", "text-center");
        region.setAttribute("class", "text-center");
        countrycode.setAttribute("class", "text-center");
        btnDiv.setAttribute("class", "text-center");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("name", "country-weather");

        container.appendChild(card);
        card.appendChild(headerDiv);
        card.appendChild(bodyDiv);
        bodyDiv.appendChild(flagDiv);
        flagDiv.appendChild(flagImg);
        bodyDiv.appendChild(breakElement);
        bodyDiv.appendChild(paraDiv);
        paraDiv.append(capital, region, countrycode);
        capital.appendChild(capitalsmall);
        region.appendChild(regionsmall);
        countrycode.appendChild(countrycodesmall);
        bodyDiv.appendChild(btnDiv);
        btnDiv.appendChild(button);



        


        button.addEventListener("click",()=>handleTheWether(country.capital ? country.capital[0] : "N/A",button));
        

      });
     

      document.body.appendChild(container);
    });
};


function handleTheWether(city,button){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=960c93e69adcec3a0f660e6ac31f45d0`)

  .then((response)=>{
    console.log(response)
    return response.json();
  })
  .catch(()=>{
    console.log("weather api not fetch successful")
  })

  .then((countryWeather)=>{

    if(countryWeather && countryWeather.main){
      clearButtons();
      button.innerHTML = `${(countryWeather.main.temp - 273.15).toFixed(2)}°C`;
    }else{
      console.log("weather not fetch successful")
    }

  })

  
  
  console.log('the button is click successful')
};

function clearButtons(){
  const buttons = document.querySelectorAll('button[name="country-weather"]');
  buttons.forEach((btn)=>{
    btn.innerText = 'Click for Weather';
  });

}

fetchCountries();

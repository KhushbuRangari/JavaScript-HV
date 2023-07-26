let qContainer = document.querySelector(".country-info")
let letters = document.querySelector(".letters")
let countryList = document.querySelector(".countryList")
let countryData = []
let countryName = []


async function fetchData(){
    const response = await fetch(' https://restcountries.com/v3.1/all ')
    const data = await response.json();
    countryData = data;

 

    for (let i = 0; i < countryData.length; i++) {
        // countryData.sort(function(a,b){ return a[1]-b[1]})
        countryName.push(countryData[i].name.common)
       
    }
    // console.log(countryName.sort());
       console.log(getCountryFirstletter());

    
    // alert(letters[letters.selectedIndex].value);
  
    const couLetter =getCountryFirstletter();
    for (let i = 0; i < couLetter.length; i++) {
      
       
        letters.innerHTML +=`<li>${couLetter[i]}</li> | `
        
    }


    const len = data.length;
    const randomNo = Math.floor(Math.random()*len)
//     qContainer.innerHTML =` <p>The Country Name is ${data[randomNo].name.common} with the population ${data[randomNo].population}</p>
//    `
qContainer.innerHTML =` 
`
   letters.addEventListener("click",showCountry );
   
}

function getCountryFirstletter() {
    let soretedCountry = countryName.sort();

    return soretedCountry.map((ele)=>{return ele.slice(0,1)}).filter((val,i,ar)=>{return ar.indexOf(val)==i});
    
}

function showCountry(event){
 
   
    countryList.innerHTML=""
    const clickedLetter = event.target.textContent
   


    for (let i = 0; i < countryName.length; i++) {
        qContainer.innerHTML=""
         if(clickedLetter==countryName[i].slice(0,1))
        { 
     
            countryList.innerHTML += `<li>${countryName[i]}</li>`
        }
 
    }

    countryList.addEventListener("click",showCountryDetails );
}

function showCountryDetails(event){
 
   
     countryList.innerHTML=""
    const clickedCountry = event.target.textContent
   

    
    for (let i = 0; i < countryData.length; i++) {
        //  qContainer.innerHTML=""
         if(clickedCountry==countryData[i].name.common)
        { 
            console.log(countryData[i]);   
            qContainer.innerHTML = `   <span id="name">${countryData[i].name.common}</span> 
            <span><a href="${countryData[i].maps.googleMaps}">On Map</a></span>
            <span id="flag"><img src="${countryData[i].flags.png}" alt="${countryData[i].flags.alt}"></span>
           

            <ul class="detailList">
                <li class="list-item one">Official Name:  ${countryData[i].name.official} </li>
                <li class="list-item two">Capital:  ${countryData[i].capital[0]} </li>
                <li class="list-item two">Continents:  ${countryData[i].continents}</li>
                <li class="list-item two">Languagess:  ${countryData[i].languages.eng}, ${countryData[i].languages.hin},${countryData[i].languages.tam    } </li>
                <li class="list-item two">Timezones:  ${countryData[i].timezones} </li>
              
            </ul> <span class="population"><h3>Population :</h3>${countryData[i].population} </span>`
        }
 
    }

    countryList.addEventListener("click",showCountryDetails );
}
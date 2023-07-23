let qContainer = document.querySelector(".country-info")

async function fetchData(){
    const response = await fetch(' https://restcountries.com/v3.1/all ')
    const data = await response.json();


    console.log(data);

    //  console.log(data[100].text);


    const len = data.length;
    
    const randomNo = Math.floor(Math.random()*len)

    
   
    qContainer.innerHTML =` <p>The Country Name is ${data[randomNo].name.common} with the population ${data[randomNo].population}</p>
   `

    
   
}
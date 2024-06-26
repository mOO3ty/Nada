let searchInput = document.querySelector(".data input")
let searchInputBtn = document.querySelector(".data button")
let searchVal = ""
let countryName = ""
let locationCountry
let currentWeather
let forecastWeather
let d = new Date();
let days=[ "Sunday" ," Monday" ,"Tuesday" ,"Wednesday", "Thursday" ,'Friday' ,"Saturday"]
let monthes=["January","February","March","April","May","June","July", "August","September","October","November","December"];
let nameOfDay=days[d.getDay()]
let noOfDate=d.getDate()
let nameOfMonth=monthes[d.getMonth()]
// ////////////////////////////////////////////////////////////////////////////////////location
//without get permission for location ip address

fetch("https://ipapi.co/json").then((response)=>response.json()).then((data)=>{

console.log(data);
let cityName=data.city

showPosition(cityName)
})

// get permission for location

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition)
    // } else {
    // //   x.innerHTML = "Geolocation is not supported by this browser.";
    // }
  
  
  async function showPosition(position) {
//without get permission for location

    let req = await fetch(`https://api.weatherapi.com/v1/search.json?key=23e821adab8a45bc871185930242006&q=${position}`)
// get permission for location
    // let req = await fetch(`https://api.weatherapi.com/v1/search.json?key=23e821adab8a45bc871185930242006&q=${ position.coords.latitude ,position.coords.longitude}`)
    let data = await req.json()
    countryName = data[0].name
    getWeather(countryName);
    // console.log(position.coords.latitude,position.coords.longitude);


    // console.log(data);
  }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


searchInput.addEventListener("keyup", searchCountry)
searchInputBtn.addEventListener("click", searchCountry)


function searchCountry() {

    let regexName = /[a-z]{3,}/
    searchVal = searchInput.value.toLowerCase()
    if (regexName.test(searchVal)) {
        getCountry(searchVal)
    }

}


// search the country
// https://api.weatherapi.com/v1/search.json?key=23e821adab8a45bc871185930242006&q=egy

async function getCountry(x) {
    let req = await fetch(`https://api.weatherapi.com/v1/search.json?key=23e821adab8a45bc871185930242006&q=${x}`)
    let data = await req.json()
    countryName = data[0].name
    getWeather(countryName);

    // console.log(data);
}
// forecast
// https://api.weatherapi.com/v1/forecast.json?key=23e821adab8a45bc871185930242006&q=paris&days=3
async function getWeather(y) {
    let req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=23e821adab8a45bc871185930242006&q=${y}&days=3`)
    let data = await req.json()
    // console.log(data);
    locationCountry = data.location
    currentWeather = data.current
    forecastWeather = data.forecast
    console.log(locationCountry);
    console.log(currentWeather);
    console.log(forecastWeather);
display()
}


// console.log(nameOfDay);
// console.log(d.getDate());

// console.log(nameOfMonth);



function display() {
    temp=`  <div class="col-lg-4 col-12 " id="today">
                            <div class="today-header d-flex justify-content-between px-3  align-items-center ">
                                <div>${nameOfDay}</div>
                                <div>${d.getDate()} ${nameOfMonth}</div>
                            </div>
                            <div class="today-content  px-3 py-4  ">
                                <span>${locationCountry.name}</span>
                                <h2 class="my-3">${currentWeather.temp_c} &#8451;</h2>
                               <img src="${"https:" +currentWeather.condition.icon}"class="iconImage" alt="logo of weather">
                                <br />
                                <br />
                                <span class="mode">${currentWeather.condition.text}</span>
                                <div class="d-flex">
                                    <div class="mt-3 me-3">
                                        <i class="fa-solid fa-umbrella"></i>
                                        <span>20%</span>
                                    </div>
                                    <div class="mt-3 me-3">
                                        <i class="fa-solid fa-wind"></i>
                                        <span>18km/h</span>

                                    </div>
                                    <div class="mt-3 me-3">
                                        <i class="fa-regular fa-compass"></i>
                                        <span>East</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12   " id="forecast ">
                            <div
                                class="forecast-header text-center px-3 d-flex align-items-center justify-content-center  ">
                                <div>${days[d.getDay()+1]}</div>

                            </div>
                            <div class="forecast-content  text-center  ">

                                <img src="${"https:" +forecastWeather.forecastday[1].day.condition.icon }"class="iconImage2" alt="">

                                <h2 class="mt-4 mb-2  text-white">${forecastWeather.forecastday[1].day.maxtemp_c} &#8451;</h2>
                                <h3 class="mb-3">${forecastWeather.forecastday[1].day.mintemp_c} &#8451;</h3>

                                <span class="mode">${forecastWeather.forecastday[1].day.condition.text }</span>

                            </div>
                        </div>
                        <div class="col-lg-4 col-12   " id="forecast2 ">
                            <div
                                class="forecast2-header text-center px-3 d-flex align-items-center justify-content-center  ">
                                <div>${days[d.getDay()+2]}</div>

                            </div>
                            <div class="forecast2-content  text-center  ">

                                <img src="${"https:" +forecastWeather.forecastday[2].day.condition.icon }"class="iconImage2" alt="">
                                <h2 class="mt-4 mb-2  text-white">${forecastWeather.forecastday[2].day.maxtemp_c} &#8451;</h2>
                                <h3 class="mb-3">${forecastWeather.forecastday[2].day.mintemp_c} &#8451;</h3>

                                <span class="mode">${forecastWeather.forecastday[2].day.condition.text }</span>

                            </div>
                        </div>  `
document.getElementById("mydata").innerHTML=temp

}

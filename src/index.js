function updateTimeDate() {
  //seoul
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDate = seoulElement.querySelector(".date");
    let seoulTime = seoulElement.querySelector(".time");
    let seoulTimeZone = moment().tz("Asia/Seoul");
    seoulDate.innerHTML = seoulTimeZone.format("MMMM D, YYYY");
    seoulTime.innerHTML = seoulTimeZone.format("h:mm:[<small>]ss A[</small>]");
  }
  //dubai
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDate = dubaiElement.querySelector(".date");
    let dubaiTime = dubaiElement.querySelector(".time");
    let dubaiTimeZone = moment().tz("Asia/Dubai");
    dubaiDate.innerHTML = dubaiTimeZone.format("MMMM D, YYYY");
    dubaiTime.innerHTML = dubaiTimeZone.format("h:mm:[<small>]ss A[</small>]");
  }
  //london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDate = londonElement.querySelector(".date");
    let londonTime = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");
    londonDate.innerHTML = londonTimeZone.format("MMMM D, YYYY");
    londonTime.innerHTML = londonTimeZone.format(
      "h:mm:[<small>]ss A[</small>]"
    );
  }
}

updateTimeDate();
setInterval(updateTimeDate, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:")}<small>${cityTime.format(
    "ss A"
  )}</small>
    </div>
  </div>
  <a href="/" class="cities-link">All Cities</a>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

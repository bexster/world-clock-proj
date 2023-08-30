function updateTimeDate() {
  //seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDate = seoulElement.querySelector(".date");
  let seoulTime = seoulElement.querySelector(".time");
  let seoulTimeZone = moment().tz("Asia/Seoul");
  seoulDate.innerHTML = seoulTimeZone.format("MMMM Do, YYYY");
  seoulTime.innerHTML = seoulTimeZone.format("h:mm:[<small>]ss A[</small>]");
  //dubai
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDate = dubaiElement.querySelector(".date");
  let dubaiTime = dubaiElement.querySelector(".time");
  let dubaiTimeZone = moment().tz("Asia/Dubai");
  dubaiDate.innerHTML = dubaiTimeZone.format("MMMM Do, YYYY");
  dubaiTime.innerHTML = dubaiTimeZone.format("h:mm:[<small>]ss A[</small>]");
  //london
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let londonTimeZone = moment().tz("Europe/London");
  londonDate.innerHTML = londonTimeZone.format("MMMM Do, YYYY");
  londonTime.innerHTML = londonTimeZone.format("h:mm:[<small>]ss A[</small>]");
}
updateTimeDate();
setInterval(updateTimeDate, 1000);

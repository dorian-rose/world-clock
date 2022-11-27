function updatedTime() {
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]a[</small/>]"
    );
  }

  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensTimeElement = athensElement.querySelector(".time");
    let athensDateElement = athensElement.querySelector(".date");
    let athensTime = moment().tz("Europe/Athens");
    athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]a[</small/>]"
    );
  }

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]a[</small/>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small> ${cityTime.format("a")} </small>
      </div>
    </div>
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

updatedTime();
setInterval(updatedTime, 1000);

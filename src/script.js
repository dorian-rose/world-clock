function updatedTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]a[</small/>]"
  );

  let athensElement = document.querySelector("#athens");
  let athensTimeElement = athensElement.querySelector(".time");
  let athensDateElement = athensElement.querySelector(".date");
  let athensTime = moment().tz("Europe/Athens");
  athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "h:mm:ss [<small>]a[</small/>]"
  );

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]a[</small/>]"
  );
}
updatedTime();
setInterval(updatedTime, 1000);

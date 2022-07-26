//network data patterns
const airtelNumbers = [
  "0802",
  "0808",
  "0812",
  "0701",
  "0708",
  "0902",
  "0907",
  "0901",
];
const mtnNumbers = [
  "07025",
  "07026",
  "0703",
  "0704",
  "0706",
  "0803",
  "0806",
  "0810",
  "0813",
  "0814",
  "0816",
  "0903",
  "0906",
];
const etisalatNumbers = ["0809", "0817", "0818", "0908", "0909"];
const gloNumbers = ["0805", "0807", "0811", "0815", "0705", "0905"];

// Network identifier function
function phoneNoIdentifier(number) {
  const convertedNumber = number.toString(); //converting the input number
  const addZeroToNumber = "0" + convertedNumber; //adding zero to the input
  const slicedNumber = addZeroToNumber.slice(0, 4);
  const mtnSlicedNumber = addZeroToNumber.slice(0, 5);

  //DOM styling
  let networkLogo = document.querySelector("#phoneNumberInput div");

  //displaying network logo
  if (airtelNumbers.includes(slicedNumber)) {
    networkLogo.style.backgroundImage = "url(./network_logo/airtel.png)";
  } else if (etisalatNumbers.includes(slicedNumber)) {
    networkLogo.style.backgroundImage = "url(./network_logo/etisalat.png)";
  } else if (
    mtnNumbers.includes(slicedNumber) ||
    mtnNumbers.includes(mtnSlicedNumber)
  ) {
    networkLogo.style.backgroundImage = "url(./network_logo/mtn.png)";
  } else if (gloNumbers.includes(slicedNumber)) {
    networkLogo.style.backgroundImage = "url(./network_logo/glo-logo.png)";
  } else {
    networkLogo.style.backgroundImage =
      "url(./network_logo/not_found_logo.jpg)";
  }
}

// DOM creation&destruction
function domCreation() {
        let netWorkLogoDiv = document.createElement("div");
  document.querySelector("#phoneNumberInput input").after(netWorkLogoDiv);
  
}
function domDelete() {
  let netWorkLogoDiv = document.querySelector("#phoneNumberInput > div");
  netWorkLogoDiv.remove();
}
// logo display
function logoDisplay() {
  let numberInputed = this.value;
  if (numberInputed.length >= 4) {
    let newNumber = parseInt(numberInputed);
    phoneNoIdentifier(newNumber);
  }
}

function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
    // pls remove the below and make some magic in here!
const displayNetworkLogo = document.querySelector("#phoneNumberInput input");

  
displayNetworkLogo.addEventListener('click', domCreation,{once:true});
displayNetworkLogo.addEventListener('load', domDelete);
//displaing network logo
displayNetworkLogo.addEventListener("input", logoDisplay);
}

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //

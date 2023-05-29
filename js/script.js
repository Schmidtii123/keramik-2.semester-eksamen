// VORES HISTORIE https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self //
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides", "workshop");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// ALLE SOM HEDDER 01 OG 02 ER TIL COMPUTER OG 1 OG 2 ER TIL MOBIL 

// WORKSHOPS -(Modalboks)

// modal
// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
// Close modals when clicking outside
// Close modals when clicking outside
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal01) {
    modal01.style.display = "none";
  } else if (event.target == modal02) {
    modal02.style.display = "none";
  }
};

// modalbox 2 tilmelding 

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close-2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}

// modal til bekræftelse
var submitBtn1 = document.getElementById("submitBtn1");
var submitBtn2 = document.getElementById("submitBtn2");
var submitBtn01 = document.getElementById("submitBtn01");
var submitBtn02 = document.getElementById("submitBtn02");
var modal3 = document.getElementById("myModal3");
var span3 = document.getElementsByClassName("close-3")[0];

function submit() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal01.style.display = "none";
  modal02.style.display = "none";
  modal3.style.display = "block";
}

var lukLink = document.getElementById("luk");

lukLink.addEventListener("click", function() {
  modal3.style.display = "none";
});


submitBtn1.onclick = check;
submitBtn2.onclick = check2;
submitBtn01.onclick = check01;
submitBtn02.onclick = check02;

span3.onclick = function () {
  modal3.style.display = "none";
}

// modal
// Get the modal
var modal01 = document.getElementById("myModal01");

// Get the button that opens the modal
var btn01 = document.getElementById("myBtn01");

// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close-01")[0];

// When the user clicks the button, open the modal 
btn01.onclick = function () {
  modal01.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span01.onclick = function () {
  modal01.style.display = "none";
}

// Get the modal
var modal02 = document.getElementById("myModal02");

// Get the button that opens the modal
var btn02 = document.getElementById("myBtn02");

// Get the <span> element that closes the modal
var span02 = document.getElementsByClassName("close-02")[0];

// When the user clicks the button, open the modal 
btn02.onclick = function () {
  modal02.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span02.onclick = function () {
  modal1.style.display = "none";
}
span2.addEventListener("click", function () {
  modal2.style.display = "none";
});
span3.addEventListener("click", function () {
  modal3.style.display = "none";
});
span01.addEventListener("click", function () {
  modal01.style.display = "none";
});
span02.addEventListener("click", function () {
  modal02.style.display = "none";
});


function updateOplysninger() {
  const OPLYSNINGER = document.querySelector(".oplysninger");

  OPLYSNINGER.innerHTML = ""; // Fjern eksisterende indhold

  // GET for modal 1
  if (sessionStorage.getItem("navn") && sessionStorage.getItem("mail") && sessionStorage.getItem("mobil")) {
    OPLYSNINGER.insertAdjacentHTML("beforeend", `
      <h3>Vi glæder os til at se dig, ${sessionStorage.getItem("navn")}!</h3>
      <h4>Mail: ${sessionStorage.getItem("mail")}</h4>
      <h4>Mobilnummer: ${sessionStorage.getItem("mobil")}</h4>
    `);
  }

  // GET for modal 2
  if (sessionStorage.getItem("navn2") && sessionStorage.getItem("mail2") && sessionStorage.getItem("mobil2")) {
    OPLYSNINGER.insertAdjacentHTML("beforeend", `
      <h3>Vi glæder os til at se dig, ${sessionStorage.getItem("navn2")}!</h3>
      <h4>Mail: ${sessionStorage.getItem("mail2")}</h4>
      <h4>Mobilnummer: ${sessionStorage.getItem("mobil2")}</h4>
    `);
  }

  // GET for modal 3
  if (sessionStorage.getItem("navn01") && sessionStorage.getItem("mail01") && sessionStorage.getItem("mobil01")) {
    OPLYSNINGER.insertAdjacentHTML("beforeend", `
      <h3>Vi glæder os til at se dig, ${sessionStorage.getItem("navn01")}!</h3>
      <h4>Mail: ${sessionStorage.getItem("mail01")}</h4>
      <h4>Mobilnummer: ${sessionStorage.getItem("mobil01")}</h4>
    `);
  }

  // GET for modal 4
  if (sessionStorage.getItem("navn02") && sessionStorage.getItem("mail02") && sessionStorage.getItem("mobil02")) {
    OPLYSNINGER.insertAdjacentHTML("beforeend", `
      <h3>Vi glæder os til at se dig, ${sessionStorage.getItem("navn02")}!</h3>
      <h4>Mail: ${sessionStorage.getItem("mail02")}</h4>
      <h4>Mobilnummer: ${sessionStorage.getItem("mobil02")}</h4>
    `);
  }
}

//check modal 1 om felterne er udfyldt
function check() {
  var navn = document.getElementById("navn").value;
  var mail = document.getElementById("mail").value;
  var mobil = document.getElementById("mobil").value;

  if (navn === "" || mail === "" || mobil === "") {
    alert("Udfyld venligst alle felter");
  } else {
    saveFormData();       // Gem formdata i sessionStorage
    updateOplysninger();  // Opdater oplysningerne i HTML'en
    submit();             // Viser modal med oplysninger, og skjuler alle andre modaler
  }
}

function saveFormData() {
  sessionStorage.clear();
  var navn = document.getElementById("navn").value;
  var mail = document.getElementById("mail").value;
  var mobil = document.getElementById("mobil").value;

  sessionStorage.setItem("navn", navn);
  sessionStorage.setItem("mail", mail);
  sessionStorage.setItem("mobil", mobil);
}

//check modal 2 om felterne er udfyldt ellers kommer der alert frem 
function check2() {
  var navn2 = document.getElementById("navn2").value;
  var mail2 = document.getElementById("mail2").value;
  var mobil2 = document.getElementById("mobil2").value;

  if (navn2 === "" || mail2 === "" || mobil2 === "") {
    alert("Udfyld venligst alle felter");
  } else {
    saveFormData2();
    updateOplysninger();
    submit();
  }
}

// Gem data for modal 2 i sessionStorage
function saveFormData2() {
  sessionStorage.clear();
  var navn2 = document.getElementById("navn2").value;
  var mail2 = document.getElementById("mail2").value;
  var mobil2 = document.getElementById("mobil2").value;

  sessionStorage.setItem("navn2", navn2);
  sessionStorage.setItem("mail2", mail2);
  sessionStorage.setItem("mobil2", mobil2);
}

//check modal 3 om felterne er udfyldt  ellers kommer der alert frem 
function check01() {
  var navn01 = document.getElementById("navn01").value;
  var mail01 = document.getElementById("mail01").value;
  var mobil01 = document.getElementById("mobil01").value;

  if (navn01 === "" || mail01 === "" || mobil01 === "") {
    alert("Udfyld venligst alle felter");
  } else {
    saveFormData01();
    updateOplysninger();
    submit();
  }
}

function saveFormData01() {
  sessionStorage.clear();
  var navn01 = document.getElementById("navn01").value;
  var mail01 = document.getElementById("mail01").value;
  var mobil01 = document.getElementById("mobil01").value;

  sessionStorage.setItem("navn01", navn01);
  sessionStorage.setItem("mail01", mail01);
  sessionStorage.setItem("mobil01", mobil01);
}

//check modal 4 om felterne er udfyldt ellers kommer der alert frem 
function check02() {
  var navn02 = document.getElementById("navn02").value;
  var mail02 = document.getElementById("mail02").value;
  var mobil02 = document.getElementById("mobil02").value;

  if (navn02 === "" || mail02 === "" || mobil02 === "") {
    alert("Udfyld venligst alle felter");
  } else {
    saveFormData02();
    updateOplysninger();
    submit();
  }
}

function saveFormData02() {
  sessionStorage.clear();
  var navn02 = document.getElementById("navn02").value;
  var mail02 = document.getElementById("mail02").value;
  var mobil02 = document.getElementById("mobil02").value;

  sessionStorage.setItem("navn02", navn02);
  sessionStorage.setItem("mail02", mail02);
  sessionStorage.setItem("mobil02", mobil02);
}

// Kald funktionen for at opdatere oplysningerne ved indlæsning af siden
updateOplysninger();
var form = document.getElementById("main-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let Name = document.getElementById("Name").value;
  console.log(Name);
  let Gmail = document.getElementById("Gmail").value;
  console.log(Gmail);
  let Number = document.getElementById("Number").value;
  console.log(Number);
  let Company = document.getElementById("Company").value;
  console.log(Company);
  let Message = document.getElementById("Message").value;
  console.log(Message);
});

document.addEventListener("DOMContentLoaded", function () {
  let Popup = document.getElementById("popup");
  let OpenpopUp = document.getElementById("Open-popup");
  OpenpopUp.addEventListener("click", function () {
    if (myformsubmitted) {
      Popup.style.display = "block";
    }
  });

  let closePopup = document.getElementById("closepopup");
  closePopup.addEventListener("click", function () {
    Popup.style.display = "none";
    Popup.style.width = "25%";
  });

  let Myform = document.getElementById("main-form");
  Myform.addEventListener("submit", function (event) {
    event.preventDefault();
    myformsubmitted = "true";
  });
});

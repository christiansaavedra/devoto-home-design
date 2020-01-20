var name = document.getElementById("nombre").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("telefono").value;
var templateParams = {
  user_name: name,
  user_email: email,
  user_phone: phone
};

emailjs.send("default_service", "template_GJ4TREJa", templateParams).then(
  function(response) {
    console.log("SUCCESS!", response.status, response.text);
  },
  function(error) {
    console.log("FAILED...", error);
  }
);

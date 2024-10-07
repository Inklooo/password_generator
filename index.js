const gbutton = document.querySelector(".gbutton");
const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "~!@#$%^&*()_+{}|:";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');


function generatePassword() {
  let data = [ ];
  let password = "";

  if(lowercase.checked) data.push(...dataLowercase);
  if(uppercase.checked) data.push(...dataUppercase);
  if(number.checked) data.push(...dataNumbers);
  if(symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("select range and options to generate a password");
  return;
  }

  for(i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);}

    // on ne peut pas faire de innerHtml ou textContent sur un input
  passwordOutput.value = password;
    //selctionner le password automatiquement
  passwordOutput.select();
    //copier le password dans le presse papier
  passwordOutput.execCommand('copy');
    // changer le nom du bouton pour indiquer a l'utilisateur que le password est copié

};

gbutton.addEventListener("click",generatePassword);

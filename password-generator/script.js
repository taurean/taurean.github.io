let validCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", ",", ".", ";", ":", "[", "]", "{", "}", "|", "~"]

function getRandomCharacter() {
  let randomNumber = Math.floor( Math.random() * validCharacters.length )
  return validCharacters[randomNumber]
}

function generatePassword(passwordLength) {
  let password = getRandomCharacter()
  
  for (let i = 1; i < passwordLength; i++) {
    password += getRandomCharacter()
  }
  return password
}

function displayNewPasswords() {
  if (document.getElementById("passwordLength-el").value === '') {
    passwordLengthValue = document.getElementById("passwordLength-el").placeholder
  } else {
    passwordLengthValue = document.getElementById("passwordLength-el").value
  }
  
  document.getElementById("password1-el").textContent = generatePassword(passwordLengthValue)
  document.getElementById("password2-el").textContent = generatePassword(passwordLengthValue)
  document.getElementById("password3-el").textContent = generatePassword(passwordLengthValue)
  document.getElementById("password4-el").textContent = generatePassword(passwordLengthValue)
}

function copyPassword(passwordElement) {
  elementToCopy = null
  if (passwordElement === 1) {
    elementToCopy = document.getElementById("password1-el").textContent
  } else if (passwordElement === 2) {
    elementToCopy = document.getElementById("password2-el").textContent
  } else if (passwordElement === 3) {
    elementToCopy = document.getElementById("password3-el").textContent
  } else if (passwordElement === 4) {
    elementToCopy = document.getElementById("password4-el").textContent
  }
  
  navigator.clipboard.writeText(elementToCopy)
}
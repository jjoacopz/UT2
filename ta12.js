function generatePassword(length) {
    if (length < 8) {
      console.error("La longitud mínima de la contraseña es 8 caracteres.");
      return;
    }
  
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?";
  
    const randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
    const randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
  
    const allChars = uppercase + lowercase + numbers + specialChars;
  
    let password = randomUppercase + randomLowercase + randomNumber + randomSpecialChar;
  
    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
  }
  
  console.log(generatePassword(8));  
  console.log(generatePassword(8)); 
  
function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
  
  const email = "matrixacademy@gmail.com";
  if (validateEmail(email)) {
    console.log("Bu string həqiqətən mail adresidir.");
  } else {
    console.log("Bu string mail adresi deyil.");
}

// function validateEmail(email) {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return regex.test(email);
// }

// console.log(validateEmail("user@example.com"));


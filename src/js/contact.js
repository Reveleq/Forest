	const contactBtn = document.querySelector(".contact__btn");
	const nameInput = document.querySelector("#name");
	const emailInput = document.querySelector("#email");
	const msgInput = document.querySelector("#msg");
	const nameError = document.querySelector(".contact__name-error");
	const msgError = document.querySelector(".contact__msg-error");
	const emailError = document.querySelector(".contact__email-error");
	const errorAlert = document.querySelectorAll(".error-alert");
	const inputs = document.querySelectorAll("input");
    // const checkName = () => {
	//    if(nameInput.value === '' && msgInput.value === '' && emailInput.value === ''){
	//    errorAlert.forEach(e => e.textContent = 'Musisz Uzupełnić pole!')
	//    inputs.forEach(e => e.classList.add('error'))
	//    msgInput.classList.add('error')
	//    msgInput.setAttribute('placeholder', '')
	//    }else if(nameInput.value === '' && msgInput.value === ''){
	//       nameError.value === 'Muisz uzupełnić pole!'
	//       msgError.value === 'Musisz uzupełnić pole!'
	//       msgInput.classList.add('error')
	//       nameInput.classList.add('error')
	//    }else if(nameInput.value === '' && emailInput.value === ''){
	//       nameError.value === 'Muisz uzupełnić pole!'
	//       msgError.value === 'Musisz uzupełnić pole!'
	//       msgInput.classList.add('error')
	//       nameInput.classList.add('error')
	//    }
	//    else{
	//       errorAlert.forEach(e => e.textContent = '')
	//       inputs.forEach(e => e.classList.remove('error'))
	//       msgInput.classList.remove('error')
	//       msgInput.setAttribute('placeholder', 'Wpisz tekst')
	//    }
	// }
	const checkName = () => {
		if (nameInput.value === "") {
			nameInput.classList.add("error");
		   nameError.classList.add('show-alert')
			nameError.textContent = "Musisz uzupełnić pole!";
      } else if(nameInput.value.trim() === ''){
		nameInput.value = ''
		nameInput.classList.add("error");
		nameError.classList.add('show-alert')
		 nameError.textContent = "Musisz uzupełnić pole!";
	  }
	  else {
			nameInput.classList.remove("error");
         nameError.classList.remove('show-alert')
			nameError.textContent = "";
		}
	};
	const checkemail = () => {
		if (emailInput.value === "") {
			emailInput.classList.add("error");
			emailError.textContent = "Musisz uzupełnić pole!";
		   emailError.classList.add('show-alert')
      } 
	  else {
			emailInput.classList.remove("error");
			emailError.textContent = "";
          emailError.classList.remove('show-alert')
         checkValueEmail()
		}
	};
   const checkValueEmail = () => {
       const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(emailInput.value)){
         emailError.textContent = "";
         checkAll()
         
   }else {
      emailInput.classList.add("error",);
		emailError.textContent = "Niepoprawny E-mail";
      emailError.classList.add('show-alert')
}
   }

	const checktextarea = () => {
		if (msgInput.value === "") {
			msgInput.classList.add("error");
			msgError.textContent = "Musisz uzupełnić pole!";
		   msgError.classList.add("show-alert")
      }else if(msgInput.value.trim() === ''){
		msgInput.value = ''
		msgInput.classList.add("error");
		msgError.textContent = "Musisz uzupełnić pole!";
	   msgError.classList.add("show-alert")
	  } else {
			msgInput.classList.remove("error");
			msgError.textContent = "";
         msgError.classList.remove('show-alert')
         
		}
	};
    const checkAll = () => {
      if(nameInput.value !== '' && msgInput.value !== ''){
         emailInput.value = ''
      nameInput.value = ''
      msgInput.value = ''
         setTimeout( () => window.alert('Formularz poprawnie wysłany'), 1) 
      }
   }
   
	contactBtn.addEventListener("click", () => {
		checkName();
		checktextarea();
		checkemail();
	});
	contactBtn.addEventListener("click", (e) => e.preventDefault());
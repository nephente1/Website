document.addEventListener('DOMContentLoaded', function(){

     var form = document.querySelector('form');

     form.addEventListener('submit', function(event){
		 event.preventDefault();
         var errors = [];
		 var succes = [];

         var nameVal = form.elements.name.value;
         if(nameVal.length <= 4) {
             errors.push('Wpisz swoje imię i nazwisko')
         }
		 
		 var emailVal = form.elements.email.value;
         if(emailVal.indexOf('@') === -1) {
             errors.push('Email musi posiadać znak @');
         }
		 
		 var textVal = form.elements.text.value;
		 if(textVal.length <=3){
			 errors.push("Wpisz wiadomość")
		 }
		 console.log(errors);
         if(errors.length > 0) {
             event.preventDefault();
			 // aby formularz nie zostal wyslany!!!

             var errorMessage = document.querySelector('.error-message');
             errorMessage.innerHTML = '';
             for(var i=0; i<errors.length; i++) {
                 errorMessage.innerHTML += errors[i] + '<br/>'
             }
         }else{
			 event.preventDefault();
//			 succes.push('Formularz wysłany poprawnie!');
//			 
			 var succesMessage = document.querySelector('.success-message');
			 succesMessage.innerText ='Formularz wysłany poprawnie!';
//			 for(var i=0; i<succes.length; i++) {
//                 succesMessage.innerHTML += succes[i] + '<br/>'
//             }
			 
			 var dane = "name: "+ nameVal +"\n email: "+emailVal+"\n Wiadomosc: "+textVal;
			 console.log(dane);
			 
			 
			 let url = form.getAttribute('action');
			 console.log(url);
			 fetch ( url , { 
				 method: 'POST',
				 headers: {
				   'Content-Type': 'application/x-www-form-urlencoded'
				 },
				 body: JSON.stringify({
					 to: 'katarzynapol@vp.pl',
					 subject: 'Email ze strony',
					 message: dane
				 })
			 })
			 .then( (e) => console.log(e))
			 .catch( err => console.log(err) ); 
		 }
		
     })
	
	
	
 })
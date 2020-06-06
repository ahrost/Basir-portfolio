

/* alert('Hellow World');
let greeting= 'Hello Ahmad';
alert(greeting); */

//////////////////////////

let submitButton = document.querySelector('#submit-button');
//alert(submitButton);
//console.log(submitButton);

function clickListener() {
event.preventDefault();
let emailInput=document.querySelector('#email');
let messageInput=document.querySelector('#message');

let emailText=emailInput.value;
let messageText=messageInput.value;

console.log('Email is:' , emailText);
console.log(emailValidate(emailText));
console.log('Message is:' , messageText);

 if (emailValidate(emailText)!==true) {
console.log('The email address must contain @ and .');
return false;
	} 
}
submitButton.addEventListener('click',clickListener);

function emailValidate(email) {
if(email.includes('@' && '.')) {
	  return true;
	}else {
	  return false;
	}
}


/////////////////////////////////////
/* let fullname = {
	firstName:'Ahmad',
	lastName: 'Rostami'
}

alert(fullname.firstName + ' '+fullname.lastName); */

//////////////////////////
/* let n1=9;
let n2=7;
let s=add(n1,n2);
if (s!==15) {
	alert(s);
	}
	else {
alert('Not 16');
} */
//////////////////////////

/* alert(add(2,3)); */

/* function add(num1 , num2){
let sum=num1+num2;
return sum;
} */
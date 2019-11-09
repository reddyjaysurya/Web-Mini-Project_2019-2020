var config = {
  apiKey: "AIzaSyBcKUy9py-r3o1t5EzciQaUUyVSdCc9mOQ",
  authDomain: "webminiproject-7e2a7.firebaseapp.com",
  databaseURL: "https://webminiproject-7e2a7.firebaseio.com",
  projectId: "webminiproject-7e2a7",
  storageBucket: "webminiproject-7e2a7.appspot.com",
  messagingSenderId: "175885322876",
  appId: "1:175885322876:web:b2b54fe03113b1034257f9",
  measurementId: "G-YG8N62EFZ4"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

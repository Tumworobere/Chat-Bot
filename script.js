const input = document.getElementById("inputMessage");
const button = document.getElementById("btn");
const content = document.getElementById("content");


function createChat(message, username) {

const chatBody = document.createElement("div");
const name = document.createElement("first3-personchat");
name.classList.add("name");
name.innerText = username
chatBody.appendChild(name);
const deliver = document.createElement("second-personchat2")
deliver.innerText = message;
chatBody.appendChild(deliver);
content.appendChild(chatBody);
}


function sendButton(){
  createChat(input.value,  );
  content.innerHTML += input.value;
}
button.addEventListener("click", sendButton);





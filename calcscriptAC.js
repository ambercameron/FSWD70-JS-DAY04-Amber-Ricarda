var button = document.getElementsByTagName("button");
for (let i=0; i<button.length; i++){
button[i].addEventListener("click", showconsole);
}

function showconsole() {
  console.log(this.innerHTML)
}
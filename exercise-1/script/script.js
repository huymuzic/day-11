function togglePattern() {
  // Enter your code here!
  console.log("Hello world!")
  
  video = document.querySelector('#pattern');
  video.classList.toggle("visible");
  video.classList.toggle("invisible");

}

btn = document.querySelector('button');
btn.addEventListener('click', togglePattern);
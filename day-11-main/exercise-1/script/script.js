btn = document.querySelector('button');

function togglePattern() {

  video = document.querySelector('div');
  video.classList.toggle("invisible");

  btn = document.querySelector('button');
  if (video.classList.contains("invisible")) {
    btn.innerHTML = "Show!";
  } else {
    btn.innerHTML = "Hide!";
  }

}

btn.addEventListener('click', togglePattern);
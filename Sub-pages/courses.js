const btn = document.getElementById('fun-button');
let animating = false;

btn.addEventListener('click', () => {
  animating = !animating;
  document.body.classList.toggle('animate_bg', animating);
  btn.textContent = animating ? 'Stop The Fun' : 'Start The Fun!';
});
// testing button code here
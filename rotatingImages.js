const imagePaths = [
    "/media/portrait_1.jpg",
    "/media/portrait_2.jpg",
    "/media/portrait_3.jpg",
    "/media/portrait_4.jpg"
];

  let currentIndex = 0;
  let showingA = true;

  const imgA = document.getElementById("imgA");
  const imgB = document.getElementById("imgB");

imgA.src = imagePaths[currentIndex];
imgA.classList.add("active");
imgB.classList.remove("active", "exit", "offscreen-right");
imgB.classList.add("offscreen-right");

function changeImage() {
    const nextIndex = (currentIndex + 1) % imagePaths.length;

    const entering = showingA ? imgB : imgA;
    const leaving  = showingA ? imgA : imgB;

    // prepare entering image offscreen right
    entering.src = imagePaths[nextIndex];
    entering.classList.remove("exit");
    entering.classList.add("offscreen-right");

    // trigger reflow for transition
    entering.offsetHeight;

    // slide images
    entering.classList.remove("offscreen-right");
    entering.classList.add("active");

    leaving.classList.remove("active");
    leaving.classList.add("exit");

    // after animation, reset leaving image
    setTimeout(() => {
        leaving.classList.remove("exit");
        leaving.classList.add("offscreen-right");
    }, 800); // match CSS transition duration

    showingA = !showingA;
    currentIndex = nextIndex;
  }

setInterval(changeImage,6000);

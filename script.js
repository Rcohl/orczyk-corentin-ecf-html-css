const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 1400) {
    footer.style.bottom = 0;
  } else {
    footer.style.bottom = "-500px";
  }
});

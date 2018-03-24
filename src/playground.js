console.log('I am playground.js!');

const doItInSecond = () => {
  setTimeout(() => {
    console.log('After second');
  }, 1000);
  console.log('I am called before');
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded. Ready to go!");

  doItInSecond();
});
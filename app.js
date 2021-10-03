const menuBtn = document.querySelector(".main");
// const menuBtn1 = document.querySelector('.buttons')
const btns = document.querySelectorAll(".btn");
let isMenuOpen = false;
let transitionApplied = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menuBtn.classList.toggle("svg_rotate");
  // btns.forEach(el => {
  //    el.classList.toggle('trans1')
  // })

  if (!transitionApplied) {
    btns[0].classList.toggle("trans1");
    btns[1].classList.toggle("trans2");
    btns[2].classList.toggle("trans3");

    // btns[0].classList.replace("trans6", "trans1");
    // btns[1].classList.replace("trans5", "trans2");
    // btns[2].classList.replace("trans4", "trans3");
    transitionApplied = true;
  } else {
    btns[0].classList.replace("trans1", "trans6");
    btns[1].classList.replace("trans2", "trans5");
    btns[2].classList.replace("trans3", "trans4");

    transitionApplied = false;
  }
});

// menuBtn.addEventListener('click', ()=>{
//   isMenuOpen = !isMenuOpen;
//   //menuBtn.classList.toggle('svg_rotate');
//   // btns.forEach(el => {
//   //    el.classList.toggle('trans1')
//   // })
// })

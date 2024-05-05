let lenghtSlider = document.querySelector(".main input");

let updateSilder = () => {
  document.querySelector(".main span").innerText = lenghtSlider.value;
};

lenghtSlider.addEventListener("input", updateSilder);

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let boxes = document.querySelectorAll(".box");

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    boxes.forEach((box, boxIndex) => {
      if (boxIndex == index) {
        box.classList.add("none");
      } else {
        box.classList.remove("none");
      }
      if (checkedCount >= 1 && boxIndex < checkedCount) {
        box.classList.add("red");
      } else {
        box.classList.remove("red");
      }
      if (checkedCount >= 3 && boxIndex < checkedCount) {
        box.classList.add("yellow");
      } else {
        box.classList.remove("yellow");
      }
      if (checkedCount == 4) {
        box.classList.add("green");
      } else {
        box.classList.remove("green");
      }
      if (checkedCount <= 4) {
        box.classList.remove("none");
      } else {
        box.classList.add("none");
      }
    });
  });
});

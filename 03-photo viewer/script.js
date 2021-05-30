const photoRollEls = document.querySelectorAll(".photo-roll img");
const prevBtn = document.querySelectorAll(".actions button")[0];
const nextBtn = document.querySelectorAll(".actions button")[1];
const photoButtons = document.querySelectorAll(".clickable-photo");
const mainPhoto = document.querySelector(".main-photo img");

//starting image
let index = 0;
mainPhoto.src = photoRollEls[index].src;

//clicking on a photo displays it
photoRollEls.forEach((el, elIndex) => {
  el.addEventListener("click", function () {
    mainPhoto.src = photoRollEls[elIndex].src;
  });
});

//next and prev
function handlePhotoChange(position) {
  if (position === "prev" && index > 0) {
    index--;
    mainPhoto.src = photoRollEls[index].src;
    return;
  }

  if (position === "next" && index < photoRollEls.length - 1) {
    index++;
    mainPhoto.src = photoRollEls[index].src;
    return;
  }
}

nextBtn.addEventListener("click", () => {
  handlePhotoChange("next");
});

prevBtn.addEventListener("click", () => {
  handlePhotoChange("prev");
});

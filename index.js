const share1 = document.querySelector(".share > img");
const share = document.querySelector(".moremb > img");
const mb = document.querySelector(".moremb");
if (window.innerWidth <= 400) {
  share1.addEventListener("click", (e) => {
    mb.style.display = "flex";
  });
  share.addEventListener("click", () => {
    mb.style.display = "none";
  });
}

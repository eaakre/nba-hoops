// Open Gallery view of player cards
let teamImgBox = document.getElementById("teamImgBox");
let teamImg = document.getElementById("teamImg");

function openTeamImg(img) {
    teamImg.src = img;
    teamImgBox.style.display = "flex";
}

function closeTeamImg() {
    teamImgBox.style.display = "none";
}
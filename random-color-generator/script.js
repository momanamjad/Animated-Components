const hexBtn = document.querySelector(".content-hex-btn");
const hexTextContent = document.querySelector(".content-hex-text");
const hexContainer = document.querySelector(".content-hex");
const hexCopyClipBoard = document.querySelector(".content-hex-copy");

hexBtn.addEventListener("click", () => {
  const hexTexts = "0123456789ABCDEF";
  let hexOutput = "";

  for (let i = 0; i < 6; i++) {
    hexOutput += hexTexts[Math.floor(Math.random() * hexTexts.length)];
  }

  hexTextContent.textContent = `#${hexOutput}`;
  hexContainer.style.backgroundColor = `#${hexOutput}`;
  hexBtn.style.color = `#${hexOutput}`;
});

hexCopyClipBoard.addEventListener("click", () => copyToClipBoard("hex"));

// RGB

const rgbContainer = document.querySelector(".content-rgb");
const redRGB = document.getElementById("red");
const greenRGB = document.getElementById("green");
const blueRGB = document.getElementById("blue");
const redVal = document.querySelector(".red-val");
const greenVal = document.querySelector(".green-val");
const blueVal = document.querySelector(".blue-val");
const rgbCopyClipBoard = document.querySelector(".content-rgb-copy");

redRGB.addEventListener("input", (e) => {
  const currentInp = e.target.value;
  reflectRGBbackground(currentInp, greenRGB.value, blueRGB.value);
  redVal.textContent = currentInp;
});

greenRGB.addEventListener("input", (e) => {
  const currentInp = e.target.value;
  reflectRGBbackground(redRGB.value, currentInp, blueRGB.value);
  greenVal.textContent = currentInp;
});

blueRGB.addEventListener("input", (e) => {
  const currentInp = e.target.value;
  reflectRGBbackground(redRGB.value, greenRGB.value, currentInp);
  blueVal.textContent = currentInp;
});

rgbCopyClipBoard.addEventListener("click", () => copyToClipBoard("rgb"));

function reflectRGBbackground(r, g, b) {
  rgbContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function copyToClipBoard(target) {
  if (target === "hex") {
    navigator.clipboard.writeText(hexTextContent.textContent);
  } else {
    const red = redRGB.value;
    const green = greenRGB.value;
    const blue = blueRGB.value;
    navigator.clipboard.writeText(`rgb(${red}, ${green}, ${blue})`);
  }
}

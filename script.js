// RGB Colors

document.getElementById("previewBtn").addEventListener("click", btnClick);

//function

function btnClick() {
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  console.log(r);
  //process

  document.getElementById("display").style.background = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("rgb-t").innerHTML = `rgb(${r}, ${g}, ${b})`;
}

//Black

document.getElementById("black").addEventListener("click", btnClicked);

//function

function btnClicked() {
  document.getElementById("display").style.background = `rgb(0, 0, 0)`;
  document.getElementById("rgb-t").innerHTML = `rgb(0, 0, 0)`;
}

//White

document.getElementById("white").addEventListener("click", btnClicker);

//function

function btnClicker() {
  document.getElementById("display").style.background = `rgb(255, 255, 255)`;
  document.getElementById("rgb-t").innerHTML = `rgb(255, 255, 255)`;
}

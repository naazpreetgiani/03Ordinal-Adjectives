//Program Title
document.getElementById("search-btn").addEventListener("click", btnClicked);
outputE1 = document.getElementById("num-info");

function btnClicked() {
  //INPUT
  let adj = document.getElementById("search-in").value;
  //PROCESS
  if (adj === "1") {
    outputE1.innerHTML = `<p class="ordinal" >1st</p>`;
  } else if (adj === "2") {
    outputE1.innerHTML = `<p class="ordinal" >2nd</p>`;
  } else if (adj === "3") {
    outputE1.innerHTML = `<p class="ordinal" >3rd</p>`;
  } else if (adj >= "4" && adj <= "9") {
    outputE1.innerHTML = `<p class="ordinal">${adj}th</p>`;
  } else if (adj <= 0 || adj >= 10) {
    outputE1.innerHTMl = `<p class="ordinal">Please enter a number between 1 and 9.</p>`;
  }
  //OUTPUT
}

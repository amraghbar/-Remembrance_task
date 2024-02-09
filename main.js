const counts = document.querySelectorAll("span");
const botton = document.querySelectorAll("button");
const arrcount = [0, 0, 0, 0];

for (let i = 0; i < counts.length; i++) {
  botton[i].onclick = () => {
    arrcount[i]++;
    counts[i].textContent = arrcount[i];
  };
}

const resets = document.querySelectorAll('.reset');
  for (let g=0 ; g < counts.length;g++) {
resets[g].onclick = (e)=> {
  const spanElement = e.currentTarget.parentElement.querySelector('span');
  if (spanElement) {
    spanElement.textContent = 0;
}
}
  }
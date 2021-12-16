let images = document.querySelectorAll('.img');
let rightImage = document.querySelector('.img2');
let heading = document.querySelector('h1');
let refreshBtn = document.querySelector('button');

refreshBtn.addEventListener('click', function () {
  for (let i = 0; i <= 6; i++) {
    let randomNumber1 = Math.ceil(Math.random() * 6);
    let randomNumber2 = Math.ceil(Math.random() * 6);
    let img1Src = `images/dice` + randomNumber1 + `.png`;
    let img2Src = `images/dice` + randomNumber2 + `.png`;
    images[0].setAttribute(`src`, img1Src);
    images[1].setAttribute(`src`, img2Src);
    if (randomNumber1 === randomNumber2) {
      heading.innerHTML = 'Draw!';
    } else if (randomNumber1 > randomNumber2) {
      heading.innerHTML = 'Player One Wins!!';
    } else {
      heading.innerHTML = 'Player Two Wins!!';
    }
  }
});

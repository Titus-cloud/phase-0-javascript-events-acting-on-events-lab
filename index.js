// Your code here
const dodger = document.getElementById('dodger');
dodger.style.left = '180px'; 

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace('px', ''));
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace('px', ''));
  if (left < 360) { 
    dodger.style.left = `${left + 10}px`;
  }
}

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
}



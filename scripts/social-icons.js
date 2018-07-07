function hoverIcon(n) {
  n.querySelector('img').src = '/images/' + n.getAttribute('icon'); + '-yellow.png';
}

function unHover(n) {
  n.querySelector('img').src = '/images/' + n.getAttribute('icon'); + '-black.png';
}

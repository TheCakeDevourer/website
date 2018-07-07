function hoverIcon(n) {
  n.querySelector('img').src = '/images/icons/' + n.getAttribute('icon'); + '-yellow.png';
}

function unHover(n) {
  n.querySelector('img').src = '/images/icons/' + n.getAttribute('icon'); + '-black.png';
}

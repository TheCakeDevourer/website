function hoverIcon(n) {
  n.querySelector('img').src = '/images/icons/' + n.getAttribute('icon'); + '-yellow.png';
}

function unHover(n) {
  n.querySelector('img').src = '/images/icons/' + n.getAttribute('icon'); + '-black.png';
}

// This code was made by thecakedevourer, can be used by other people but credits must be given.


const likeButton = document.getElementById('like-button');
let isLiked = false;

likeButton.addEventListener('click', function() {
  isLiked = !isLiked;

  if (isLiked) {
    likeButton.classList.add('active');
    likeButton.setAttribute('aria-pressed', 'true');
    document.getElementById('like-count').textContent = parseInt(document.getElementById('like-count').textContent) + 1;
  } else {
    likeButton.classList.remove('active');
    likeButton.setAttribute('aria-pressed', 'false');
    document.getElementById('like-count').textContent = parseInt(document.getElementById('like-count').textContent) - 1;
  }
});


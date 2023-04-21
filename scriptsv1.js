
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



// TEXT SWIFT-UP ANIMATION.
const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

	const words = elem.textContent.split(' ');
	elem.innerHTML = '';

	words.forEach((el, index) => {
		words[index] = `<strong><i>${words[index]}</i></strong>`;
	});

	elem.innerHTML = words.join(' ');

	const children = document.querySelectorAll('strong > i');
	children.forEach((node, index) => {
		node.style.animationDelay = `${index * .2}s`;
	});
});






// SCROLL ANIMATION.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");}
    // } else {
    //   entry.target.classList.remove("show");
    // }
  })
});


const hiddenLeftElements = document.querySelectorAll(".hidden-left");
hiddenLeftElements.forEach((el) => observer.observe(el));

const hiddenRightElements = document.querySelectorAll(".hidden-right");
hiddenRightElements.forEach((el) => observer.observe(el));

const hiddenBottomElements = document.querySelectorAll(".hidden-bottom");
hiddenBottomElements.forEach((el) => observer.observe(el));

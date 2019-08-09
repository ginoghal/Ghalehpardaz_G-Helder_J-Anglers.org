(() => {
	//stubb
	console.log('link successful');

	const
	lightBox = document.querySelector('.mobile-lightbox'),
	closeButton = document.querySelector('.close-lightbox'),
	submitButton = document.querySelector('.submit-button'),
	donaship = document.querySelector("#mobileDonaship");

	let scrollPosition = window.pageYOffset;

	window.onscroll = function() {

	  let newScrollPosition = window.pageYOffset;

	  if (scrollPosition > newScrollPosition) {
			donaship.classList.remove("mobile-donaship-hide");
			donaship.classList.add("mobile-donaship");
			scrollPosition = newScrollPosition;
			console.log("show");

	  }
		else {

			donaship.classList.remove("mobile-donaship");
			donaship.classList.add("mobile-donaship-hide");
			console.log("hide");
			scrollPosition = newScrollPosition - 4;
		};
	};

	function closeLightBox(e) {
    event.preventDefault();
    lightBox.classList.add('hide-mobile-lightbox');
	};

	closeButton.addEventListener("click", closeLightBox);
	submitButton.addEventListener('click', closeLightBox);

})();

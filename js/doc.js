/* Automatic anchor links */
window.addEventListener('load', ()=> {
	var nodes = document.getElementsByClassName('anchor-link');
	for (var i=0; i < nodes.length; i++) {
		nodes[i].addEventListener('click', copy);
		nodes[i].addEventListener('click', scrollToTop);
	}
})

// adds smooth scroll for anchor links 
function scrollToTop() {
	document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	});
  }


// copies the anchor URL to easily share URLs with customers
function copy(event) {
	window.event.preventDefault();
	var {origin, pathname} = window.location;
	var copyText = origin + pathname + event.target.hash;
	
	document.addEventListener('copy', function(e) {
		e.clipboardData.setData('text/plain', copyText);
		e.preventDefault();
		console.log('Copied text: ', copyText);
	}, {once:true});

	document.execCommand('copy');  
	window.location.replace(copyText);
}
/* End of automatic anchor links */


/* Opening all links in new tab except internal links starting with # */
window.onload = function(){
	var links = document.querySelectorAll('.col-sm-9 a');

	for (let link of links){
		if (link.getAttribute('href').startsWith('#')) {
			link.setAttribute('target', '_self');
		  } 
		else {
			link.setAttribute('target', '_blank');	
		  }
	}	
  }
/* End of opening links in another tab */
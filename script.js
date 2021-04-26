const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript"; 
document.querySelector('body').appendChild(h2); 

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);
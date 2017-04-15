const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleClick(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		})	
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('click', handleClick)	
})

// for (var i=0; i < checkboxes.length; i++) {
// 	checkboxes[i].addEventListener('click', function(e){
// 		if (e.shiftKey) {
// 			console.log('test');
// 			this.checked = false;			
// 		}
// 	});
// }
let inputs = document.querySelectorAll('input[type=range]')
let elem = document.querySelector('.main.interactive')


inputs.forEach(input => {
   input.addEventListener('change', function(e) {
      var p = e.target.getAttribute('name');
      if(p=="s" || p=="mv") {
        elem.style.setProperty("--"+p, this.value+"px");
	    	e.target.previousElementSibling.innerHTML = this.value+"px";
      } else { 
        elem.style.setProperty("--"+p, this.value);
  		  e.target.previousElementSibling.innerHTML = this.value;
      }
    });
});

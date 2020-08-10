var slideIndex = 0;

showDivs(slideIndex);



function plusDivs(n) {

  showDivs(slideIndex += n);

}



function currentDiv(n) {

  showDivs(slideIndex = n);

}



function showDivs(n) {

  var i;

  var x = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("demo");

  if (n > x.length) {slideIndex = 1}

  if (n < 1) {slideIndex = x.length}

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none";  

  }

  for (i = 0; i < dots.length; i++) {

    dots[i].className = dots[i].className.replace(" w3-black", "");

  }

  x[slideIndex-1].style.display = "block";  

  dots[slideIndex-1].className += " w3-black";

}

var myIndex = 0;

carousel();



function carousel() {

  var i;

  var x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none";  

  }

  myIndex++;

  if (myIndex > x.length) {myIndex = 1}    

  x[myIndex-1].style.display = "block";  

   plusDivs(1);

  

  setTimeout(carousel, 3000);    

}







// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}




// Change style of navbar on scroll



window.onscroll = function() {myFunction()};



function myFunction() {



    var navbar = document.getElementById("myNavbar");



    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {



        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";



    } else {



        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");



    }



}







// Used to toggle the menu on small screens when clicking on the menu button



function toggleFunction() {



    var x = document.getElementById("navDemo");



    if (x.className.indexOf("w3-show") == -1) {



        x.className += " w3-show";



    } else {



        x.className = x.className.replace(" w3-show", "");



    }



}



function validateForm() {

	console.log("S-a apelat functia");

  var x = document.forms["myForm"]["Email"].value;

  console.log(x);

  if (!x.includes('@')) {

	  console.log("Am intrat in if");

    document.forms["myForm"]["Email"].value = 'Invalid Email';

    document.forms["myForm"]["Email"].style.color = "Red";

    return false;

  }

}



function clicked() {

	console.log("Am apelat clicked");

	var x = document.forms["myForm"]["Email"].value;

	if (x.includes('Invalid')) {

		console.log('Contine invalid');

		document.forms["myForm"]["Email"].value = '';

		document.forms["myForm"]["Email"].style.color = "black";

	} else {

		console.log('Nu contine invalid');

		

	}

	

}






























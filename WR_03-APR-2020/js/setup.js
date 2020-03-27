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
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
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
  
  setTimeout(carousel, 2500);    
}



// Modal Image Gallery

function onClick(element) {

  var initialImageSrc = element.src;
  //display the high resolution image when clicked , NOT the preview as displayed on the main page (..._big extensions)
  if (initialImageSrc.includes("pq1"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq1","pq1");

  }
  if (initialImageSrc.includes("pq2"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq2","pq2");

  }
  if (initialImageSrc.includes("pq3"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq3","pq3");

  }
  if (initialImageSrc.includes("pq4"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq4","pq4");

  }
  if (initialImageSrc.includes("pq5"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq5","pq5_big");

  }
  if (initialImageSrc.includes("pq6"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq6","pq6_big");

  }
  if (initialImageSrc.includes("pq7"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq7","pq7_big");

  }
  if (initialImageSrc.includes("pq8"))
  {	  
	  document.getElementById("img01").src = element.src.replace("pq8","pq8_big");

  }
  

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















function onHover()
{
    $("#menuImg").attr('src', 'https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/MacBookPro_2021_Headline_Image_484775_q0zynx.jpg');
}

function offHover()
{
    $("#menuImg").attr('src', 'https://www.punto-informatico.it/app/uploads/2022/01/rupixen-com-pzPcfPVhHl8-unsplash-1060x424.jpg');
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
  setTimeout(carousel, 1000);
}


window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F1RTS0P1CD');



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



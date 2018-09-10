// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// -------------------------------------------------------------
// Get the modal


// Get the button that opens the modal


// $(document).ready(function(){
//     // Фикмированная шапка при скролле
//     $("#header").removeClass("default");
//     $(window).scroll(function(){
//     	if ($(this).scrollTop() > 20) {
//     		$("#header").addClass("default").fadeIn('fast');
//     	} else {
//     		$("#header").removeClass("default").fadeIn('fast');
//     	};
//     });

//     Плавный скролл по якорям
//     $('a[href^="#"]').click(function () { 
//         elementClick = $(this).attr("href");
//         destination = $(elementClick).offset().top;
//         if($.browser.safari){
//         $('body').animate( { scrollTop: destination }, 1000 );
//         } else {
//             $('html').animate( { scrollTop: destination }, 1000 );
//         }
//         return false;
//    });
// });
console.log("Labas");
$('h1').css('color', 'pink');

window.paspaudusNuotrauka=function( src,  caption) {

// Get the modal
    var modal = document.getElementById('modalPopup');

// Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("modalCaption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;

    var span = document.getElementById("modalClose");

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        var modal = document.getElementById('modalPopup');
        modal.style.display = "none";
    }
};


// Get the <span> element that closes the modal

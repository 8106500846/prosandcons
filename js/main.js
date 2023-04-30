
// for the typewriting effect in the hero section
var app = document.getElementById('typewrite');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('using social media?')
    .pauseFor(2500)
    .deleteAll()
    .typeString('drinking coffee?')
    .pauseFor(2500)
    .deleteAll()
    // .deleteChars(15)
    .typeString('using solar panel for home?')
    .pauseFor(2500)
    .start();


$(".more-pages-trig").on('click', function() {
    $(".more-pages").toggleClass("active");
});
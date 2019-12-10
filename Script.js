var hart = document.getElementById("Hart-icon");
var square = document.getElementsByClassName("st1");

//Square rotation
TweenMax.set(square, {transformOrigin:"50% 50%"})
timeline = new TimelineMax({paused:true});

timeline.to(square, 10,
	{
		rotation: 360,
		transformOrigin:"center",
		scale:1.2,
		ease: Power0.easeNone,
		repeat:-1
	},
	0);

timeline.play();

//Slow bounch effect
TweenMax.fromTo(hart, 0.8, {
    visible: true,
    scale: 1
}, {
    scale: 1.2,
    repeat: -1,
    yoyo: true
});

TweenLite.fromTo('#Square-Fill ', 4, {drawSVG: "0%"}, {drawSVG: "100%"});
TweenMax.from("#MA-Square", 2, {attr: {x: 400}, yoyo: true, repeat: -1, ease: Linear.easeNone});




//Bounch effect
$("#Hart-icon").on("mouseenter", function () {
    TweenMax.to(this, 0.4, {scale: 1.2, ease: Bounce.easeOut})
    TweenMax.to(this, 0.2, {scale: 1, delay: 0.3})
})

// Verander naar random kleuren
function animate() {
	TweenMax.to(".animate", 1, {fill: getRandomColor(), stroke: getRandomColor(), delay: 1, onComplete: animate});
}

function getRandomColor() {
	//RGB (random number from 0-255 3x for the 3 colorranges)
    return "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
}

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

// Activate the animation function
animate();
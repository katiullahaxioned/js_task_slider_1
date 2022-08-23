// ********************************************************************* //
// ***************** 1st sliding effect ******************************** //
// ********************************************************************* //

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var list = document.querySelector(".list");
var listItems = document.querySelectorAll(".list-items");
var bottomControl = document.querySelectorAll(".bottom-control");

var positionLeft = 0;
var percent = 100;
var listLength = listItems.length;

function slideList(positionLeft) {
  list.style.left = positionLeft + "%";
}
slideList(positionLeft);

next.addEventListener("click", function () {
	positionLeft = positionLeft - percent;
  if (positionLeft === -(percent * listLength)) {
		positionLeft = 0;
  }
	slideList(positionLeft);
	console.log(positionLeft);
});

prev.addEventListener("click", function () {
  positionLeft = positionLeft + percent;
  if (positionLeft > 0) {
    positionLeft = -(percent * (listLength - 1));
  }
  slideList(positionLeft);
	console.log(positionLeft);
});

// bottom control functionality
var a = 0;
function slideList2(a) {
	list.style.left = -a + "%";
}
slideList2(a);
bottomControl.forEach(function(Control, index) {
	Control.addEventListener('click', function() {
		a = percent * index;
		slideList2(a);
		console.log(a);
	})
})

// ********************************************************************* //
// ***************** 2nd sliding effect ******************************** //
// ********************************************************************* //

// var prev = document.querySelector(".prev");
// var next = document.querySelector(".next");
// var listItems = document.querySelectorAll(".list-items");
// var bottomControl = document.querySelectorAll(".bottom-control");

// var initialnum = 0;

// function slideList(num) {
//   for (var item of listItems) {
//     item.classList.add("display-none");
//   }
//   listItems[num].classList.remove("display-none");
// }

// slideList(initialnum);

// prev.addEventListener("click", function () {
//   var x = -1;
//   initialnum += x;
//   if (initialnum < 0) {
//     initialnum = (listItems.length - 1);
//   }
// 	slideList(initialnum);
// });

// next.addEventListener("click", function () {
// 	var y = 1;
//   initialnum += y;
//   if (initialnum === listItems.length) {
// 		initialnum = 0;
//   }
//   slideList(initialnum);
// });
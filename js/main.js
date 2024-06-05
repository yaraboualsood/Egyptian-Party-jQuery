// sidebar animation
let sideBarInnerWidth = $(".sideBar").innerWidth()
$("aside").css({ left : -sideBarInnerWidth})

$(".openIcon").click(function() {
    $("aside").animate({ left: 0 }, 500)
})

$(".closeIcon").click(function() {
    $("aside").animate({ left: -sideBarInnerWidth}, 500)
})

//singer dropdown
$(".singerContent h3").click(function() {
    $(this).next().slideToggle()

    $(".singerContent p").not($(this).next()).slideUp()
})


//countdown
// Set the date we're counting down to
let countDownDate = new Date("Oct 25, 2024 15:00:00").getTime();


// Update the countdown every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id=row
  document.getElementById("Row").innerHTML = `
  <div class="col-md-3 text-white">
                        <div class="countdown-border">
                            <span class="days">${days} days</span>
                        </div>
                    </div>

                    <div class="col-md-3 text-white">
                        <div class="countdown-border">
                            <span class="hours">${hours} hrs</span>
                        </div>
                    </div>

                    <div class="col-md-3 text-white">
                        <div class="countdown-border">
                            <span class="minutes">${minutes} mins</span>
                        </div>
                    </div>

                    <div class="col-md-3 text-white">
                        <div class="countdown-border">
                            <span class="seconds">${seconds} secs </span>
                        </div>
                    </div>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Row").innerHTML = "EXPIRED";
  }
}, 1000);



//textarea character remaining
$("textarea").keyup(function (){ 
    let myLength = $(this).val().length

    $("#char").text(
        100 - myLength <=0 ? "0" : 100-myLength
    )
});
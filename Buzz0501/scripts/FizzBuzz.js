//Background
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
    var matrix = "YouHaveTOLearnHTMLAndJavaScriptAndCSSYouHaveToBeAGoodStudentToBeGoodPerson";
matrix = matrix.split("");
    var font_size = 10;
    var columns = c.width/font_size; 
    var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1; 


function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#42f457";
    ctx.font = font_size + "px arial";
    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}

setInterval(draw, 35);
// background 

//FizzBuzz create Divs
function fizzBuzz() {
    fb_div = document.getElementById('fizzBuzzOutput');
    fb_div.innerHTML = ""
    var i = 1;
    var timer = setInterval(function() {
 if(i % 3 == 0 && i % 5 == 0) {
            fb_div.innerHTML += `<div id="my${i}" class="and35"> ${i} FizzBuzz</div>`;
        } else if(i % 3 == 0) {
            fb_div.innerHTML += `<div id="my${i}" class="only3"> ${i} Fizz</div>`;
        } else if(i % 5 == 0) {
            fb_div.innerHTML += `<div id="my${i}" class="only5"> ${i} Buzz</div>`;
        } else {
            fb_div.innerHTML += `<div id="my${i}" class="other"> ${i} </div>`;
        }

        i++;
        if (i == 101) {
 
            clearInterval(timer);
        }
    

    log(timer.sort(byClass))
    },1);
    return 0;
}
// Button Controll
    $(document).ready(function(){ $("#btnFizz").click(function(){ 
    $(".other, .only5, .and35").toggle();
    document.getElementById('theDiv').innerHTML = ''
  });
});

    $(document).ready(function(){ $("#btnBuzz").click(function(){ 
    $(".other, .only3, .and35").toggle();
    document.getElementById('theDiv').innerHTML = ''
  });
});

    $(document).ready(function(){ $("#btnFizzBuzz").click(function(){ 
    $(".other, .only5, .only3").toggle();
    //Hidden message
    document.getElementById('theDiv').innerHTML = 'You can only choose one NEO'
  });
});
// Refresh button
const refreshButton = document.querySelector('.btnRefresh');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)





function fizzBuzz() {
    fb_div = document.getElementById('fizzBuzzOutput');

    // clear current contents
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
            // stop the timer
            clearInterval(timer);
        }
    

    log(timer.sort(byClass))
    },1);
    return 0;
}

    $(document).ready(function(){ $("#btnFizz").click(function(){ 
    $(".other, .only5, .and35").toggle();
  });
});

    $(document).ready(function(){ $("#btnBuzz").click(function(){ 
    $(".other, .only3, .and35").toggle();
  });
});

    $(document).ready(function(){ $("#btnFizzBuzz").click(function(){ 
    $(".other, .only5, .only3").toggle();
  });
});
 
const refreshButton = document.querySelector('.btnRefresh');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)





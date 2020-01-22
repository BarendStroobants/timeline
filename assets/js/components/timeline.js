let dayCounter = 0;
let checker = false;
let currentDates = [];

const dates = document.querySelectorAll(".dateBox");
const arrows = document.querySelectorAll(".arrows");
const today = document.querySelectorAll(".today");

setDate(dayCounter);

today[0].addEventListener('click', function (e){
        currentDates = [];
            document.querySelectorAll('.targetGraph').forEach(function(element){
                element.innerText = "";
            });
        dayCounter = 0;
        checker = false;
        setDate(dayCounter);
    });

arrows.forEach(function(element, i){
    element.addEventListener('click', function(e) {
        currentDates = [];
        document.querySelectorAll('.targetGraph').forEach(function(element){
            element.innerText = "";
        });
        switch (i) {
            case 0:
                dayCounter--;
                checker = true;
                setDate(dayCounter);
                break;

            case 1:
                dayCounter++;
                checker = true;
                setDate(dayCounter);
                break;

            default:
                break;
        }
    });
});

dates.forEach(function(element, i){
    element.addEventListener('click', function(e){
        currentDates = [];
        document.querySelectorAll('.targetGraph').forEach(function(element){
            element.innerText = "";
        });

        dates.forEach(function(element){
            currentDates.push(element.innerText);
            let template = document.querySelector('#expandedDates');
            let clone = template.content.cloneNode(true);
            element.appendChild(clone);
        });

        setDates(currentDates);
        checker = true;
        setBoxes(currentDates);



    })
});profile

let eventsButton = document.getElementById('showNextEvents');
eventsButton.addEventListener('click', function(e){

    let template = document.getElementById('eventMaker');
    let clone = template.content.cloneNode(true);
    document.getElementById('showEvents').appendChild(clone);
    document.getElementById('eventNumber').innerText = 'Event' + 0;
    document.getElementById('eventDescription').innerText = dateArray.description;
    document.getElementById('activity').innerText = dateArray.activity;
    document.getElementById('start').innerText = dateArray.start.date;
    document.getElementById('end').innerText = dateArray.end.date;

});

let eventAdd = document.getElementById('eventAdd');
eventAdd.addEventListener('click', function(){
    if (document.getElementById('eventForm')) {
        document.getElementById('eventAddTarget').innerHTML = "";
    }
    const temp = document.getElementById('eventForm');
    let clone = temp.content.cloneNode(true);
    document.getElementById('eventAddTarget').appendChild(clone);
});

function setDate () {

    dates.forEach(function(element, index){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date();

        date.setDate(date.getDate() + dayCounter);

        switch (index) {
            case 0:
                date.setDate(date.getDate() - 3);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                break;

            case 1:
                date.setDate(date.getDate() - 2);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                break;

            case 2:
                date.setDate(date.getDate() - 1);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                break;

            case 3:
                date.setDate(date.getDate());
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.getElementById('month').innerText = months[date.getMonth()];
                document.getElementById('year').innerText = date.getFullYear().toString();
                break;

            case 4:
                date.setDate(date.getDate() + 1);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                break;

            case 5:
                date.setDate(date.getDate() + 2);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                break;

            case 6:
                date.setDate(date.getDate() + 3);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                break;

            default:
                break;
        }

        currentDates[index] = element.innerText;

    });
}

function setDates (dateNumber) {

    let minuteBoxes = document.querySelectorAll('.minuteBox');
    let currentIndex = 0;

    let minuteCounter = 0;
    minuteBoxes.forEach(function(element, index) {
        if (minuteCounter > 1439) {
            minuteCounter = 0;
            currentIndex++;
        }

        element.id = currentDates[currentIndex] + minuteCounter.toString();
        minuteCounter++;
    });
}

function setBoxes (currentDates) {
    currentDates.forEach(function(element, index){
        for(let i = 0; i < 1440; i++)  {
            if (element == currentDates[0]) {
                if (i >= 0 && i < 40) {
                    let box = document.getElementById(element+i);
                    box.classList.add("travel");
                }
                if (i >= 40 && i < 400) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
                if (i >= 400 && i < 460) {
                    let box = document.getElementById(element+i);
                    box.classList.add("travel");
                }
                if (i >= 460 && i < 700) {
                    let box = document.getElementById(element+i);
                    box.classList.add("work");
                }
            }
            if (element == currentDates[1]) {
                if (i >= 0 && i < 560) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
                if (i >= 560 && i < 600) {
                    let box = document.getElementById(element+i);
                    box.classList.add("travel");
                }
                if (i >= 600 && i < 1350) {
                    let box = document.getElementById(element+i);
                    box.classList.add("work");
                }
            }
            if (element == currentDates[2]) {
                if (i >= 0 && i < 450) {
                    let box = document.getElementById(element+i);
                    box.classList.add("work");
                }
                if (i >= 450 && i < 1060) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
            }
            if (element == currentDates[3]) {
                if (i >= 0 && i < 70) {
                    let box = document.getElementById(element+i);
                    box.classList.add("hobby");
                }
                if (i >= 70 && i < 360) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
                if (i >= 360 && i < 700) {
                    let box = document.getElementById(element+i);
                    box.classList.add("hobby");
                }
            }
            if (element == currentDates[4]) {
                if (i >= 0 && i < 10) {
                    let box = document.getElementById(element+i);
                    box.classList.add("rest");
                }
                if (i >= 10 && i < 260) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
                if (i >= 260 && i < 500) {
                    let box = document.getElementById(element+i);
                    box.classList.add("work");
                }
            }
            if (element == currentDates[5]) {
                if (i >= 0 && i < 300) {
                    let box = document.getElementById(element+i);
                    box.classList.add("work");
                }
                if (i >= 300 && i < 400) {
                    let box = document.getElementById(element+i);
                    box.classList.add("work");
                }
                if (i >= 400 && i < 1230) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
            }
            if (element == currentDates[6]) {
                if (i >= 0 && i < 230) {
                    let box = document.getElementById(element+i);
                    box.classList.add("hobby");
                }
                if (i >= 230 && i < 500) {
                    let box = document.getElementById(element+i);
                    box.classList.add("travel");
                }
                if (i >= 600 && i < 960) {
                    let box = document.getElementById(element+i);
                    box.classList.add("sleep");
                }
            }
        }
    });
}

/*  let today = new Date();
  today.setDate(today.getDate() + 2);
  console.log(today);
  console.log(today.getFullYear());
  console.log(1+ today.getMonth());
  console.log(today.getDate());
  console.log(today.getFullYear()+'-'+today.getMonth()+1+'-'+today.getDate());
  console.log(dateArray.start.date.substring(0, 11));
  let todayFormatted = today.getFullYear()+'-'+today.getMonth()+1+'-'+today.getDate();
  console.log(todayFormatted);
  let targetDate = dateArray.start.date.substring(0,11);

  if (todayFormatted == todayFormatted) {
      console.log("I am true")
  }
  ///console.log("I am false"); */


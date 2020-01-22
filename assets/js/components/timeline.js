let dayCounter = 0;
let checker = false;
let currentDates = [];
let totalArray = [19, 20, 21];

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

                console.log(currentDates);
                console.log(totalArray);
                break;
            case 1:
                dayCounter++;
                checker = true;
                setDate(dayCounter);

                console.log(currentDates);
                console.log(totalArray);
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
        setBoxes(currentDates, motherfile);



    })
});

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

        currentDates[index] = parseInt(element.innerText);

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

function setBoxes (currentlyDisplayedDates, motherfile) {
     currentlyDisplayedDates.forEach(function(ele, index){
         currentlyDisplayedDates[index] = parseInt(ele);

     });

    for (let i = 0; i < 32; i++) {
        if (motherfile[i] !== undefined) {
            motherfile[i].forEach(function(element){
                for (let box = 0; box < 1440; box++){
                if (parseInt(element.date) === currentlyDisplayedDates[2]) {
                    console.log("I get through date display test");
                    console.log(element);
                    if(box >= element.startRelative && box < (element.endRelative)){
                        let banana = element['date'];
                        console.log(banana);
                        let muffin = box.toString();
                        console.log(muffin);
                        let bananaMuffin = banana+muffin;
                        console.log('this is banamuf '+bananaMuffin);
                        document.getElementById(bananaMuffin).classList.add("sleep");
                    }}
                }
            });

        }


    }



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


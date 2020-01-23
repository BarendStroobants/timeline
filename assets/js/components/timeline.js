import Chart from 'chart.js'

let dayCounter = 0;
let checker = false;
let currentDates = [];

const dates = document.querySelectorAll(".dateBox");
const arrows = document.querySelectorAll(".arrows");
const today = document.querySelectorAll(".today");

setDate(dayCounter);

function clearDates(_currentDates){
    _currentDates = [];
    document.querySelectorAll('.targetGraph').forEach(function (element) {
        element.innerText = "";
    });
}

today[0].addEventListener('click', function (e) {

    clearDates(currentDates);

    dayCounter = 0;
    checker = false;
    setDate(dayCounter);
});

arrows.forEach(function (element, i) {
    element.addEventListener('click', function (e) {

        clearDates(currentDates);

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

dates.forEach(function (element, i) {
    element.addEventListener('click', function (e) {

        clearDates(currentDates);

        dates.forEach(function (element) {
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
eventsButton.addEventListener('click', function (e) {

    let template = document.getElementById('eventMaker');
    let clone = template.content.cloneNode(true);
    document.getElementById('showEvents').appendChild(clone);


});

let eventAdd = document.getElementById('eventAdd');
eventAdd.addEventListener('click', function () {
    if (document.getElementById('eventForm')) {
        document.getElementById('eventAddTarget').innerHTML = "";
    }
    const temp = document.getElementById('eventForm');
    let clone = temp.content.cloneNode(true);
    document.getElementById('eventAddTarget').appendChild(clone);
});

function setDate() {

    dates.forEach(function (element, index) {
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

function setDates(dateNumber) {

    let minuteBoxes = document.querySelectorAll('.minuteBox');
    let currentIndex = 0;

    let minuteCounter = 0;
    minuteBoxes.forEach(function (element, index) {
        if (minuteCounter > 1439) {
            minuteCounter = 0;
            currentIndex++;
        }

        element.id = currentDates[currentIndex] + minuteCounter.toString();
        minuteCounter++;
    });
}

function setBoxes(currentlyDisplayedDates, motherfile) {
    const TOTAL_DAYS_MONTH = 32;
    const TOTAL_MINUTES_IN_DAY = 1440;
    currentlyDisplayedDates.forEach(function (ele, index) {
        currentlyDisplayedDates[index] = parseInt(ele);
    });

    for (let i = 1; i < TOTAL_DAYS_MONTH; i++) {
        if (motherfile[i] !== undefined) {
            motherfile[i].forEach(function (element) {
                currentlyDisplayedDates.forEach(function(dateElement){
                    for (let box = 0; box < TOTAL_MINUTES_IN_DAY; box++) {
                        if (parseInt(element.date) === dateElement) {
                            if (box >= element.startRelative && box < (element.endRelative)) {
                                let banana = element['date'];
                                let muffin = box.toString();
                                let bananaMuffin = banana + muffin;
                                document.getElementById(bananaMuffin).classList.add(element.activity);
                            }
                        }
                    }
                })

            });
        }
    }
}

const dataMaker = document.getElementById('showChart');
dataMaker.addEventListener('click', function(){
    const temp = document.getElementById('data');
    let clone = temp.content.cloneNode(true);
    document.getElementById('dataTarget').appendChild(clone);
    let canvas = document.getElementById('pieChart');
    makeChart(canvas);

});

function makeChart (canvas) {
    var ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Study', 'Sleep', 'Rest', 'Travel', 'Hobby', 'Work'],
            datasets: [{
                label: 'Type of Event',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
    });

}

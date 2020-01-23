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
        setBoxes(motherfile);


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
let temp = [];
let homemadeDateObject = {'date': 0, 'month': 0, 'year': 0};
let numberMonth = 0;
    dates.forEach(function (element, index) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const reverter = {'January': 1, 'February': 2};
        let date = new Date();
        let year = date.getFullYear();
        date.setDate(date.getDate() + dayCounter);

        switch (index) {
            case 0:
                date.setDate(date.getDate() - 3);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
                break;

            case 1:
                date.setDate(date.getDate() - 2);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
                break;

            case 2:
                date.setDate(date.getDate() - 1);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
                break;

            case 3:
                date.setDate(date.getDate());
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());

                document.getElementById('month').innerText = months[date.getMonth()];
                document.getElementById('year').innerText = date.getFullYear().toString();

                break;

            case 4:
                date.setDate(date.getDate() + 1);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
                break;

            case 5:
                date.setDate(date.getDate() + 2);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
                break;

            case 6:
                date.setDate(date.getDate() + 3);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
                document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
                break;

            default:
                break;
        }

        currentDates[index] = parseInt(element.innerText);
        temp[index] = homemadeDateObject = {'date': parseInt(element.innerText), 'month': numberMonth, 'year': year};


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

let totals = {
    sleep: 0,
    hobby: 0,
    study: 0
};
function setBoxes(motherfile) {
    const TOTAL_MINUTES_IN_DAY = 1440;
    const currentSelectedDates = document.querySelectorAll('.dateNumber');

    console.log(document.querySelectorAll('.dateNumber'));
    console.log(motherfile);
    motherfile.forEach(function(userDateEvents) {
        currentSelectedDates.forEach(function(dateNumbersDisplayed){
                if (userDateEvents.date === parseInt(dateNumbersDisplayed.getAttribute('data-day')) &&
                    userDateEvents.month === parseInt(dateNumbersDisplayed.getAttribute('data-month')) &&
                    userDateEvents.year === parseInt(dateNumbersDisplayed.getAttribute('data-year'))) {
                    console.log("yes one 25");
                    console.log(userDateEvents);
                    for (let box = 0; box < TOTAL_MINUTES_IN_DAY; box++) {
                            if (box >= userDateEvents.startRelative && box < (userDateEvents.endRelative)) {
                                let banana = userDateEvents['date'];
                                let muffin = box.toString();
                                let bananaMuffin = banana + muffin;
                                document.getElementById(bananaMuffin).classList.add(userDateEvents.activity);
                            }

                    }
                }
        });

    });
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

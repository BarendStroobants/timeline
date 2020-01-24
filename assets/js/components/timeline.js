import Chart from 'chart.js'

let dayCounter = 0;
let checker = false;
let currentDates = [];
let totalMinuteData = {
    "sleep": 0,
    "work": 0,
    "travel": 0,
    "study": 0,
    "eat": 0,
    "hobby": 0,
    "wash": 0,
    "rest": 0,
};

const dates = document.querySelectorAll(".dateBox");
const arrows = document.querySelectorAll(".arrows");
const today = document.querySelectorAll(".today");
const eventsButton = document.getElementById('showNextEvents');
const eventAdd = document.getElementById('eventAdd');
const dataMaker = document.getElementById('showChart');

setDate(dayCounter);


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
                showMinutesGraphic();
                break;

            case 1:
                dayCounter++;
                checker = true;
                setDate(dayCounter);
                showMinutesGraphic();
                break;

            default:
                break;
        }

        e.target.style.textShadow = "0 0 20px orange";

        // reset the color after a short delay
        setTimeout(function() {
            e.target.style.textShadow = "";
        }, 500);
    }, false);

});

dates.forEach(function (element, i) {
    element.addEventListener('click', function (e) {
        showMinutesGraphic();

    })
});


eventsButton.addEventListener('click', function (e) {
    if (document.getElementById('eventMaker')) {
        document.getElementById('showEvents').innerHTML = "";
    }
    let template = document.getElementById('eventMaker');
    let clone = template.content.cloneNode(true);
    document.getElementById('showEvents').appendChild(clone);


});


eventAdd.addEventListener('click', function () {
    if (document.getElementById('eventForm')) {
        document.getElementById('eventAddTarget').innerHTML = "";
    }
    const temp = document.getElementById('eventForm');
    let clone = temp.content.cloneNode(true);
    document.getElementById('eventAddTarget').appendChild(clone);
});


dataMaker.addEventListener('click', function(){
    if (document.getElementById('chart')) {
        document.getElementById('dateTarget').innerHTML = "";
    }
    const temp = document.getElementById('data');
    let clone = temp.content.cloneNode(true);
    document.getElementById('dataTarget').appendChild(clone);
    let canvas = document.getElementById('pieChart');
    makeChart(canvas, totalMinuteData);

});

function setDate() {
let temp = [];
let homemadeDateObject = {'date': 0, 'month': 0, 'year': 0};
let numberMonth = 0;
    dates.forEach(function (element, index) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

function clearDates(_currentDates){
    _currentDates = [];
    document.querySelectorAll('.targetGraph').forEach(function (element) {
        element.innerText = "";
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

function showMinutesGraphic() {
    document.getElementById('showChart').style.visibility = "visible";
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
    if (document.getElementById('pieChart')) {
        makeChart(document.getElementById('pieChart'), totalMinuteData);
    }
}


function setBoxes(motherfile) {
    const currentSelectedDates = document.querySelectorAll('.dateNumber');
    totalMinuteData = {
        "sleep": 0,
        "work": 0,
        "travel": 0,
        "study": 0,
        "eat": 0,
        "hobby": 0,
        "wash": 0,
        "rest": 0,
    };
    motherfile.forEach(function(userDateEvents) {
        currentSelectedDates.forEach(function(dateNumbersDisplayed){
                if (userDateEvents.date === parseInt(dateNumbersDisplayed.getAttribute('data-day')) &&
                    userDateEvents.month === parseInt(dateNumbersDisplayed.getAttribute('data-month')) &&
                    userDateEvents.year === parseInt(dateNumbersDisplayed.getAttribute('data-year'))) {
                    totalMinuteData[userDateEvents.activity] += userDateEvents.totalMinutes;
                    let box = userDateEvents.startRelative;
                            while(box >= userDateEvents.startRelative && box < (userDateEvents.endRelative)) {
                                let banana = userDateEvents['date'];
                                let muffin = box.toString();
                                let bananaMuffin = banana + muffin;
                                document.getElementById(bananaMuffin).classList.add(userDateEvents.activity);
                                box++;
                            }
                }
        });
    });

}

function makeChart (canvas, totalMinuteData) {
    document.getElementById('studyTotal').innerText = totalMinuteData['study']+' minutes';
    document.getElementById('sleepTotal').innerText = totalMinuteData['sleep']+' minutes';
    document.getElementById('washTotal').innerText = totalMinuteData['wash']+' minutes';
    document.getElementById('travelTotal').innerText = totalMinuteData['travel']+' minutes';
    document.getElementById('hobbyTotal').innerText = totalMinuteData['hobby']+' minutes';
    document.getElementById('workTotal').innerText = totalMinuteData['work']+' minutes';
    document.getElementById('eatTotal').innerText = totalMinuteData['eat']+' minutes';
    document.getElementById('restTotal').innerText = totalMinuteData['rest']+' minutes';

    var ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Study', 'Sleep', 'Wash', 'Travel', 'Hobby', 'Work', 'Eat', 'Rest'],
            datasets: [{
                label: '7 Day Activity Totals',
                data: [totalMinuteData['study'], totalMinuteData['sleep'], totalMinuteData['wash'], totalMinuteData['travel'], totalMinuteData['hobby'], totalMinuteData['work'], totalMinuteData['eat'], totalMinuteData['rest']],
                backgroundColor: [
                    'hsla(245, 100%, 50%, 0.2)',
                    'hsla(0, 100%, 50%, 0.2)',
                    'rgba(83, 105, 43, 0.2)',
                    'hsla(300, 100%, 50%, 0.2)',
                    'hsla(50, 100%, 50%, 0.2)',
                    'hsla(180, 100%, 50%, 0.2)',
                    'hsla(125, 100%, 50%, 0.2)',
                    'rgba(128, 128, 128, 0.2)'
                ],
                borderColor: [
                    'hsla(245, 100%, 50%, 1)',
                    'hsla(0, 100%, 50%, 1)',
                    'rgba(83, 105, 43, 1)',
                    'hsla(300, 100%, 50%, 1)',
                    'hsla(50, 100%, 50%, 1)',
                    'hsla(180, 100%, 50%, 1)',
                    'hsla(125, 100%, 50%, 1)',
                    'rgba(128, 128, 128, 1)'
                ],
                borderWidth: 2
            }]
        },
    });

}

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
    currentlyDisplayedDates.forEach(function (ele, index) {
        currentlyDisplayedDates[index] = parseInt(ele);

    });

    for (let i = 0; i < 32; i++) {
        if (motherfile[i] !== undefined) {
            motherfile[i].forEach(function (element) {
                for (let box = 0; box < 1440; box++) {
                    if (parseInt(element.date) === currentlyDisplayedDates[2]) {
                        if (box >= element.startRelative && box < (element.endRelative)) {
                            let banana = element['date'];
                            let muffin = box.toString();
                            let bananaMuffin = banana + muffin;
                            document.getElementById(bananaMuffin).classList.add("sleep");
                        }
                    }
                }
            });
        }
    }
}
let dayCounter = 0;
const dates = document.querySelectorAll(".dateBox");
const arrows = document.querySelectorAll(".arrows");
const today = document.querySelectorAll(".today");


setDate(dayCounter);

today.forEach(function(element){
    element.addEventListener('click', function (e){
        if (document.getElementById('target')) {
            document.getElementById('target').innerText = "";
        }
        dayCounter = 0;
        checker = false;
        setDate(dayCounter);
    });
});

arrows.forEach(function(element, i){
    element.addEventListener('click', function(e) {
        switch (i) {
            case 0:
                dayCounter--;
                checker = false;
                setDate(dayCounter);
                if (document.getElementById('target')) {
                    document.getElementById('target').innerText = "";
                }

                break;
            case 1:
                dayCounter++;
                checker = false;
                setDate(dayCounter);
                if (document.getElementById('target')) {
                    document.getElementById('target').innerText = "";
                }
                break;
            default:
                break;
        }
    });
});
let checker = false;
dates.forEach(function(element, i){
    element.addEventListener('click', function(e){
        if (checker === true) {
            dates.forEach(function(element) {
            element.removeChild(element.children[1]);
            });
            checker = false;
        }
        console.log(checker);
        dates.forEach(function(element){
            console.log(element.children[1]);
            let template = document.querySelector('#expandedDates');
            let clone = template.content.cloneNode(true);
            element.appendChild(clone);

        });
        checker = true;





    })
});

let eventAdd = document.getElementById('eventAdd');
eventAdd.addEventListener('click', function(){
    if (document.getElementById('eventForm')) {
        document.getElementById('eventAddTarget').innerHTML = "";
    }
    console.log("test");
    const temp = document.getElementById('eventForm');
    let clone = temp.content.cloneNode(true);
    document.getElementById('eventAddTarget').appendChild(clone);
});


function setDate () {
    dates.forEach(function(element, index){
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date();


        date.setDate(date.getDate() + dayCounter);
        switch (index) {
            case 0:
                date.setDate(date.getDate() - 3);
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 1:
                date.setDate(date.getDate() - 2);
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 2:
                date.setDate(date.getDate() - 1);
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();;
                break;
            case 3:
                date.setDate(date.getDate());
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();
                document.getElementById('month').innerText = months[date.getMonth()];
                document.getElementById('year').innerText = date.getFullYear().toString();
                break;
            case 4:
                date.setDate(date.getDate() + 1);
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 5:
                date.setDate(date.getDate() + 2);
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 6:
                date.setDate(date.getDate() + 3);
                element.innerHTML = days[date.getDay()] + "<br>" + date.getDate();
                break;
            default:
                break;
        }
    });
}

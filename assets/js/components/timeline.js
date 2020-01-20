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
        setDate(dayCounter);
    });
});

arrows.forEach(function(element, i){
    element.addEventListener('click', function(e) {
        switch (i) {
            case 0:
                dayCounter--;
                setDate(dayCounter);
                if (document.getElementById('target')) {
                    document.getElementById('target').innerText = "";
                }
                break;
            case 1:
                dayCounter++;
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

dates.forEach(function(element, i){
    element.addEventListener('click', function(e){
        if (document.getElementById('target')) {
            document.getElementById('target').innerText = "";
        }
        let template = document.querySelector('#expandedDates');
        let clone = template.content.cloneNode(true);
        document.getElementById("target").appendChild(clone);
        let eventAdd = document.getElementById('eventAdd');
        eventAdd.addEventListener('click', function(){
            if (document.getElementById('eventForm')) {
                document.getElementById('eventAddTarget').innerHTML = "";
            }
            const temp = document.getElementById('eventForm');
            let clone = temp.content.cloneNode(true);
            document.getElementById('eventAddTarget').appendChild(clone);
        });


    })
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

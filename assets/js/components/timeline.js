let dayCounter = 0;
let checker = false;
let currentDates = [];

const dates = document.querySelectorAll(".dateBox");
const arrows = document.querySelectorAll(".arrows");
const today = document.querySelectorAll(".today");

setDate(dayCounter);

today.forEach(function(element){
    element.addEventListener('click', function (e){
        currentDates = [];
            document.querySelectorAll('.targetGraph').forEach(function(element){
                element.innerText = "";
            });
        dayCounter = 0;
        checker = false;
        setDate(dayCounter);

    });
});

arrows.forEach(function(element, i){
    element.addEventListener('click', function(e) {
        currentDates = [];
        switch (i) {
            case 0:
                dayCounter--;
                checker = false;

                setDate(dayCounter);



                break;
            case 1:
                dayCounter++;
                checker = false;

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
            console.log("hallo");
        });
        setDates(currentDates);
        checker = true;
        currentDates.forEach(function(dateElement){
            for(let i = 0; i < 1440; i++) {
                let box = document.getElementById('1840');
                console.log(box);
                box.classList.add("sleep");
            }
        });

    })
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
        //const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date();


        date.setDate(date.getDate() + dayCounter);

        switch (index) {
            case 0:
                date.setDate(date.getDate() - 3);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();

             //   element.innerText = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 1:
                date.setDate(date.getDate() - 2);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
              //  element.innerText = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 2:
                date.setDate(date.getDate() - 1);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
             //  element.innerText = days[date.getDay()] + "<br>" + date.getDate();;
                break;
            case 3:
                date.setDate(date.getDate());

                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
             //   element.innerText = days[date.getDay()] + "<br>" + date.getDate();
                document.getElementById('month').innerText = months[date.getMonth()];
                document.getElementById('year').innerText = date.getFullYear().toString();
                break;
            case 4:
                date.setDate(date.getDate() + 1);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
             //   element.innerText = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 5:
                date.setDate(date.getDate() + 2);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
              //  element.innerText = days[date.getDay()] + "<br>" + date.getDate();
                break;
            case 6:
                date.setDate(date.getDate() + 3);
                document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
            //    element.innerText = days[date.getDay()] + "<br>" + date.getDate();
                break;
            default:
                break;
        }

        currentDates[index] = element.innerText;
        console.log(currentDates);
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




const endDate = getDateOfWeekday();

document.getElementById("end-date").innerText=getdate(endDate);

const inputs =document.querySelectorAll("input");

function getdate(str){
    let ndate = new Date(str)
    mnth = ("0" + (ndate.getMonth() + 1)).slice(-2),
    day = ("0" + ndate.getDate()).slice(-2);
  return [ndate.getFullYear(), mnth, day].join(" - ");

}

function getDateOfWeekday(){
    var days = {
        saturday: 6
    };
    var currDate = new Date();
    var currTimestamp = currDate.getTime();
    var triggerDay = days["saturday"];
    var dayMillDiff=0;
    var dayInMill = 1000*60*60*24;
  
    while(currDate.getDay()!=triggerDay){
        dayMillDiff += dayInMill;
        currDate = new Date(currDate.getTime()+dayInMill);
    }
    let saturday = new Date(currTimestamp + dayMillDiff);
    saturday.setHours(0,0,0,0)
    console.log("Next Saturday is at : "+ saturday);

    return saturday;
 
}

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    if (diff<0) return ;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24)
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor(diff%60);

}

clock();

setInterval(
    () => {
        clock()
    },1000
)

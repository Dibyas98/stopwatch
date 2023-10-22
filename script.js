let displaytime=document.querySelector(".displaytime")
let start=document.querySelector('#start'), stop=document.querySelector("#stop"), reset=document.querySelector("#reset");
let ring=document.querySelector('.ring')

let msec=0,sec=0,min=0,hou=0;

let timeid=null;
start.addEventListener('click',function(){
    ring.classList.add('circle');
    if(timeid !== null){
        clearInterval(timeid);
    }
    timeid =setInterval(starttime,10);
});

stop.addEventListener('click',function(){
    clearInterval(timeid);
    ring.classList.remove('circle');
})

reset.addEventListener('click',function(){
    clearInterval(timeid);
    displaytime.innerText='00 : 00 : 00';
    msec=0,sec=0,min=0,hou=0;
    ring.classList.remove('circle');
})



function starttime(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
            if(min==60){
                min=0;
                hou++;
            }
        }
    }

    let msecst= msec < 10 ? `0${msec}`: msec;
    let secstr= sec < 10 ? `0${sec}`: sec;
    let minstr= min < 10 ? `0${min}`: min;
    let houstr= hou < 10 ? `0${hou}`: hou;
    displaytime.textContent=`${houstr}:${minstr}:${secstr}.${msecst}`;
}
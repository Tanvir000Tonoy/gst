// coded by tanvir tonoy date [ 14 march 2024] this is a comment 

setInterval(()=>{
    let FinalDate = new Date("April 27,2024 11:00").getTime()/(1000*60*60);
    let PresentDate = new Date().getTime()/(1000*60*60);

    let Display = (FinalDate - PresentDate ); // in hours
    let day = Display/24
    document.querySelector(".hour").innerHTML = Display.toFixed(3)
    document.querySelector(".day").innerHTML = day.toFixed(1);
    let ps = document.querySelector(".ps");
    persubject = (Display/4).toFixed(3);
    ps.innerHTML = persubject
})
let ampm=document.getElementById('ampm').innerHTML



function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours(); // hours 
    let min=addzero(dateTime.getMinutes());
    let second = addzero(dateTime.getSeconds());

    document.getElementById('mins').innerHTML = min;
    document.querySelector('#seconds').innerHTML = second;
   

    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM'
    }

    document.getElementById('hours').innerHTML = addzero(hr); 
    /* ean inga podda enda string ah mathuram ello so if
    condition ku kela podurathu thanerrror varathu */

    // we dont need this because default ah ithai thane poddu vachi irukam
    // else{
    //     ampm.innerHTML='AM'
    // }

}

function addzero(num){
  return num<10?"0"+num:num;
}
setInterval(displayTime,900);// ithalathan update aguthu 1s kulla kudutha than 
// olungana time kaddum 
//2000 endu kuduthu paar enna nadakuendu 
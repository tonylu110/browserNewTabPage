//This is onload script
//test 'https://api.iyk0.com/ecy/api.php' can or not work
//if it is working to load 'https://api.iyk0.com/ecy/api.php'
//else load 'imgs/background.png'
var i = new Image();
i.src = 'https://api.iyk0.com/ecy/api.php';
i.onload = function() {
    console.log('network is working');
    document.getElementById('background').style.backgroundImage = "url('https://api.iyk0.com/ecy/api.php')";
};
i.onerror = function() {
    console.log('network is not working');
    document.getElementById('background').style.backgroundImage = "url('imgs/background.png')";
};

//This is searchBar function
function getSearchEngine(){ //get searchEngin img
  s = document.getElementById('searchEngine').src;
  engine = s.substring(s.lastIndexOf("/")+1)
}

function onkeywords() {
  getSearchEngine(); //use getSearchEngin function
  if(event.keyCode==13) {
    var keywords = document.getElementById('keywords').value; //get keywords
    if(engine == 'google.png'){
      window.open('https://www.google.com/search?q='+keywords,'_self'); //if engine is google google to google search
    }else if(engine == 'baidu.png'){
      window.open('https://www.baidu.com/s?wd='+keywords,'_self'); //if engine is baidu to baidu search
    }else{
      window.open('https://cn.bing.com/search?q='+keywords,'_self'); //if engine is bing to bing search
    }
    
  }
}

//This is historybar function
function onBarButton(){
  document.getElementById('bar').className = 'barSel'; //change historyBar style to barSelect style
  document.getElementById('imgbefore').className = 'imgafter' //change historyBarIcon style to historyBarIconSelect style1
}

//This is historybar back function
function onBarButtonBack(){
  document.getElementById('bar').className = 'bar'; //change hidtoryBar style to barBefore style
  document.getElementById('imgbefore').className = 'imgbefore' //change historyBarIcon style to historyBayIconBefore style
}

//This is show all element function
function onShow(){
  document.getElementById('mainlink').style.display=""; //show link element
  document.getElementById('button').hidden = false; //show bottom button
  document.getElementById('history').hidden = false; //show history button
  document.getElementById('reload').hidden = false; //show reload button
  document.getElementById('cal').hidden = false; // show calculator button
  document.getElementById('hide').hidden = false; // show hide button
  document.getElementById('searchbar').style.display=""; //show searchBar button
  document.getElementById('clock').hidden = false; //show clock button
}

//This is hide all element function
function onHide(){
  document.getElementById("mainlink").style.display="none"; //hide link elemnet
  document.getElementById('button').hidden = true; //hide bottom button
  document.getElementById('history').hidden = true; //hide history button
  document.getElementById('reload').hidden = true; //hide reload button
  document.getElementById('cal').hidden = true; //hide calculator button
  document.getElementById('hide').hidden = true; //hide hide button
  document.getElementById('searchbar').style.display="none"; //hide searchBar button
  document.getElementById('clock').hidden = true; //hide clock button
}

//This is hide all element function
//if bottemButton is hide all element will hide
//else show all element
function onHideOrShow(){
  var hide = document.getElementById('button').hidden;
  if(hide == false){ 
    onHide();
    document.getElementById('hide').hidden = false; //show hide button
    document.getElementById('searchbar').style.display=""; //show searchBar element
  }else{
    onShow();
  }
}

//This is calculator function
function onCal(){
  var hide = document.getElementById('button').hidden;
  if(hide == false){
    document.getElementById('mainCal').hidden = false; //show calculator element
    onHide();
    document.getElementById('cal').hidden = false; //show calculator button
  }else{
    document.getElementById('mainCal').hidden = true; //hide calculator element
    onShow();
  }
}

//This is clock function
function getTime(){
  var time=new Date();
  var h=time.getHours();
  var m=time.getMinutes();
  var s=time.getSeconds();

  document.getElementById("time").innerHTML=h+":"+m+":"+s;
}
function onClock(){
  setInterval("getTime()",1000);
  var hide = document.getElementById('button').hidden;
  if(hide == false){
    document.getElementById('mainClock').style.display=""; //show clock element
    onHide();
    document.getElementById('clock').hidden = false; //show calculator button
  }else{
    document.getElementById('mainClock').style.display="none"; //hide clock element
    onShow();
  }
}

//change search engine
function onSearchImg(){
  var hide = document.getElementById('moreSearch').hidden;
  if(hide == true){
    document.getElementById('moreSearch').hidden = false;
  }else{
    document.getElementById('moreSearch').hidden = true;
  }
}
//click img to engine img
function onGoogle(){
  document.getElementById('moreSearch').hidden = true;
  document.getElementById('searchEngine').src = 'imgs/google.png';
}
function onBing(){
  document.getElementById('moreSearch').hidden = true;
  document.getElementById('searchEngine').src = 'imgs/bing-logo.png';
}
function onBaidu(){
  document.getElementById('moreSearch').hidden = true;
  document.getElementById('searchEngine').src = 'imgs/baidu.png';
}

// get screen width to change style
function changeStyle(){
  var screen = document.body.offsetWidth;
  console.log(screen);
  if(screen <= 813){
    document.getElementById('searchbar').style.width = '330px';
    document.getElementById('mainlink').style.width = '370px'
  }else{
    document.getElementById('searchbar').style.width = '570px';
    document.getElementById('mainlink').style.width = '610px'
  }
}

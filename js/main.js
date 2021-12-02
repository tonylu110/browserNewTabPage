//set function
function elemenetGetId(id){
  return document.getElementById(id);
}
function body(){
  return document.body;
}
function print(str){
  return console.log(str);
}

//This is onload script
//test 'https://api.iyk0.com/ecy/api.php' can or not work
//if it is working to load 'https://api.iyk0.com/ecy/api.php'
//else load 'imgs/background.png'
var i = new Image();
i.src = 'https://api.iyk0.com/ecy/api.php';
i.onload = function() {
    print('network is working');
    elemenetGetId('background').style.backgroundImage = "url('https://api.iyk0.com/ecy/api.php')";
};
i.onerror = function() {
    print('network is not working');
    elemenetGetId('background').style.backgroundImage = "url('imgs/background.png')";
};
print('▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇')
print('▇▇▇▇▇▇hello world！▇▇▇▇▇▇')
print('▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇')
print('')
print('QQ: 1848367623')
print('Twitter: @Tony_Lu110')
print('github: https://github.com/tonylu110')
print('')
print('This project link is https://github.com/tonylu110/browserNewTabPage')

//This is searchBar function
function getSearchEngine(){ //get searchEngin img
  s = elemenetGetId('searchEngine').src;
  engine = s.substring(s.lastIndexOf("/")+1)
}

function onkeywords() {
  getSearchEngine(); //use getSearchEngin function
  if(event.keyCode==13) {
    var keywords = elemenetGetId('keywords').value; //get keywords
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
  elemenetGetId('bar').className = 'barSel'; //change historyBar style to barSelect style
  elemenetGetId('imgbefore').className = 'imgafter' //change historyBarIcon style to historyBarIconSelect style1
}

//This is historybar back function
function onBarButtonBack(){
  elemenetGetId('bar').className = 'bar'; //change hidtoryBar style to barBefore style
  elemenetGetId('imgbefore').className = 'imgbefore' //change historyBarIcon style to historyBayIconBefore style
}

//This is show all element function
function onShow(){
  elemenetGetId('mainlink').style.display=""; //show link element
  elemenetGetId('button').hidden = false; //show bottom button
  elemenetGetId('history').hidden = false; //show history button
  elemenetGetId('reload').hidden = false; //show reload button
  elemenetGetId('cal').hidden = false; // show calculator button
  elemenetGetId('hide').hidden = false; // show hide button
  elemenetGetId('searchbar').style.display=""; //show searchBar button
  elemenetGetId('clock').hidden = false; //show clock button
}

//This is hide all element function
function onHide(){
  elemenetGetId("mainlink").style.display="none"; //hide link elemnet
  elemenetGetId('button').hidden = true; //hide bottom button
  elemenetGetId('history').hidden = true; //hide history button
  elemenetGetId('reload').hidden = true; //hide reload button
  elemenetGetId('cal').hidden = true; //hide calculator button
  elemenetGetId('hide').hidden = true; //hide hide button
  elemenetGetId('searchbar').style.display="none"; //hide searchBar button
  elemenetGetId('clock').hidden = true; //hide clock button
}

//This is hide all element function
//if bottemButton is hide all element will hide
//else show all element
function onHideOrShow(){
  var screenWidth = body().offsetWidth;
  var hide = elemenetGetId('button').hidden;
  if(hide == false){ 
    onHide();
    elemenetGetId('hide').hidden = false; //show hide button
    elemenetGetId('searchbar').style.display=""; //show searchBar element
    if(screenWidth <= 813){
      elemenetGetId('hide').style.marginRight = '0px';
    }
  }else{
    onShow();
    if(screenWidth <= 813){
      elemenetGetId('history').hidden = true; //hide history button
      elemenetGetId('clock').hidden = true; //hide clock button
      elemenetGetId('hide').style.marginRight = '20px';
    }
  }
}

//This is calculator function
function onCal(){
  var screenWidth = body().offsetWidth;
  var hide = elemenetGetId('button').hidden;
  if(hide == false){
    elemenetGetId('mainCal').hidden = false; //show calculator element
    onHide();
    elemenetGetId('cal').hidden = false; //show calculator button
  }else{
    elemenetGetId('mainCal').hidden = true; //hide calculator element
    onShow();
    if(screenWidth <= 813){
      elemenetGetId('history').hidden = true; //hide history button
      elemenetGetId('clock').hidden = true; //hide clock button
    }
  }
}

//This is clock function
function getTime(){
  var time=new Date();
  var h=time.getHours();
  var m=time.getMinutes();
  var s=time.getSeconds();

  elemenetGetId("time").innerHTML=h+":"+m+":"+s;
}
function onClock(){
  setInterval("getTime()",1000);
  var hide = elemenetGetId('button').hidden;
  if(hide == false){
    elemenetGetId('mainClock').style.display=""; //show clock element
    onHide();
    elemenetGetId('clock').hidden = false; //show calculator button
  }else{
    elemenetGetId('mainClock').style.display="none"; //hide clock element
    onShow();
  }
}

//change search engine
function onSearchImg(){
  var hide = elemenetGetId('moreSearch').hidden;
  if(hide == true){
    elemenetGetId('moreSearch').hidden = false;
  }else{
    elemenetGetId('moreSearch').hidden = true;
  }
}
//click img to engine img
function onGoogle(){
  elemenetGetId('moreSearch').hidden = true;
  elemenetGetId('searchEngine').src = 'imgs/google.png';
}
function onBing(){
  elemenetGetId('moreSearch').hidden = true;
  elemenetGetId('searchEngine').src = 'imgs/bing-logo.png';
}
function onBaidu(){
  elemenetGetId('moreSearch').hidden = true;
  elemenetGetId('searchEngine').src = 'imgs/baidu.png';
}

// get screen width to change style
function changeStyle(){
  var screenWidth = body().offsetWidth;
  var screenHeight = body().offsetHeight - 140;
  if(screenWidth <= 813){
    elemenetGetId('searchbar').style.width = '330px';
    elemenetGetId('mainlink').style.width = '370px';
    elemenetGetId('title').style.display = 'flex';
    elemenetGetId('title').style.width = screenWidth + 'px';
    elemenetGetId('title').style.marginTop = screenHeight + 'px'
    elemenetGetId('title').style.justifyContent = 'center';
    elemenetGetId('cal').style.marginRight = '0'
    elemenetGetId('clock').hidden = true; //hide clock button
    elemenetGetId('history').hidden = true; //hide history button
    elemenetGetId('button').style.marginBottom = -screenHeight + 'px';
    elemenetGetId('azure').hidden = true;
    elemenetGetId('ithome').hidden = true;
    elemenetGetId('chromeStore').hidden = true;
    elemenetGetId('aliyun').hidden = true;
    elemenetGetId('main').style.marginTop = '-100px';
  }else{
    elemenetGetId('searchbar').style.width = '570px';
    elemenetGetId('mainlink').style.width = '610px';
  }
}

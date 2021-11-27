var i = new Image();
i.src = 'https://api.iyk0.com/ecy/api.php';
i.onload = function() {
    console.log('正常联网');
    document.getElementById('background').style.backgroundImage = "url('https://api.iyk0.com/ecy/api.php')";
};
i.onerror = function() {
    console.log('未联网');
    document.getElementById('background').style.backgroundImage = "url('imgs/background.png')";
};

console.log(a);

function onkeywords() {
  if(event.keyCode==13) {
    var keywords = document.getElementById('keywords').value;
    window.open('https://www.google.com/search?q='+keywords,'_self');
  }
}

function onBarButton(){
  document.getElementById('bar').className = 'barSel';
  document.getElementById('imgbefore').className = 'imgafter'
}

function onBarButtonBack(){
  document.getElementById('bar').className = 'bar';
  document.getElementById('imgbefore').className = 'imgbefore'
}

function onShow(){
  document.getElementById('mainlink').style.display="";
  document.getElementById('button').hidden = false;
  document.getElementById('history').hidden = false;
  document.getElementById('reload').hidden = false;
  document.getElementById('cal').hidden = false;
}

function onHide(){
  var hide = document.getElementById('button').hidden;
  if(hide == false){
    document.getElementById("mainlink").style.display="none";
    document.getElementById('button').hidden = true;
    document.getElementById('history').hidden = true;
    document.getElementById('reload').hidden = true;
    document.getElementById('cal').hidden = true;
  }else{
    onShow();
  }
}

function onCal(){
  var hide = document.getElementById('button').hidden;
  if(hide == false){
    document.getElementById('main').style.display="none";
    document.getElementById('mainCal').hidden = false;
    document.getElementById('button').hidden = true;
    document.getElementById('hide').hidden = true;
    document.getElementById('history').hidden = true;
    document.getElementById('reload').hidden = true;
  }else{
    document.getElementById('main').style.display="";
    document.getElementById('mainCal').hidden = true;
    document.getElementById('button').hidden = false;
    document.getElementById('history').hidden = false;
    document.getElementById('reload').hidden = false;
    document.getElementById('hide').hidden = false;
  }
}

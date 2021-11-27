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
  document.getElementById('mainlink').style.display="";;
  document.getElementById('button').hidden = false;
  document.getElementById('history').hidden = false;
  document.getElementById('reload').hidden = false;
}

function onHide(){
  var hide = document.getElementById('button').hidden;
  if(hide == false){
    document.getElementById("mainlink").style.display="none"
    document.getElementById('button').hidden = true;
    document.getElementById('history').hidden = true;
    document.getElementById('reload').hidden = true;
  }else{
    onShow();
  }
}

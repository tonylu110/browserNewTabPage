function onkeywords() {
    if(event.keyCode==13) {
      var keywords = document.getElementById('keywords').value;
      window.open('https://www.google.com/search?q='+keywords,'_self');
    }
  }
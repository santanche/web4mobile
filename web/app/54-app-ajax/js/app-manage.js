function loadDetails() {
  var xhr = new XMLHttpRequest();
  
  xhr.open("GET", "detail-pachucephalosaurus.xml", true);
  
  xhr.onreadystatechange = function contentLoaded() {
     if (this.readyState === this.DONE) {
        var details = xhr.responseXML;
        // var img = details.querySelector("#aplication-block").src;
        alert(details.src);
     }
  }
  
  xhr.send();
}
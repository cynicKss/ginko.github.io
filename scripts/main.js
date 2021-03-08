let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/银杏.jfif') {
      myImage.setAttribute('src', 'image/银杏2.jfif');
    } else {
      myImage.setAttribute('src', 'image/银杏.jfif');
    }
}
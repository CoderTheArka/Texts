


const firebaseConfig = {
    apiKey: "AIzaSyDOZSgG2dSlNXufrlBjn3RWXMzwWW0mmrs",
    authDomain: "whatsapp-2474e.firebaseapp.com",
    databaseURL: "https://whatsapp-2474e-default-rtdb.firebaseio.com",
    projectId: "whatsapp-2474e",
    storageBucket: "whatsapp-2474e.appspot.com",
    messagingSenderId: "503162150320",
    appId: "1:503162150320:web:438ac7169985d167634a75",
    measurementId: "G-SRYCRP6RQZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var ImgName , ImgUrl;
  var files = [];
  var reader = new FileReader();

function dod(e){
    var input = document.createElement('input');
    input.type = 'file';

   input.onchange = e => {
    console.log('working');
      files = e.target.files;
      reader = new FileReader();
      reader.onload = function(){
        var url = reader.result;
        document.getElementById('imagePreview').style.backgroundImage = `url(${url})`;
        console.log(reader.result);

      }
      reader.readAsDataURL(files[0]);
      console.log(files[0]);
   }
  input.click();
}

function updateImage(){
 var UploadTask = firebase.storage().ref('ProfilePhoto/'+localStorage.getItem('forphoto')+'.png').put(files[0]);
 UploadTask.on('state_changed' , function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    alert(progress+'% '+"Upload Process" );

 },
 function(error){
confirm(error);
alert('Unsuccesfull To Save.')
window.location = 'index.html';

 },

 function(){
  UploadTask.snapshot.ref.getDownloadURL().then(function(url){
   ImgUrl = url;
   localStorage.setItem('dd',url);
  });
alert('Wait For Five Min.')
setTimeout(function(){
    firebase.database().ref('Image/').child(localStorage.getItem('forphoto')).update({ 
      NAME:localStorage.getItem('forphoto'),
      LINK:localStorage.getItem('dd')
     });
     localStorage.removeItem('dd');
     alert('succesfull');
     alert('Redirecting');

     setTimeout(function(){
      window.location = 'index.html';
     },1000)

  },5000);
 }
 );
}
function remove(){
  localStorage.removeItem('dd');
localStorage.removeItem('forphoto');
}
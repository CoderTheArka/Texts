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


   
  document.addEventListener('keypress', (event)=>{

    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    // 13 points the enter key
    if(keyCode === 13) {
   

      console.log('Pass');
    if(localStorage.getItem(document.getElementById('my-3').value) != document.getElementById('my-3').value)
    {
      if(document.getElementById('my-3').value != ''){
        var dd =  firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
     dd.once('value', function(sd){
     var data = sd.val();
     var name = data.NAME;
     localStorage.setItem('Verify',name);
     console.log(name + 'Add');
     }); 
     console.log(document.getElementById('my-3').value);
     console.log(localStorage.getItem('Verify'));
     setTimeout(function(){
      if(localStorage.getItem('Verify') == document.getElementById('my-3').value){
        alert('I am Sorry But We can not add yourself');
       }else{
  
        alert('Processing We are checking if user exsists');
        var red = firebase.database().ref('Searched Box/').child(document.getElementById('my-3').value);
        red.once('value',function(get_info){
        var data = get_info.val();
        var NAME = data.NAME;
        var EMAIL = data.EMAIL;
        localStorage.setItem('person',NAME);
  
        });
        setTimeout(function(){
        var xyz = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
        xyz.once('value',function(d){
         var data = d.val();
         var NAME = data.NAME;
         localStorage.setItem('Name',NAME);
         console.log(NAME);
        });
        setTimeout(function(){
         alert('Please Wait A While');
         if(localStorage.getItem('person') != null || localStorage.getItem('person') != undefined)
         {
           alert('User Found Wait For Some Min.');
           var lsname   = localStorage.getItem('person');
   ;
            firebase.database().ref('FOR/').child(lsname).update({
   
            });
            firebase.database().ref('FOR/').child(localStorage.getItem('Name')).update({
   
            });
            firebase.database().ref('FOR/').child(lsname).push({
            SEACHED_FOR : localStorage.getItem('Name'),
            });
            firebase.database().ref('FOR/').child(localStorage.getItem('Name')).push({
             SEACHED_FOR : document.getElementById('my-3').value,
           
             });
             alert('We added The Following user;')
           localStorage.removeItem('person');
           localStorage.removeItem('Name');
           localStorage.removeItem('Verify');
           window.location('main.html');
   
         }
         else
         {
           alert('USER DOSE NOT EXSIST');
           localStorage.removeItem('person');
           localStorage.removeItem('Name');
           localStorage.removeItem('Verify');
         }
        },3000)
  
       
        },2000);
  
  
       }
  
     },5000)


        
      }else{
        return false;
      }
    }else{
      alert('User Is Already Added');
    }
    
    }
  
  });



  function getData() { 
    var ref = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
    ref.once('value',function(hf){
    var data = hf.val();
    var NAME = data.NAME;
    localStorage.setItem('dbv',NAME);
    console.log(NAME);
    });
    

    
    
    firebase.database().ref("FOR/").child(localStorage.getItem('dbv')).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    console.log('Started');
      var firebase_message_id = childKey;
    var message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var NAME = message_data['SEACHED_FOR'];
var a_part = "<a class='list-group-item list-group-item-action border-0 bocx'>";
var div_start = "<div class='d-flex align-items-start'>";
var img_tag = '<img id='+NAME+"Hello"+'  src="f.png" class="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40">';
var div_1_start = '<div id='+NAME+' onclick="display(this.id)" onmousemove="pic(this.id)" style="color: black;" class="flex-grow-1 ml-3">';
var name2 = NAME;
var mem_start1 = '<div color: "black;" class="small"><span class="fas fa-circle chat-online"></span>Member</div>'
var div_1_end = '</div>';
var div_end = '</div>';
var a_end = '</div>';
var hr = '<hr>';

document.getElementById('output').innerHTML += a_part + div_start + img_tag + div_1_start + name2 + mem_start1 + div_1_end + div_end + a_end + hr;



//End code
 } });  }); };

  getData();



 function pic(name){
  localStorage.setItem(name,name);
  console.log(name);
  var abc = firebase.database().ref('Image/').child(name);
  abc.once('value',function(info){
  var datak = info.val();
  var PhotoLink = datak.LINK  ;
  document.getElementById(name+'Hello').src = PhotoLink;
});
 }
 
 function removed()
 {
  localStorage.removeItem('person');
  localStorage.removeItem('Name');
  localStorage.removeItem('Verify');
  localStorage.removeItem('Chat');
  localStorage.removeItem('SenderPhoto');
  localStorage.removeItem('ReciverPhoto');

 }






function display(dd)
{
  alert('You Clicked ' + dd);
  document.getElementById("sssa").innerHTML = ""; 
  document.getElementById('ssd').style.display = 'none';
  document.getElementById('mainsss').style.display = 'block';
var ref = firebase.database().ref('Image/').child(dd);
ref.once('value',function(ddf){
var data = ddf.val();
document.getElementById('profile').src = data.LINK;
});
  document.getElementById('ssda').innerHTML = dd;
  localStorage.setItem('Chat',dd);


  function s() { 
    var ref = firebase.database().ref('Image/').child(localStorage.getItem('dbv'));
    ref.once('value',function(hf){
    var data = hf.val();
    var NAME = data.LINK;
    localStorage.setItem('SenderPhoto',NAME);


    });
    var ref = firebase.database().ref('Image/').child(dd);
    ref.once('value',function(hfj){
    var data1 = hfj.val();
    var NAMEy = data1.LINK;
    localStorage.setItem('ReciverPhoto',NAMEy);


    });
    firebase.database().ref("WhatsappChat/").child(localStorage.getItem('dbv')+dd).on('value', function(snapshot) { document.getElementById("sssa").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    console.log('Started');
      var firebase_message_id = childKey;
    var message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var SENDER = message_data['SENDER'];
var MESSAGE = message_data['MESSAGE'];

if (SENDER == localStorage.getItem('dbv')){
  var ss = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div>'+MESSAGE+'</div></div>';
  document.getElementById("sssa").innerHTML += ss;
}else{
  var ddfg = ' <div class="chat-message-left pb-4"><div>  <img src="'+localStorage.getItem('ReciverPhoto')+'" class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3"><div class="font-weight-bold mb-1">'+dd+'</div>'+MESSAGE+'</div></div>';
  document.getElementById("sssa").innerHTML += ddfg;
}





//End code
 } });  }); };
  s();
}




function dd(){
  alert('Welcome.');
  setTimeout(function(){
    getData();
  },5000)

} 
 






 function send(){
  var input = document.getElementById('input').value;
  document.getElementById('input').innerHTML = '';
  console.log(input);

if ( input != ''){
  if(document.getElementById('ssda').value != '')
  {
    var get = localStorage.getItem('Chat');
    console.log(get);
    console.log(document.getElementById('ssda').value);
    console.log(localStorage.getItem('dbv'));
   firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({

   });
   firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({

   });
   firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
   SENDER:localStorage.getItem('dbv'),
   MESSAGE:input
   });
   firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
    SENDER:localStorage.getItem('dbv'),
    MESSAGE:input
   });
   alert('Messgae Sended');
 
   input = '';
  }
  else{
    alert('We ran out of a error');
    window.location = 'index.html';
  }
}
else 
{
  alert('Message Box Is Empty');
}

 }



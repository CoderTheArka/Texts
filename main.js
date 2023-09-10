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

//THIS IS THE SIGN UP PART

function createAccount(){
    var r_name = document.getElementById('r_username').value;
    var r_email = document.getElementById('r_email').value;
    var r_password = document.getElementById('r_password').value;
    var r_cpassword = document.getElementById('r_con_password').value;
    var semail = r_email
    var sname   = semail.substring(0, semail.lastIndexOf("@"));
    var sdomain = semail.substring(semail.lastIndexOf("@") +1);
    

    if(r_email != sdomain){
        if(r_name != '' && r_email != '' && r_password != '' && r_cpassword != ''){
            if(r_cpassword == r_password){
             alert('Processing Your Request .....')
             var ref = firebase.database().ref('Whatsapp_User/').child(sname);
             ref.once('value' , function(get_me){
             var data = get_me.val();
             localStorage.setItem('check' , data.EMAIL);
             
             });
             setTimeout(function(){
                var check = localStorage.getItem('check');
                console.log(check);
                localStorage.removeItem('check');
                if (check == undefined || check == null  || check == ""){
                
                document.getElementById('hide').value = 'ok';
                }else{
                    alert('EMAIL ALREADY EXSISTS SORRY BUT WE CANT ACCEPT THIS REQUEST');
                    window.location = 'index.html';
                }
             },2000);
            
         setTimeout(function(){
             if(document.getElementById('hide').value == 'ok'){
                 firebase.database().ref('Whatsapp_User/').child(sname).update({
                     NAME:r_name,
                     EMAIL:r_email,
                     PASSWORD:r_password
                     });
                     firebase.database().ref('Searched Box/').child(r_name).update({
                        NAME:r_name,
                        EMAIL:r_email,
                        PASSWORD:r_password,
                        });

                    
             alert('ACCOUNT CREATED SUCCESFULL HURRAY !!!');
             localStorage.setItem('forphoto',sname);
             window.location = 'photo.html';
             }else{
                 console.log('SYSTEM RUN OUT OF AN ERROR  ..... ERROR ......')
             }
     
         },8000);
     
         }else{
             alert('Password Did not Match.')
             r_password = "";
             r_cpassword="";
            }
         }else{
             alert('Some Strings Are Missing.')
         }
    }else{
       alert('Enter Valid Email Please.')
    }
    
}

// SIGN UP PART END.

//SIGN IN PART START.
function login()
{
    alert('PLEASE WAIT 8 SECOND.');

    var lemail = document.getElementById('lemail').value;
    var lpassword = document.getElementById('lpassword').value;
    var lsemail = lemail
    var lsname   = lsemail.substring(0, lsemail.lastIndexOf("@"));
    var lsdomain = lsemail.substring(lsemail.lastIndexOf("@") +1);
    if(lemail != lsdomain){
        if(lemail != '' && lpassword != ''){

            var ldef = firebase.database().ref('Whatsapp_User/').child(lsname);
            ldef.once('value' , function(lhjkd){
            var data = lhjkd.val();
            var email = data.EMAIL;
            var password = data.PASSWORD;
            localStorage.setItem('ss',email);
            localStorage.setItem('dff',password);
            if(email == lemail && password == lpassword){

            alert('SUCCESFULL.');

            localStorage.setItem('information', lsname);
            setTimeout(function(){
                window.location = 'main.html';
            },2000);
          

            localStorage.removeItem('ss');
            localStorage.removeItem('dff');
            }else{
                localStorage.removeItem('ss');
                localStorage.removeItem('dff');
                alert('INCORRECT PASSWORD TRY AGAIN.')
                window.location = 'index.html';
            }
            });
    
    
            setTimeout(function(){
                console.log('Stag 2');
                var checkpp = localStorage.getItem('ss');
                var checkname = localStorage.getItem('dff')
                console.log(checkname);
                console.log(checkpp);
                if(checkpp == undefined || checkpp == null || checkname == undefined || checkname == null){
                alert('INCORRECT EMAIL ADDRESS PLEASE CHECK IT.');
                window.location = 'index.html';
                localStorage.removeItem('ss');
                localStorage.removeItem('dff');
                }else{
                    alert('SOMETHING WENT WRONG FROM OUR SIDE.');
                    window.location = 'index.html';
                    localStorage.removeItem('ss');
                    localStorage.removeItem('dff');
                }
                },8000);
    
        }else{
            alert('SOME STRINGS ARE MISSING.')
        }
    
    }else{
        alert('Enter Valid Email.');
        window.location = 'index.html';
    }
    

}

//SIGN IN PART END.
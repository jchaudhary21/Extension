document.addEventListener('DOMContentLoaded', function() {
    var checkButton1 = document.getElementById('test_button1');   
    var checkButton3 = document.getElementById('test_button3'); 
    var checkform    = document.getElementById('option_select');
    checkButton1.addEventListener('click', function() {
        option_dekhle();
    }, false);

    checkButton3.addEventListener('click', function() {
        submit_form();
       }, false);

       checkform.addEventListener('change', function() {
        display();
        }, false);

  }, false);


  function button_test(){
    alert("Hey your button is working!hola");
  }


  function display(){ 

    var option_selected =  document.getElementById("option_select").value;
    if (option_selected == "Join New Meet"){
        document.getElementById("test_button2").style.display = 'block';
        document.getElementById("test_button3").style.display = 'none';
        document.getElementById("test_button1").style.display = 'none';
        document.getElementById("form").style.display = 'none';
     
    }
    else if(option_selected == "Join through key"){
        document.getElementById("test_button3").style.display = 'block';
        document.getElementById("test_button2").style.display = 'none';
        document.getElementById("test_button1").style.display = 'none';
        document.getElementById("form").style.display = 'block';
    }
    else{
  
        document.getElementById("test_button3").style.display = 'none';
        document.getElementById("test_button2").style.display = 'none';
        document.getElementById("test_button1").style.display = 'block';
        document.getElementById("form").style.display = 'none';

    }
 }

 function option_dekhle(){

    var value = Math.floor(Math.random() * 3) + 1 ;
    if(value ==1 ){
     alert("OPTION to dekh le vro !!")
    }
    if(value ==2 ){
     alert("chu chu hai kya saale option to select kr ")
    }
    if(value ==3 ){
     alert("L hai kya bc option select kr ")
    }
}

function submit_form(){

    var form_content =document.getElementById("form").elements.item(0).value;
    document.getElementById("join_key").href = "https://meet.google.com/" + form_content ;
}
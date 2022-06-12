localStorage.setItem("count_value","0");

document.addEventListener('DOMContentLoaded', function() {
    var checkButton1 = document.getElementById('test_button1');   
    var checkButton3 = document.getElementById('test_button3'); 
    var checkform    = document.getElementById('option_select');
    var checkimage   = document.getElementById('image_click');   

    checkButton1.addEventListener('click', function() {
        option_dekhle();
    }, false);

    checkButton3.addEventListener('click', function() {
        submit_form();
       }, false);

    checkform.addEventListener('change', function() {
        display();
        }, false);
    
    checkimage.addEventListener('click', function() {  
       var count = parseInt(localStorage.getItem("count_value"))+1;
       localStorage.setItem("count_value", count.toString());
       change_background(count);
       
        }, false);
    

  }, false);


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

   alert("Please Select Option")
}

function submit_form(){

    var form_content =document.getElementById("form").elements.item(0).value;
    document.getElementById("join_key").href = "https://meet.google.com/" + form_content ;
}


function change_background(count_value){

   if(count_value%2==0){
    change_background_1();
   }
   else{
    change_background_2()
   }


}

function change_background_1(){

    document.body.style.backgroundImage= "url('Images/default_background.gif')";
    document.getElementById("test_button1").style.backgroundImage = 'linear-gradient(to right, #ab23f9 0%, #7930a3  51%, #060506  100%)';
    document.getElementById("test_button1").style.transition =      '0.5s';
    document.getElementById("test_button1").style.backgroundSize =  '200% auto' ;
    document.getElementById("test_button1").style.backgroundColor = 'white';            
    document.getElementById("test_button1").style.borderRadius =    '5px';
    document.getElementById("test_button2").style.backgroundImage = 'linear-gradient(to right, #ab23f9 0%, #7930a3  51%, #060506  100%)';
    document.getElementById("test_button2").style.transition =      '0.5s';
    document.getElementById("test_button2").style.backgroundSize =  '200% auto' ;
    document.getElementById("test_button2").style.backgroundColor = 'white';            
    document.getElementById("test_button2").style.borderRadius =    '5px';
    document.getElementById("test_button3").style.backgroundImage = 'linear-gradient(to right, #ab23f9 0%, #7930a3  51%, #060506  100%)';
    document.getElementById("test_button3").style.transition =      '0.5s';
    document.getElementById("test_button3").style.backgroundSize =  '200% auto' ;
    document.getElementById("test_button3").style.backgroundColor = 'white';            
    document.getElementById("test_button3").style.borderRadius =    '5px';


}

function change_background_2(){

    document.body.style.backgroundImage= "url('Images/background_image_1.webp')";
    document.getElementById("test_button1").style.backgroundImage = 'linear-gradient(to right, #5d72cc 0%, #294c77  51%, #4263af  100%)';
    document.getElementById("test_button1").style.transition =      '0.5s';
    document.getElementById("test_button1").style.backgroundSize =  '200% auto' ;
    document.getElementById("test_button1").style.backgroundColor = 'white';            
    document.getElementById("test_button1").style.borderRadius =    '5px';
    document.getElementById("test_button2").style.backgroundImage = 'linear-gradient(to right, #5d72cc 0%, #294c77  51%, #4263af  100%)';
    document.getElementById("test_button2").style.transition =      '0.5s';
    document.getElementById("test_button2").style.backgroundSize =  '200% auto' ;
    document.getElementById("test_button2").style.backgroundColor = 'white';            
    document.getElementById("test_button2").style.borderRadius =    '5px';
    document.getElementById("test_button3").style.backgroundImage = 'linear-gradient(to right, #5d72cc 0%, #294c77  51%, #4263af  100%)';
    document.getElementById("test_button3").style.transition =      '0.5s';
    document.getElementById("test_button3").style.backgroundSize =  '200% auto' ;
    document.getElementById("test_button3").style.backgroundColor = 'white';            
    document.getElementById("test_button3").style.borderRadius =    '5px';


}


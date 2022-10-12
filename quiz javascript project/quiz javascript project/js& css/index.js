
function submitForm(e){
    e.preventDefault();
    let name=document.forms["welcome_form"]["name"].value;
//store player name
    sessionStorage.setItem("name",name);
    window.location.href="quiz.html";
   

}











    
    
  

   


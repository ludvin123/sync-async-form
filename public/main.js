$(document).ready(function (){
 $('input[type="submit"]').on("click", function(event){
   event.preventDefault();
   var first_name = $('#first_name').val(); // [first_name]
   var last_name = $('#last_name').val(); // [last_name]
   var gender = $('input[name="gender"]:checked').val(); // []
   var interest = $('input[name="interest"]:checked'); // [1,2]
   var interests = new Array();

   for (var i = 0; i < interest.length; i++) {
     var temp_interest = interest[i];

    interests.push(temp_interest.value);
   }
  /* console.log(interest.val());*/
 var payload = {
   'first_name':first_name,
   'last_name':last_name,
   'gender':gender ,
   'interest':interests
 }

 $.post("/find", payload);
 $.get("/find"),payload);


 /*$.post('find.html',payload);
 $.get('find.html',payload);*/
 });
});

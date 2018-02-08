

$(document).ready(function() {
  $("#nameForm").submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    $('#nameForm').hide();
    $('#nameResult').prepend('<p>Thank you, ' + name + ' , now enter your Haiku to see if it checks out!!</p>');
  });
});

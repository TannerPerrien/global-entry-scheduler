$(function() {
  $('#signup').click(function() {
    $('#signupContainer').collapse('hide');
  });
  
  $('#form').on('submit', function(e) {
    e.preventDefault();
    $.post('https://stark-lake-20962.herokuapp.com/save', $(this).serialize(), function() {
      $('#formContainer').collapse('hide');
      $('#formComplete').collapse('show');
    });
  });
});

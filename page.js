var host = 'globalentryscheduler.com';
if (window.location.host == host && window.location.protocol != 'https:') {
  window.location.protocol = 'https:';
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88872400-1', 'auto');
ga('send', 'pageview');

$(function() {
  $('#signup').click(function() {
    $('#signupContainer').collapse('hide');
  });
  
  $('#formSubscribe').on('submit', function(e) {
    e.preventDefault();
    var url = 'https://stark-lake-20962.herokuapp.com/subscribe';
    url = 'http://localhost:5000/subscribe';
    var data = $(this).serialize();
    var res = Promise.resolve($.post(url, data)).then(function(res) {
      if (res.error) return showError(res.error);
      $('#subscribeContainer').collapse('hide');
      $('#subscribeComplete').collapse('show');
    }).catch(function(err) {
      showError(err);
    });
  });
  
  function showError(err) {
    $('#error-container').show();
    $('#error-msg').text(err);
  }
  
  $('#formUnsubscribe').on('submit', function(e) {
    e.preventDefault();
    var url = 'https://stark-lake-20962.herokuapp.com/unsubscribe';
    url = 'http://localhost:5000/unsubscribe';
    var data = $(this).serialize();
    var res = Promise.resolve($.post(url, data)).then(function(res) {
      $('#unsubscribeContainer').collapse('hide');
      $('#unsubscribeComplete').collapse('show');
    }).catch(function(err) {
      $('#unsubscribeContainer').collapse('hide');
      $('#unsubscribeComplete').collapse('show');
    });
  });
});


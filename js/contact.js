/*
Function to send a message, requires jQuery
*/
'use strict';

$(function() {
  var ajaxData = null;

  $('#contact-error').hide();
  $('#contact-success').hide();

  $('#contact-form').on('submit', function(e) {
    e.preventDefault();

    //Set data
    var name = $('#name').val();
    var surname = $('#surname').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    var apiUrl = 'contact.php/';
    ajaxData = {
      type: 'POST',
      url: apiUrl,
      contentType: 'application/json',
      data: JSON.stringify({
        subject: subject,
        from:email,
        name: name + " " + surname,
        message: message,
        email: email
      })
    };

    ajaxData.success = function() {
      $('#name').val('');
      $('#surname').val('');
      $('#email').val('');
      $('#subject').val('');
      $('#message').val('');
      $('#contact-success').show();
      $('#contact-form input[type="submit"]').val('Gönder');
    };

    ajaxData.error = function() {
      $('#contact-error').show();
      $('#contact-form input[type="submit"]').val('Gönder');
    };

    $('#contact-form input[type="submit"]').val('Gönderiliyor ...');
    $('#contact-success').hide();
    $('#contact-error').hide();
    $.ajax(ajaxData);
  });

  $('img.close').on('click', function() {
    $('#contact-error').hide();
    $('#contact-success').hide();
  });
});

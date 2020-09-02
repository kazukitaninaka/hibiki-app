$(document).ready(function () {
  $('#passwordConfirm').click(function () {
    const pw = $('#finalPassword').val();
    if (pw === '2010hibiki') {
      $('#submit').removeAttr('disabled');
    } else {
      alert('パスワードが違います');
    }
  });
});

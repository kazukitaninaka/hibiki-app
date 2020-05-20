$(document).ready(function () {
  $('#passwordConfirm').click(function () {
    const pw = $('#finalPassword').val();
    if (pw === 'yumemigokochi') {
      $('#submit').removeAttr('disabled');
    } else {
      alert('パスワードが違います');
    }
  });
});

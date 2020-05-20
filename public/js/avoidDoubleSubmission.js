const avoidDoubleSubmission = () => {
  const submitBtn = document.querySelector('#submit');
  if (submitBtn.disabled) {
    return false;
  } else {
    submitBtn.disabled = true;
    return true;
  }
};

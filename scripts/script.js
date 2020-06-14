function changeBackground () {

  if ($('.theme-toggle').is(":checked")) {
    $('body').css('background-color', '#2E3A4D');
    console.log("checked");
  } else {
    $('body').css('background-color', '#CB9656');
    console.log("unchecked");
  }

}

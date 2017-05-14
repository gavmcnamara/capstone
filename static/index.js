$('#names').bind('click', function() {
  $.getJSON('http://0.0.0.0:4000' + '/_get_current_photographer', {}, function(data) {
    var text1 = "";
    text1 += data.json_list[0].fname+' ';
    text1 += data.json_list[0].lname;
//    console.log(text1);
    $('#json_list').text(text1);
  });
  return false;
});


$('#home-tab').on('click', function() {
    $('.header li a').removeClass('active');
    $('#home-tab a').addClass('active');
    $('.content >').addClass('content-hidden');
    $('#home-container').removeClass('content-hidden');
});
$('#photographers-tab').on('click', function() {
    $('.header li a').removeClass('active');
    $('#photographers-tab a').addClass('active');
    $('.content >').addClass('content-hidden');
    $('#photographers-container').removeClass('content-hidden');
});
$('#customers-tab').on('click', function() {
    $('.header li a').removeClass('active');
    $('#customers-tab a').addClass('active');
    $('.content >').addClass('content-hidden');
    $('#customers-container').removeClass('content-hidden');
});
$('#contracts-tab').on('click', function() {
    $('.header li a').removeClass('active');
    $('#contracts-tab a').addClass('active');
    $('.content >').addClass('content-hidden');
    $('#contracts-container').removeClass('content-hidden');
});
$('#locations-tab').on('click', function() {
    $('.header li a').removeClass('active');
    $('#locations-tab a').addClass('active');
    $('.content >').addClass('content-hidden');
    $('#locations-container').removeClass('content-hidden');
});
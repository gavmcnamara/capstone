$('#names').append("   ").bind('click', function() {
  $.getJSON('http://0.0.0.0:4000' + '/_get_current_photographer', {}, function(data) {
    var text1 = "";
    text1 += data.json_list[0].id+') NAME: ';
    text1 += data.json_list[0].fname+' ';
    text1 += data.json_list[0].lname+' | PHONE NUMBER: ';
    text1 += data.json_list[0].phone_number+'   |            EMAIL: ';
    text1 += data.json_list[0].email+' | TIER: ';
    text1 += data.json_list[0].tier+' |  ';
    text1 += data.json_list[1].id+') NAME: ';
    text1 += data.json_list[1].fname+' ';
    text1 += data.json_list[1].lname+' | PHONE NUMBER: ';
    text1 += data.json_list[1].phone_number+'   |            EMAIL: ';
    text1 += data.json_list[1].email+' | TIER: ';
    text1 += data.json_list[1].tier+' | | ';
    text1 += data.json_list[2].id+') NAME: ';
    text1 += data.json_list[2].fname+' ';
    text1 += data.json_list[2].lname+' | PHONE NUMBER: ';
    text1 += data.json_list[2].phone_number+'   |            EMAIL: ';
    text1 += data.json_list[2].email+' | TIER: ';
    text1 += data.json_list[2].tier+' | | ';

//    console.log(text1);
    $('#json_list').text(text1);
  });
  return false;
});
$('#locations').bind('click', function() {
  $.getJSON('http://0.0.0.0:4000' + '/_get_current_location', {}, function(data) {
        var text1 = "";
        text1 += data.location_list[0].id+') | SQUARE FOOTAGE: ';
        text1 += data.location_list[0].square_feet+' | ADDRESS: ';
        text1 += data.location_list[0].address+' | PHOTOGRAPHER ID: ';
        text1 += data.location_list[0].photographers+' | ';
        text1 += data.location_list[1].id+') | SQUARE FOOTAGE: ';
        text1 += data.location_list[1].square_feet+' | ADDRESS: ';
        text1 += data.location_list[1].address+' | PHOTOGRAPHER ID: ';
        text1 += data.location_list[1].photographers+' | ';
        text1 += data.location_list[2].id+') | SQUARE FOOTAGE: ';
        text1 += data.location_list[2].square_feet+' | ADDRESS: ';
        text1 += data.location_list[2].address+' | PHOTOGRAPHER ID: ';
        text1 += data.location_list[2].photographers+' | ';
//    console.log(json_list);
    $('#location_list').text(text1);
  });
  return false;
});
$('#customers').bind('click', function() {
  $.getJSON('http://0.0.0.0:4000' + '/_get_customers', {}, function(data) {
        var text1 = "";
        text1 += data.customer_list[0].id+') | NAME: ';
        text1 += data.customer_list[0].fname+'  ';
        text1 += data.customer_list[0].lname+' | EMAIL: ';
        text1 += data.customer_list[0].email+' | PHONE NUMBER: ';
        text1 += data.customer_list[0].phone_number+' || ';
        text1 += data.customer_list[1].id+') | NAME: ';
        text1 += data.customer_list[1].fname+'  ';
        text1 += data.customer_list[1].lname+' | EMAIL: ';
        text1 += data.customer_list[1].email+' PHONE NUMBER: ';
        text1 += data.customer_list[1].phone_number+' || ';
        text1 += data.customer_list[2].id+') | NAME: ';
        text1 += data.customer_list[2].fname+'  ';
        text1 += data.customer_list[2].lname+' | EMAIL: ';
        text1 += data.customer_list[2].email+' PHONE NUMBER: ';
        text1 += data.customer_list[2].phone_number+' || ';
//    console.log(json_list);
    $('#customer_list').text(text1);
  });
  return false;
});



//$('#contracts').bind('click', function() {
//  $.getJSON('http://0.0.0.0:4000' + '/_show_contracts', {}, function(data) {
//        var text1 = "";
//        text1 += data.contract_list[0].id+': | NAME: ';
//        text1 += data.contract_list[0].fname+'  ';
//        text1 += data.contract_list[0].lname+' | ';
//        text1 += data.contract_list[0].email+' ';
//        text1 += data.contract_list[0].phone_number;
//    console.log(json_list);
//    $('#contract_list').text(text1);
//  });
//  return false;
//});
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
//$('#contracts-tab').on('click', function() {
//    $('.header li a').removeClass('active');
//    $('#contracts-tab a').addClass('active');
//    $('.content >').addClass('content-hidden');
//    $('#contracts-container').removeClass('content-hidden');
//});
$('#locations-tab').on('click', function() {
    $('.header li a').removeClass('active');
    $('#locations-tab a').addClass('active');
    $('.content >').addClass('content-hidden');
    $('#locations-container').removeClass('content-hidden');
});
// total price
var total = 0 ;

// check activities
var checkAll = $('.activities input[name="all"]');
var checkJsframeworks = $('.activities input[name="js-frameworks"]');
var checkLibs = $('.activities input[name="js-libs"]');
var checkExpress = $('.activities input[name="express"]');
var checkNode = $('.activities input[name="node"]');
var checkBuildtools = $('.activities input[name="build-tools"]');
var checkNpm = $('.activities input[name="npm"]');

//checking repetition
var m = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;

// checking repetition in validation

var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
var check6 = 0;
var checkShirt = 0;


//the page load and focus is in input name//
$(window).on('load', function(){
  $( "#name" ).focus();
  $('#colors-js-puns').hide()//hide the colors
  $('#design option:first-child').remove() //remove the first-child of design

 });
//ADD INPUT!!!//
$('#title').click(function() {
  $('.correct').remove(); //remove the checkmark in the last selected
  $( "#title option:selected" ).append('<p class="correct"> ' + "&#x2714" + ' <p>');//checkmark in the selected
  if ($( "#title option:selected" ).text() === $('#title option[value="other"]').text()) {
    $( ".shirt" ).before( '<input type="text" id="other-title" placeholder="Your Job Role" name="other-title" value="">');//Add new input!!
  }
  else {
    $( '#other-title' ).remove(); // remove the new input!
  }
});

// SHIRT AND COLOR
var i;
$('#design').click(function() {
// if selected JS PUNS
  if ($( "#design option:selected" ).text() === $('#design option[value="js puns"]').text()) {
      //hide children of heart js
      $('#color').val('cornflowerblue');
      $('#color option').hide();
    for(i = 0; i < 3; i += 1){
      $('#color option').eq(i).show();
      $('#colors-js-puns').show();
    }
    }
  // if selected JS PUNS
  else if ($( "#design option:selected" ).text() === $('#design option[value="heart js"]').text()) {
    //show children of js puns
    $('#color').val('tomato');
    $('#color option').hide();
  for(i = 3; i < 7; i += 1){
    $('#color option').eq(i).show();
    $('#colors-js-puns').show();
  }
}
});


// Activities and TOTAL
//when the user click in checkbox of activities
$('.activities').click(function() {
//remove the total history
  $('#total').remove();
//if checkall is checked
  if (checkAll.prop( "checked") === true) {
    if (m === 0){//I add one variable because I dont want repetition and with this I can check.
        m += 1;
        total += 200;//add value for this checkbox to total
      }
    } else if (checkAll.prop( "checked") === false) { //if checkall is unchecked
      if (m === 1) {
        m = 0;
        total -= 200;//remove value for this checkbox to total
        }
      }
  if (checkJsframeworks.prop( "checked") === true) {
    checkExpress.prop( "disabled", true)// I disabled the check express because if you go to js-frameworks can't go to express
    if (a === 0){//I add one variable and check with this
        a += 1; //add value to variable of repetition for use in the conditional
        total += 100;////add value for this checkbox to total
      }
    } else if (checkJsframeworks.prop( "checked") === false) { //if js-frameworks is unchecked
      if (a === 1) {//i check the state in variable of repetition
        a = 0;//I reset the variable
        total -= 100;//and remove 100 of the total because I unchecked
        checkExpress.prop( "disabled", false)//restore the express now the user can check this checkbox
        }
      }// i repeat the same behavior in the next statements
      if (checkLibs.prop( "checked") === true) {
        if (b === 0){
            b += 1;
            total += 100;
            checkNode.prop( "disabled", true)
          }
        } else if (checkLibs.prop( "checked") === false) {
          if (b === 1) {
            b = 0;
            total -= 100;
            checkNode.prop( "disabled", false)
            }
          }
      if (checkExpress.prop( "checked") === true) {
            checkJsframeworks.prop( "disabled", true)
            if (c === 0){
                c += 1;
                total += 100;
              }
            } else if (checkExpress.prop( "checked") === false) {
              if (c === 1) {
                c = 0;
                total -= 100;
                checkJsframeworks.prop( "disabled", false)
                }
              }
      if (checkNode.prop( "checked") === true) {
                    checkLibs.prop( "disabled", true)
                    if (d === 0){
                        d += 1;
                        total += 100;
                      }
                    } else if (checkNode.prop( "checked") === false) {
                      if (d === 1) {
                        d = 0;
                        total -= 100;
                        checkLibs.prop( "disabled", false)
                        }
                      }
      if (checkBuildtools.prop( "checked") === true) {
                    if (e === 0){
                        e += 1;
                        total += 100;
                      }
                    } else if (checkBuildtools.prop( "checked") === false) {
                      if (e === 1) {
                        e = 0;
                        total -= 100;
                        }
                      }
      if (checkNpm.prop( "checked") === true) {
                    if (f === 0){
                        f += 1;
                        total += 100;
                      }
                    } else if (checkNpm.prop( "checked") === false) {
                      if (f === 1) {
                        f = 0;
                        total -= 100;
                        }
                      }
                      $('.activities').append('<h10 id="total"> Total: $' + total + '</h10>');//I append the total and in this way I actualize the value;
      if (total === 0) { // if any checkbox is checked the total is hidden!
          $('#total').hide();
      }
});

///i know is possible reduce the code but i expend to much time in the proyect, i wish in the future can reduce this.

// PAYMENT SELECTION!!
$('form fieldset').last().attr('id','payment-info');// I give ID to last fieldset to make it easier to manipulate

//hide all children
$('#credit-card').hide();
$('#credit-card').next().hide();//
$('#payment-info div:last-child').hide();

//when choose the option of payment show or hide the different methods of payment
$('#payment').click(function() {
//if no option is chosen every option is showed
  if ($( "#payment option:selected" ).text() === $('#payment option[value="select_method"]').text()) {
    $('#credit-card').hide();
    $('#credit-card').next().hide();
    $('#payment-info div:last-child').hide();
  }
// credit-card option
  else if ($( "#payment option:selected" ).text() === $('#payment option[value="credit card"]').text()) {
    $('#credit-card').show();
    $('#credit-card').next().hide();
    $('#payment-info div:last-child').hide();;
  }
//paypal option
  else if ($( "#payment option:selected" ).text() === $('#payment option[value="paypal"]').text()) {
    $('#credit-card').hide();
    $('#credit-card').next().show();
    $('#payment-info div:last-child').hide();
  }
//bitcon Option
  else if ($( "#payment option:selected" ).text() === $('#payment option[value="bitcoin"]').text()) {
    $('#credit-card').hide();
    $('#credit-card').next().hide();
    $('#payment-info div:last-child').show();
  }
});


//Function Validate!!
//I create all function for different validation
//Name validate
var validateName = function (){
    if ($('#name').val().length >= 2) {//if the user put correct the name
        $('label[for=name]').contents().eq(1).remove();//I remove the label with error and
        $("label[for='name']").css("color","black");//the styles come to normality
        $("label[for='name']").css("opacity","1");
        check1 = 0; //reset the repetition variable
      }
    else if ($('#name').val() === ""){//if the user doesn't put more then 2 caracters have error
      if (check1 === 0){//variable of repetition in advice of fill field
          check1 += 1;
          $("label[for='name']").append("(please provide your name)");//I add the advice with style!
          $("label[for='name']").css("color","red");
          $("label[for='name']").css("opacity","0.8");
        }
    }
};

//Email Validate
var validateMail = function(){
    var emailChecked = $('#mail').val();
        if( emailChecked.indexOf('@') >= 0 && emailChecked.indexOf('.') >=0){//the user needs to put correct the email with @ and .
          $('label[for=mail]').contents().eq(1).remove();//if the input is correct I remove the advice and restore the style.
          $("label[for='mail']").css("color","black");
          $("label[for='mail']").css("opacity","1");
          check2 = 0; //restore the repetition variable
        }
        else {
          if (check2 === 0){// I check the field of email, if this is empty the advice appear
              check2 += 1;
              $("label[for='mail']").append("(please provide a valid email address)");//add the advice with style!
              $("label[for='mail']").css("color","red");
              $("label[for='mail']").css("opacity","0.8");
          }
        }
      };

//T-shirt Validate
var validateShirt = function(){
  //if the user doesn't selected one option
    if($("#design option").prop('selected') === true) {
      if (checkShirt === 0){
          checkShirt += 1;//variable of repetition
          $('.shirt legend').after('<label for="error1">Dont forget to pick a T-SHIRT</label>');// I append the advice
          $('.shirt legend').css('margin-bottom','0px')//correction of margin
      }
    else if ($("#design option").prop('selected') === false){//if the option is selected
      $('label[for="error1"]').remove();//I remove the label
      checkShirt = 0;//and reset the variable
    }
  }
  $('#design').click(function() { //this changes in real time and removes the advice of error
    $('label[for="error1"]').remove();
    $('.shirt legend').css('margin-bottom','20px')
    checkShirt = 0;

  });
}

//Activities Validate
var validateActivities = function(){
 //this statement checks all checkbox if any is checked add the advice of error
    if (checkAll.prop( "checked") === false && checkJsframeworks.prop( "checked") === false
        && checkLibs.prop( "checked") === false && checkExpress.prop( "checked") === false
        && checkNode.prop( "checked") === false && checkBuildtools.prop( "checked") === false
        && checkNpm.prop( "checked") === false) {
          if (check3 === 0){
              check3 += 1;
              $('.activities legend').after('<label for="error">Please select an Activity</label>');
              $('.activities legend').css('margin-bottom','0px')
          }
             //this statement check all checkbox if one is checked remove the advice of error
        else if (checkAll.prop( "checked") === true || checkJsframeworks.prop( "checked") === true
            || checkLibs.prop( "checked") === true || checkExpress.prop( "checked") === true
            || checkNode.prop( "checked") === true || checkBuildtools.prop( "checked") === true
            || checkNpm.prop( "checked") === true){
          $('label[for="error"]').remove();//this removes the advice of error
          check3 = 0;
        }
      }
      $('.activities :input').click(function() {//this is checking in realtime
        $('label[for="error"]').remove();
        $('.activities legend').css('margin-bottom','20px')
        check3 = 0;
      });
};

// PAYMENT VALIDATION!!!!///

//CREDIT CARD NUMBER!!!!!
var validateCredit = function (){
if($('#cc-num').val().length === 13 || $('#cc-num').val().length === 16){ //this is the conditional of credit-card number if it is good remove the advice
  $("label[for='cc-num']").contents().eq(1).remove();
  $("label[for='cc-num']").css("color","black");
  $("label[for='cc-num']").css("opacity","1");
  $("label[for='cc-num']").css("font-size","16px");

  check4 = 0;
}
else if ($('#cc-num').val().length === 0) { //if any number is in the field of credit-card number put the advice
  if (check4 === 0) {
    check4 += 1;
    $("label[for='cc-num']").contents().eq(1).remove();
    $("label[for='cc-num']").append("(insert your credit-card)");
    $("label[for='cc-num']").css("color","red");
    $("label[for='cc-num']").css("opacity","0.8");
    $("label[for='cc-num']").css("font-size","14px");

  }
}
else { //if correct number is in the credit-card input, I append the advice
  if (check4 === 0) {
      check4 = 0;
      $("label[for='cc-num']").contents().eq(1).remove();
      $("label[for='cc-num']").append("( insert 13 or 16 digits )");
      $("label[for='cc-num']").css("color","red");
      $("label[for='cc-num']").css("opacity","0.8");
      $("label[for='cc-num']").css("font-size","14px");
    }
}
//I repeat the same behavior in the nexts statements, with different conditionals...
//ZIP !!

if($('#zip').val().length === 5){
  $("label[for='zip']").contents().eq(1).remove();
  $("label[for='zip']").css("color","black");
  $("label[for='zip']").css("opacity","1");
  $("label[for='zip']").css("font-size","16px");
  check5 = 0;
}
else if ($('#zip').val() === "") {
  if (check5 === 0) {
    check5 += 1;
    $("label[for='zip']").contents().eq(1).remove();
    $("label[for='zip']").append("(insert zip)");
    $("label[for='zip']").css("color","red");
    $("label[for='zip']").css("opacity","0.8");
    $("label[for='zip']").css("font-size","14px");
  }
}
else {
      check5 = 0;
      $("label[for='zip']").contents().eq(1).remove();
      $("label[for='zip']").append("(5 numbers)");
      $("label[for='zip']").css("color","red");
      $("label[for='zip']").css("opacity","0.8");
      $("label[for='zip']").css("font-size","14px");
}

// CVV !!

if($('#cvv').val().length === 3){
  $("label[for='cvv']").contents().eq(1).remove();
  $("label[for='cvv']").css("color","black");
  $("label[for='cvv']").css("opacity","1");
  $("label[for='cvv']").css("font-size","16px");
  check6 = 0;
}
else if ($('#cvv').val() === "") {
  if (check6 === 0) {
    check6 += 1;
    $("label[for='cvv']").contents().eq(1).remove();
    $("label[for='cvv']").append("(insert cvv)");
    $("label[for='cvv']").css("color","red");
    $("label[for='cvv']").css("opacity","0.8");
    $("label[for='cvv']").css("font-size","14px");
  }
}
else {
      check6 = 0;
      $("label[for='cvv']").contents().eq(1).remove();
      $("label[for='cvv']").append("(3 numbers)");
      $("label[for='cvv']").css("color","red");
      $("label[for='cvv']").css("opacity","0.8");
      $("label[for='cvv']").css("font-size","14px");
}
}

// SUBMIT !!!
var totalValidation = 1; //this is the value for submit
//when click the button of submit I call all function and use all variable of repetion in one equation to determinted if it is possible to submit!!
$('button').click(function(){

  validateName();
  validateMail();
  validateShirt();
  validateActivities();
  validateCredit();
  validateRealTime();

  totalValidation = check1 + check2 + check3 + check4 + check5 + check6 + checkShirt + 1;

if (totalValidation === 1 ){ //If the total validation is the same of the checking the all errors resolved I submit
  console.log('submit')
  console.log(totalValidation)

  $('form').submit(function (event) {
  });
}
else { //but if is not correct I use the preventDefault to make it possible to change the field
  console.log('no se mando')
  console.log(totalValidation)
  event.preventDefault();
}
});

// Validation REALTIME!!!
// validation in REALTIME with the on()
var validateRealTime = function() {
$('#name').on('input',function() {
  validateName();
});
$('#mail').on('input',function() {
  validateMail();
});
$('#design').change(function() {
  validateShirt();
});
$('.activities').change(function() {
  validateActivities();
});
$('#credit-card').on('input',function() {
  validateCredit();
});
}

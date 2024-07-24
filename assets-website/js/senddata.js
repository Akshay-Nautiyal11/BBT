    $("#news_letter").click(function (event) {
        event.preventDefault();
        var news_action = $('#newsss-letterrr').attr('action');

        console.log(news_action);
        var email = $("#newsemail").val();
        var pattrnemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                if(email == '')
                 {
                     $("#newsemail").attr('placeholder',"Email can't be empty");
                     $('.result_news').text("Email can't be empty !");
                     $(".result_news").addClass('text-danger');
                     return false;
                 }
                 if(!email.match(pattrnemail)) 
                 {
                     $("#newsemail").attr('placeholder',"Please enter a valid email address.");
                     $('.result_news').text("Email can't be valid !");
                     $(".result_news").addClass('text-danger');
                       return false;
                 }
                 else
                 {
                    $.ajax({
                     method: "POST",
                     url: news_action,
                     data: {newsletter:1,email:email},
                     success: function (html) {
                        //console.log(html);
                        if (html == "Successfully Newsletter Send!!!") {
                            $('.result_news').text(html);
                            $(".result_news").addClass('text-success');
                           document.getElementById("callbackform").reset();
                        } else {
                            $('.result_news').text(html);
                            $(".result_news").addClass('text-danger');
                           //document.getElementById("callbackform").reset();
                        }
                     }
                    });
                 }

    });
    //Contact-us.........................
           $(".contact_us").click(function (event) {
            event.preventDefault();
              var contact_action = $('.contact_us_from').attr('action');
               // console.log(contact_action);
               var name = $("#name").val();
               var email = $("#email").val();
               var location= $("#location").val();
               var phone= $("#phone").val();
               var msg= $("#msg").val();
               var typefrom =$("#typefrom").val();
               var subjectfrom =$("#subjectfrom").val();
               
               var pattrnname = /^[a-zA-z\s]{3,100}$/;
               var pattrnemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
               var patternmobile = /^[\d]{10}$/; 
         
                if(name == '')
                 {
                     $("#name").attr('placeholder',"Name can't be empty");
                     $("#name").css('border','2px solid red'); 
                     return false;
                 }
                 if(!name.match(pattrnname))
                 {
                     $("#name").attr('placeholder',"Name can't be Match");
                     $("#name").css('border','2px solid red'); 
                     return false;
                 }
                
                 if(email == '')
                 {
                     $("#email").attr('placeholder',"Email can't be empty");
                     $("#email").css('border','2px solid red'); 
                     return false;
                 }
                 if(!email.match(pattrnemail)) 
                 {
                     $("#email").attr('placeholder',"Please enter a valid email address.");
                     $("#email").css('border','2px solid red');
                     return false;
                 }
                 if(location == '')
                 {
                     $("#location").attr('placeholder',"location can't be empty");
                     $("#location").css('border','2px solid red'); 
                     return false;
                 }
                if(!phone.match(patternmobile))
                 {
                     $("#phone").attr('placeholder',"Mobile Number is Require Enter only 10 digit number");
                      $("#phone").css('border','2px solid red');
                     return false;
                 }
                 else
                  {
                  $.ajax({
                     method: "POST",
                     url: contact_action,
                     data: {
                        contact_us:1,
                        name:name,
                        email:email,
                        location:location,
                        phone:phone,
                        msg:msg,
                        typefrom:typefrom,
                        subjectfrom:subjectfrom
                     },
                     success: function (html) {
                        //console.log(html);
                        if (html == "Successfully Contact Us Send!!!") {
                            $('.result_mail').text(html);
                            $('.result_mail').addClass('text-success font-weight-bold');
                           document.getElementById("form").reset();
                        } else {
                            $('.result_mail').text(html);
                            $('.result_mail').addClass('text-danger font-weight-bold');
                            document.getElementById("form").reset();
                        }
                     }
                  });
               }            
           });

  	//car-detail pages
           $("#callbackform").submit(function (event) {
            event.preventDefault();
              var action = $('#callbackform').attr('action');
              var formData= $( "#callbackform" ).serialize();
              //var formData = new FormData($("form#callbackform")[0]);
              console.log(action);
               var name = $("#name").val();
               var email = $("#email").val();
               var telphone= $("#telphone").val();
            
               var pattrnname = /^[a-zA-z\s]{3,100}$/;
               var pattrnemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
               var patternmobile = /^[\d]{10}$/; 
         
                if(name == '')
                 {
                     $("#name").attr('placeholder',"Name can't be empty");
                     $("#name").addClass("ggggg");
                     return false;
                 }
                 if(!name.match(pattrnname))
                 {
                     $("#name").attr('placeholder',"Name can't be Match");
                     $("#name").addClass("ggggg");
                     return false;
                 }
                
                 if(email == '')
                 {
                     $("#email").attr('placeholder',"Email can't be empty");
                     $("#email").addClass("ggggg");
                     return false;
                 }
                 if(!email.match(pattrnemail)) 
                 {
                     $("#email").attr('placeholder',"Please enter a valid email address.");
                     $("#email").addClass("ggggg");
                     return false;
                 }
                if(!telphone.match(patternmobile))
                 {
                     $("#telphone").attr('placeholder',"Mobile Number is Require Enter only 10 digit number");
                     $("#telphone").addClass("ggggg");
                     return false;
                 }
                 else
                  {
                  $.ajax({
                     method: "POST",
                     url: action,
                     data: formData,
                     success: function (html) {
                        //console.log(html);
                        if (html == "mail send") {
                        	$('.alert-success').removeClass('d-none');
                            $(".alert-success strong").text(html);
                              $('#abe_modal-request').modal('toggle');
                           document.getElementById("callbackform").reset();
                        } else {
                            $('.alert-success').removeClass('d-none');
                            $(".alert-success strong").text(html);
                             $('#abe_modal-request').modal('toggle');
                           document.getElementById("callbackform").reset();
                        }
                     }
                  });
               }            
           });
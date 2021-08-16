//Form validation
$(document).ready(function(){

    $("#mail").focus(function(){
        $("#email-required").hide();   
    });

    $("#mail").on("focusout",function(){
        var email = $("#mail").val();
        if(email === ""){
            $("#email-required").show();
            $("#invalid-email").hide();
        }
    });


    $("#password").focus(function(){
        $("#pw-required").hide();
    });
    $("#password").on("focusout",function(){
        var pw = $("#password").val();
        if(pw === ""){
            $("#pw-required").show();
        }
    });


    $("#user").focus(function(){
        $("#username-required").hide();
    });
    $("#user").on("focusout", function(){
        var userN = $("#user").val();
        if(userN === ""){
            $("#username-required").show();
        }
    });


    $("#invalid-username").hide();
    $("#invalid-email").hide();
    $("#invalid-pw").hide();


    $("#user").on("keyup",function(){
        var userN = $("#user").val();
        var nameFormat =/^(?![0-9._])(?!.*[0-9._]$)(?!.*\d_)(?!.*_\d)[a-zA-Z0-9_]+$/;
        if(nameFormat.test(userN)){
            $("#invalid-username").hide();
        }else{
            $("#invalid-username").show();
        }
    });

    $("#mail").on("keyup", function(){
        var mail = $("#mail").val();
        var mailFormat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mailFormat.test(mail)){
            $("#invalid-email").hide();
        }else{
            $("#invalid-email").show();
        }
    });

    $("#password").on("keyup", function(){
        var pass = $("#password").val();
        var passformat =/^[a-zA-Z0-9!@#$%^&*]{8,25}$/;
        if(passformat.test(pass)){
            $("#invalid-pw").hide();
        }else{
            $("#invalid-pw").show();
        }
    });

    // $("#mail").on("focusout",function(){
    //     var email = $("#mail").val();
    //     if(email === ""){
            
    //     }
    // });
    
    
});


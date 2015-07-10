var serverURL = "http://mattandjenn2015.ca/skss/";


var processForm = function (e) {

var eventTarget = e.target;

    e.preventDefault();


    var firstName = $('#fullName').val().trim();
    var lastName = null;
    var email = $('#emailTxt').val().trim();
    var contact = $('#phone').val().trim();
    var address = null;
    var attending = 1;
    var menu = 5;
    var partySize = $('#selNumTickets option:selected').val();
    var notes = $("#nameOfGuest").val().trim();

    var isValid = true;

    if (FEATURE_VALIDATE) {
        isValid = firstName && email && contact;
    }
    


    var obj = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'phoneNumber': contact,
        'address': address,
        'statusId': attending,
        'mealId': menu,
        'notes': notes,
        'association': null,
        'partySize': partySize,

    };

    var onComplete = function (a, b, c) {
        console.log('success');
      
        $("#submit").click();
     
      // $("#submit_first").show();
      //   $('.pp').spin(false);
    }

    var onError = function (a, b, c) {
        console.log('failed');
        alert('Something went wrong, please try again or contact the organizers at  skssgrad05@gmail.com')
        LogError('submitting guest error, ' + b, obj);
            $('#thanks').spin(false);
            $("#submit_first").show();
    }
    if (isValid) {
        console.log('submitting');
        var verb = "POST";
        var url = serverURL + "guest/";
    
        callAjax(url, verb, obj, onComplete, onError);
    } else {
        e.preventDefault();
        alert('please fill in all the fields in order to complete the checkout process');
            $('#thanks').spin(false);
            $("#submit_first").show();

    }


};

var LogError = function (title, object) {
    var errorObj = {
        'subject': title,
        'body': JSON.stringify(object),
        'address': 'andyandem2016+server@gmail.com'

    };
    $.ajax({
        url: serverURL + "email/",
        type: "POST",
        data: JSON.stringify(errorObj),
        dataType: "json",
        contentType: 'application/json'

    });
};
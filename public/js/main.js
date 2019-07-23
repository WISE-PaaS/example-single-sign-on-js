$('.check-status').on('click', function () {
    $.ajax({
        url : 'https://portal-sso.wise-paas.io/v2.0/users/me',
        xhrFields : {
            withCredentials: true
        }
    }).done(function (user) {
        alert('Hello! ' + user.firstName + ' ' + user.lastName+ ' ' + user.country);
    }).fail(function () {
        alert('You are not logged in!');
    });
});
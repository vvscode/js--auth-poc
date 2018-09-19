$(function () {
    $('.c-get-token').on('click', getToken);
    $('.c-call-to-a').on('click', callToA);
    $('.c-call-to-b').on('click', callToB);
    $('.c-reset').on('click', reset);
});

function getToken() {
    $.get('/api/getToken')
        .done(function (response) {
            setValue(
                JSON.stringify(response.data.request, null, 2),
                '// Response from direct request \n' +
                JSON.stringify(response.data.response.main, null, 2) +
                '\n\n// JWT from callback request \n' +
                JSON.stringify(response.data.response.jwt, null, 2)
            );
            changeBtnStatus('.c-get-token', 'success');
        })
        .fail(function () {
            setValue('', '');
            changeBtnStatus('.c-get-token', 'danger');
        });
}

function callToA() {
    $.get('/api/callToA')
        .done(function (response) {
            setValue(
                JSON.stringify(response.data.request, null, 2),
                JSON.stringify(response.data.response, null, 2)
            );
            changeBtnStatus('.c-call-to-a', 'success');
        })
        .fail(function (response) {
            setValue(
                response.responseJSON ? JSON.stringify(response.responseJSON.data.request, null, 2) : '',
                response.responseJSON ? JSON.stringify(response.responseJSON.data.response, null, 2) : ''
            );
            changeBtnStatus('.c-call-to-a', 'danger');
        });
}

function callToB() {
    $.get('/api/callToB')
        .done(function (response) {
            setValue(
                JSON.stringify(response.data.request, null, 2),
                JSON.stringify(response.data.response, null, 2)
            );
            changeBtnStatus('.c-call-to-b', 'success');
        })
        .fail(function (response) {
            setValue(
                response.responseJSON ? JSON.stringify(response.responseJSON.data.request, null, 2) : '',
                response.responseJSON ? JSON.stringify(response.responseJSON.data.response, null, 2) : ''
            );
            changeBtnStatus('.c-call-to-b', 'danger');
        });
}

function reset() {
    $.get('/api/reset');
    changeBtnStatus('.btn', 'primary');
    $('.c-request, .c-response').html('');
}

function setValue(request, response) {
    $('.c-request').html(`<pre>${request}</pre>`);
    $('.c-response').html(`<pre>${response}</pre>`);
}

function changeBtnStatus(selector, newStatus) {
    var newClass = 'btn-' + newStatus;
    var oldClasses = ['primary', 'success', 'danger'].map(function (oldStatus) {
        return 'btn-' + oldStatus;
    }).join(' ');

    $(selector)
        .removeClass(oldClasses)
        .addClass(newClass);
}
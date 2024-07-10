$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
       $('#mobile_menu').toggLeclass('active')
       $('#mobile_menu').find('i').toggLeclass('fa-x')
    });
});
$(document).ready(function () {
    $('#admin').hide();
    $('#contents').hide();
    $('#users').hide();
    $('#validation').hide();
    $('#analytics').show();
    $('#adminMenu').addClass('active');


    $('#adminMenu').click(function () {
        $('#admin').slideDown("slow");
        $('#contents').hide();
        $('#users').hide();
        $('#analytics').hide();
        $('#validation').hide();
        $('#adminMenu').addClass('active');
        $('#contentMenu').removeClass('active');
        $('#usersMenu').removeClass('active');
        $('#analyticsMenu').removeClass('active');
        $('#validationMenu').removeClass('active');

        return false;
    });

    $('#contentMenu').click(function () {
        $('#admin').hide();
        $('#contents').slideDown("slow");
        $('#users').hide();
        $('#analytics').hide();
        $('#validation').hide();
        $('#adminMenu').removeClass('active');
        $('#contentMenu').addClass('active');
        $('#usersMenu').removeClass('active');
        $('#analyticsMenu').removeClass('active');
        $('#validationMenu').removeClass('active');

        return false;
    });

    $('#usersMenu').click(function () {
        $('#admin').hide();
        $('#contents').hide();
        $('#users').slideDown("slow");
        $('#analytics').hide();
        $('#validation').hide();
        $('#adminMenu').removeClass('active');
        $('#contentMenu').removeClass('active');
        $('#usersMenu').addClass('active');
        $('#analyticsMenu').removeClass('active');
        $('#validationMenu').removeClass('active');

        return false;
    });

    $('#analyticsMenu').click(function () {
        $('#admin').hide();
        $('#contents').hide();
        $('#users').hide();
        $('#validation').hide();
        $('#analytics').slideDown("slow");
        $('#adminMenu').removeClass('active');
        $('#contentMenu').removeClass('active');
        $('#usersMenu').removeClass('active');
        $('#analyticsMenu').addClass('active');
        $('#validationMenu').removeClass('active');

        return false;
    });

    $('#validationMenu').click(function () {
        $('#admin').hide();
        $('#contents').hide();
        $('#users').hide();
        $('#analytics').hide();
        $('#validation').slideDown("slow");
        $('#adminMenu').removeClass('active');
        $('#contentMenu').removeClass('active');
        $('#usersMenu').removeClass('active');
        $('#analyticsMenu').removeClass('active');
        $('#validationMenu').addClass('active');

        return false;
    });

});

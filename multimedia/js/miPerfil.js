$(document).ready(function () {
    $('#miPerfil').show();
    $('#editarPerfil').hide();
    $('#miPerfilMenu').addClass('active');
    

    $('#editarPerfilMenu').click(function () {
        $('#editarPerfil').slideDown("slow");
        $('#miPerfil').hide();
         $('#editarPerfilMenu').addClass('active');
         $('#miPerfilMenu').removeClass('active');
        

        return false;
    });

    $('#miPerfilMenu').click(function () {
        $('#editarPerfil').hide();
        $('#miPerfil').slideDown("slow");
        $('#editarPerfilMenu').removeClass('active');
         $('#miPerfilMenu').addClass('active');

        return false;
    });

});

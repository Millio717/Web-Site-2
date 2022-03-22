jQuery(document).ready(($)=>{

    $('#btn-menu').on('click',function(e){
        $(this).toggleClass('active');
        $('#ul-menu').toggleClass('active');
    })
})
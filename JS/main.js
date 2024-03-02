// needs-validation
(function(){
    'use strict';
    window.addEventListener('load',function(){
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms,function(form){
            form.addEventListener('submit',function(event){
                if(form.checkValidity() === false){
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            },false);
        })
    },false);
})();

// custom-file
$(document).ready(function(){
    $('.custom-file-input').on('change',function(){
        var fileName = $(this).val().split('\\').pop();
        $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
    })
})

// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
})

// popover
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
})

// toast
$(document).ready(function(){
    $('.form-toast').on('submit',function(e){
        e.preventDefault();
        $('.toast').toast('show');
    })
    
})

// filter table
$(document).ready(function(){
    $('#inputSearch').on('keyup',function(){
        var value = $(this).val().toLowerCase();
        $('#myTable tbody tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
        })
    })
})

$(document).ready(function(){



    $('body').on('click', '.minus', function(){
        var count = parseInt($(this).next().find('span').html());
        if (count - 1 > 0)
            $(this).next().find('span').text(count - 1);
    });
    $('body').on('click', '.plus', function(){
        var count = parseInt($(this).prev().find('span').html());
        $(this).prev().find('span').text(count + 1);
    });


    $('body').on('change', 'input.change', function(){
        if ($(this).is(':checked'))
            $(this).closest('li').addClass('checked');
        else
            $(this).closest('li').removeClass('checked');
    });

    $('input.change').each(function(){
        if ($(this).is(':checked'))
            $(this).closest('li').addClass('checked');
        else
            $(this).closest('li').removeClass('checked');
    });

    $('body').on('change', 'ul ul li input.change', function(){
        var check = false;
        $(this).closest('ul').find('input').each(function(){
            if ($(this).is(':checked'))
                check = true;
        });

        if (check)
        {
            $(this).closest('li.first').find('input').first().prop('checked', false);
            $(this).closest('li.first').removeClass('checked');
        }
        else
        {
            $(this).closest('li.first').find('input').first().prop('checked', true);
            $(this).closest('li.first').addClass('checked');
        }
    });

    $('body').on('change', 'ul li.first input.change', function(){
        $(this).closest('ul').find('ul li').find('input').each(function(){
            $(this).prop('checked', false);
            $(this).closest('li').removeClass('checked');
        });
    });

    $('body').on('click', '.dop .name', function(){
       if ( $(this).parent().hasClass('active') )
           $(this).parent().removeClass('active');
       else
           $(this).parent().addClass('active');
    });

    $('body').on('click', '.product .more', function(){
        if ( $(this).hasClass('active') )
        {
            $(this).removeClass('active');
            $(this).next('ul').hide();
        }
        else{
            $(this).addClass('active');
            $(this).next('ul').show();
        }

        return false;
    });

    $('.faq-list .name').click(function(){
        if ( $(this).parent().hasClass('active') )
            $(this).parent().removeClass('active');
        else
            $(this).parent().addClass('active');
    });
    $('.faq-list .show-all').click(function(){
        $('.faq-list .item').addClass('active');
        return false;
    });

    $('.gallery .color').click(function(){
        if ( $(this).hasClass('active') )
        {
            $(this).removeClass('active');
            $(this).next('.popup').hide();
        }
        else{
            $(this).addClass('active');
            $(this).next('.popup').show();
        }
    });
    $('.gallery .close').click(function(){
        $(this).closest('.item').find('.color').removeClass('active');
        $(this).closest('.popup').hide();
    });
    $('.gallery .colors span').click(function(){
        /*$(this).closest('.item').find('.color').removeClass('active');
        $(this).closest('.item').find('.color').css('background', $(this).css('background-color'));
        $(this).closest('.popup').hide();*/
        window.location.href = $(this).attr('data-url');
    });
    $('.gallery .models li').click(function(){
        /*$(this).closest('.item').find('.color').removeClass('active');
        $(this).closest('.item').find('.color').html($(this).html());
        $(this).closest('.popup').hide();*/
        window.location.href = $(this).attr('data-url');
    });

    $('.order-list .name').click(function(){
        if ( $(this).parent().hasClass('active') )
            $(this).parent().removeClass('active');
        else
            $(this).parent().addClass('active');
    });



    function isMail(str) {
        return /^[=_.0-9a-z+~-]+@(([-0-9a-z_]+\.)+)([a-z]{2,10})$/i.test(str);
    }
    var CMAin = {
        "UserSubscribe" : function(email, callback) {
            $.ajax({
                url: "/ajax/mailchimp.php",
                type: "POST",
                data: {"EMAIL" : email, "type" : "subscribe"},
                timeout: 10000,
                success: function(data_back, status) {
                    if (typeof callback === 'function')
                        callback(data_back);
                }
            });
        }
    };
    $('#subsribe_input').keydown(function(event) {
        event.stopPropagation();
        if (event.keyCode == 13) {
            var email = $(this).val(),
                input = $(this);

            if (!isMail(email)) {
                input.addClass("error");
                return false;
            }
            input.removeClass("error");
            CMAin.UserSubscribe(email, function() {
                input.val("РЎРїР°СЃРёР±Рѕ! Р’С‹ РїРѕРґРїРёСЃР°РЅС‹!");
            });

            return false;
        }
    });

    $.fn.hasAttr = function(name) {
        return this.attr(name) !== undefined;
    };


    $('.model-inside .info-right .more').click(function(){
        $("html, body").animate({
            scrollTop: $('.model-inside .descr').offset().top
        }, 2000);
        return false
    });

    $('body').on('change', '.color select', function(){
        var name = $(this).attr('name'),
            pic = $(this).find('option:selected').attr('data-pic');

        if (name == 'color49')
            $(this).closest('.select-color').find('.color1').attr('src', pic);
        else if (name == 'color50')
            $(this).closest('.select-color').find('.color2').attr('src', pic);
    });

    $('body').on('change', '.product-wrap', function(){
        changeDataProduct($(this));
    });
    $('body').on('click', '.product-wrap .minus', function(){
        changeDataProduct($(this));
    });
    $('body').on('click', '.product-wrap .plus', function(){
        changeDataProduct($(this));
    });

    function changeDataProduct(object) {
        var summBlock = object.closest('.block').next().find('span'),
            summ = 0,
            itogList = object.closest('.block').next().find('ol'),
            listLi = '';

        object.closest('.product-wrap').find('input:checked').each(function(){
            var priceHTML = '',
                countHTML = '',
                li = $(this).closest('label').find('span').html();

            priceHTML = $(this).closest('label').next('.add').find('.price').html();
            priceHTML.replace(' СЂСѓР±.', '');
            countHTML = $(this).closest('label').next('.add').find('span').html();
            summ = summ + parseInt(priceHTML)*parseInt(countHTML);

            li = li.replace('1: ', '');
            li = li.replace('2: ', '');
            li = li.replace('3: ', '');
            li = li.replace('4: ', '');
            listLi = listLi + '<li>' + li + '</li>';
        });

        summBlock.html(summ + ' СЂСѓР±.');
        itogList.html(listLi);
    }

    $('body').on('click', '.addtobasket', function(){
        if ( $(this).hasClass('quick') )
        {
            $('#add-popup .close').addClass('quick');
            $('#add-popup .cancel').addClass('quick');
        }

        var complect = $(this).closest('.itog').prev('.block').find('.product-wrap :visible'),
            ids = [],
            counts = [],
            color = 0,
            colorOc = 0,
            model = $(this).attr('data-id'),
            material = 0;

        if ( $(this).closest(".complect").find('input[name="type"]').length > 0 )
            material =  $(this).closest(".complect").find('input[name="type"]:checked').val();
        else if ( $(this).closest(".order-wrap").find('select[name="materials"]').length > 0 )
            material =  $(this).closest(".order-wrap").find('select[name="materials"]').val();

        complect.find('input:checked').each(function(){
            ids.push(parseInt($(this).closest('label').next('.add').find('span').attr('data-id')));
            counts.push(parseInt($(this).closest('label').next('.add').find('span').html()));
        });

        color = complect.find('.select-color select[name="color49"]').val();
        colorOc = complect.find('.select-color select[name="color50"]').val();

        if ( ids.length > 0 )
        {
            $.post('/ajax/addToBasket.php', {ids:ids, counts:counts, color:color, colorOc:colorOc, model:model, material:material}, function(data){
                $('#add-popup').show();
            });
        }
        else
            alert('Р’С‹Р±РµСЂРёС‚Рµ С‚РѕРІР°СЂС‹');

        return false
    });

    function isNum(cCode) {
        if ((cCode >= 48 && cCode <= 57) || (cCode>=17 && cCode<=20) || cCode == 27 || cCode == 0 || cCode == 127 || cCode == 8) {
            return true;
        } else {
            return false;
        }
    }
    $('.basket .count input').keypress(function(e) {
        return isNum(e.which);
    });
    $('.basket .count input').change(function() {
        var count = parseInt($(this).val()),
            id = $(this).closest('.item').data('id'),
            summ = $(this).closest('.item').find('.summ');

        if ( count > 0 )
            $.post('/ajax/updateBasket.php', {id:id, count:count, action: 'change'}, function(data){
                $('.basket .allsumm').html(data.summ);
                $('#smbasket_summ').html(data.summ);
                summ.html(data.current);
            }, 'json');
    });
    $('.basket .del a').click(function(){
        var item = $(this).closest('.item'),
            id = item.data('id');

        $.post('/ajax/updateBasket.php', {id:id, action: 'delete'}, function(data){
            $('.basket .allsumm').html(data.summ);
            $('#smbasket_summ').html(data.summ);
            item.hide();
        }, 'json');

        return false;
    });

    $('.color-inside .color span').click(function(){
        $(this).closest('.color').find('span').removeClass('active');
        $(this).addClass('active');

        $('.color-inside .color2').attr('src', $(this).attr('data-pic'));
    });

    $('body').on('click', '.registration .next', function(){
        var block = $(this).closest('.register-block'),
            registr = $(this).closest('.registration'),
            step = registr.find('.steps span.active').length,
            name = block.find('input[name="name"]'),
            email = block.find('input[name="email"]'),
            password = block.find('input[name="password"]'),
            repassword = block.find('input[name="repassword"]'),
            subscribe = block.find('input[name="subscribe"]'),
            agree = block.find('input[name="agree"]'),
            city = '',
            index = '',
            address = '',
            error = 0;

        if (name.val().length == 0) {
            error = error + 1; name.addClass('error');
        }
        else
            name.removeClass('error');

        if ((email.val().length == 0) || !isMail(email.val()) ) {
            error = error + 1; email.addClass('error');
        }
        else
            email.removeClass('error');

        if (password.val().length < 6) {
            error = error + 1; password.addClass('error');
        }
        else
            password.removeClass('error');

        if (repassword.val().length < 6) {
            error = error + 1; repassword.addClass('error');
        }
        else
            repassword.removeClass('error');

        if (password.val().length < 6) {
            error = error + 1; password.addClass('error'); password.addClass('error');
        }
        else
        {
            password.removeClass('error'); password.removeClass('error');
        }

        if (!agree.is(':checked')) {
            error = error + 1; agree.parent().addClass('error');
        }
        else
            agree.parent().removeClass('error');

        if (step == 2)
        {
            city = block.find('input[name="city"]').val();
            index = block.find('input[name="index"]').val();
            address = block.find('textarea[name="address"]').val();
        }

        if (error == 0)
        {
            $.post('/ajax/register.php', {step:step, name:name.val(), email:email.val(), password:password.val(), repassword:repassword.val(), subscribe:subscribe.val(), city:city, index:index, address:address }, function(data){
                if ( (step == 1) && $('body').find('.registration').length == 1 ) registr.after(data);
                if (step == 1) $('.register-slide').animate({left: '-960px'}, 1000);

                if (step == 2)
                {
                    if (data.length < 200)
                        alert(data);
                    else
                    {
                        if ( $('body').find('.registration').length == 2 ) registr.after(data);
                        $('.register-slide').animate({left: '-1920px'}, 1000);
                    }
                }

            });
        }

        return false;
    });

    $('body').on('click', '.registration .back', function(){
        $('.register-slide').animate({left: '0px'}, 1000);
        return false;
    });

    $('input[name="PERSONAL_BIRTHDAY_DAY"]').change(function(){
        changeBirthday();
    });
    $('select[name="PERSONAL_BIRTHDAY_MONTH"]').change(function(){
        changeBirthday();
    });
    $('input[name="PERSONAL_BIRTHDAY_YEAR"]').change(function(){
        changeBirthday();
    });
    function changeBirthday() {
        $('input[name="PERSONAL_BIRTHDAY"]').val( $('input[name="PERSONAL_BIRTHDAY_DAY"]').val() + '.' + $('select[name="PERSONAL_BIRTHDAY_MONTH"]').val() + '.' + $('input[name="PERSONAL_BIRTHDAY_YEAR"]').val() );
    }

    $('body').on('change', '#quickorder-popup .select-wrap select', function(){
        $('#quickorder-popup .select-wrap select').prop('disabled', true);

        var marka = $('#quickorder-popup select[name="marka"]').val(),
            model = $('#quickorder-popup select[name="model"]').val(),
            materials = $('#quickorder-popup select[name="materials"]').val();

        $.post('/ajax/changeModel.php', {marka:marka, model:model, materials:materials}, function(data){
            $('#quickorder-popup .order-wrap').html(data);
            $('input.change').checkator();
            $('input.change').each(function(){
                if ($(this).is(':checked'))
                    $(this).closest('li').addClass('checked');
                else
                    $(this).closest('li').removeClass('checked');
            });
        });
    });

    $('.modelsleft.parent > a').click(function(){
        if ( $(this).parent().hasClass('active') )
            $(this).parent().removeClass('active');
        else
        {
            $('.modelsleft.parent').removeClass('active');
            $(this).parent().addClass('active');
        }

        return false;
    });

    $('.block.type input').change(function(){
        var id = $(this).val();
        $('.product-wrap').hide();
        $('.product-wrap[data-id="' + id + '"]').show();
        changeDataProduct($('.product-wrap[data-id="' + id + '"]').find('.product'));
    });
    if ($('.block.type').length > 0)
        $('.block.type input:checked').change();

    (function() {
        if (window.pluso)if (typeof window.pluso.start == "function") return;
        if (window.ifpluso==undefined) { window.ifpluso = 1;
            var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
            s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
            s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
            var h=d[g]('body')[0];
            h.appendChild(s);
        }})();

    $('body').on('click', '.show-authform', function(){
        $('.step1body').slideUp();
        $('.auth-form').slideDown();
        $('#msg-auth').html('');
        return false;
    });
    $('body').on('click', '.hide-authform', function(){
        $('.step1body').slideDown();
        $('.auth-form').slideUp();
        return false;
    });
    $('body').on('click', '.auth-form .bt', function(){
        var login = $('.auth-form input[name="login"]').val(),
            password = $('.auth-form input[name="password"]').val();

        $.post('/ajax/auth.php', {login:login, password:password, type:'auth'}, function(data){
            if ( data == 'OK' )
                window.location.reload();
            else
                alert(data);
        });
        return false;
    });
    $('body').on('click', '.auth-form .without', function(){
        $('#currentstep').val(2);
        $('input[name="nocheckEmal"]').val('Y');
        submitForm();
        return false;
    });
});

(function ($) {
/// NAVBAR

    $(document).ready(function(){
    $(".navbar").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                // $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});

}(jQuery));

//TEXTE INTRO
var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente je m'appelle", "Passionné d'informatique depuis ma plus tendre enfance j'ai eu un parcours de vie qui m'a malheureusement éloigné de ma passion pendants quelques temps. Il y a quelques moi j'ai décidé de quitter mon ennuyant travail dans l'administration pour me lancer à fond dans ma passion d'enfance, je me suis mis à coder, apprendre, dévorer les documentations techniques, Pendant des jours, des semaines puis des mois... Aujourd'hui je me présente devant vous en tant que Développeur Web Front-end autodidacte passioné et surmotivé."],
    typeSpeed: 30});
    
  /// FORMULAIRE
$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form').submit(function(e)
    {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
    });	
});

// PARALLAX
var rellax = new Rellax('.rellax');

// AOS
AOS.init({
    easing: 'ease-in-out-sine'
  });

// SWUP

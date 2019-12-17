(function ($) {
/// NAVBAR

    $(document).ready(function(){
      $(".navbar").hide();
      
      $(function () {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 100) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
      });
  });

}(jQuery));

//TEXTE INTRO
$(document).ready(function() {

    'use strict';

const typed = $(".text");

    $(function() {
        typed.typed({
            strings: ["Après 7 ans de carrière dans la logistique où j'ai occupé des postes de Responsable de Stock et d'Adjoint d'exploitation pour des groupes internationaux, j'ai décidé de me reconvertir dans le développement web. Depuis Août 2019 je me suis lancé en autodidacte dans l’apprentissage des langages les plus populaires (JS, HTML, CSS...) afin de me donner un socle de compétence. Après 2 mois de cours j'ai décidé qu'il serait judicieux de me spécialiser et d'essayer de devenir le plus rapidement possible expert d'un language, ce language est PHP et son framework Symfony."],
//            typeSpeed: 0.01,
            loop: false,
        });
    });
});

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

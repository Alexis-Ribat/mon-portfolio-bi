$(document).ready(function() {
    // Ce script cherche toutes les images qui sont à l'intérieur de paragraphes <p>
    // (C'est le cas par défaut quand on écrit en Markdown)
    $('p img').each(function() {
        var $image = $(this);
        var imageSource = $image.attr('src');
        var imageCaption = $image.attr('alt');

        // On vérifie que l'image n'est pas déjà cliquable
        if (!$image.parent().is("a")) {
            // On enveloppe l'image dans un lien spécial Fancybox
            $image.wrap('<a href="' + imageSource + '" data-fancybox="gallery" data-caption="' + imageCaption + '"></a>');
        }
    });
});
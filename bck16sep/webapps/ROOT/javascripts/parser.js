/**
 * parses any RSS/XML feed through Google and returns JSON data
 * source: http://stackoverflow.com/a/6271906/477958
 */
function parseRSS(url, container) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=14&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      //console.log(data.responseData.feed);
      //$(container).html('<div class="tituloNoticia">'+capitaliseFirstLetter(data.responseData.feed.title)+'</div>');

      $.each(data.responseData.feed.entries, function(key, value){
        var thehtml = '<div class="recuadroNoticia"><div class="textoNoticia"><a href="'+value.link+'" target="_blank">'+value.title+'</a></div><div class="fechaNoticia">'+new Date(value.publishedDate)+'</div></div>';
        $(container).append(thehtml);
        
      });
    }
  });
}

/**
 * Capitalizes the first letter of any string variable
 * source: http://stackoverflow.com/a/1026087/477958
 */
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

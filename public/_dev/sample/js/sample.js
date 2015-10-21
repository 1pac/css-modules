$(function(){

  var $target = $('._sample'),
    $index  = $('._sample-index');

  function codeHighlight() {
    $("._code").each(function(i, code) {
      var $code    = $(code);
      var $source  = $(code).html();
      while($source.charAt(0) == "\n") {
        $source  = $source.substr(1);
      }
      $code.html($source);
      hljs.highlightBlock(code);
    });
  }

  if($target.length) {
    $target.each(function(i, sample){
      var $sample   = $(sample),
        $resource = $sample.html(),
        $template = $('<pre><code class="_code html"></code></pre>');
      if($sample.data("lang")) {
        $template = $('<pre><code class="_code ' + $sample.data("lang") + '"></code></pre>');
      }
      $sample.append($template).find('._code').text($resource);

      if(i == $target.length-1){
        codeHighlight();
      }
    });
  } else {
    codeHighlight();
  }


  $('h2[id], h3[id]').each(function(i, heading){
    var $heading = $(heading),
        $id      = $heading.attr('id');
    $heading.prepend('<a class="_heading-anchor tap-highlight" href="#' + $id + '"></a>');
    if($heading.is('h2')) {
      $index.append('<li><a href="#' + $id + '"><strong>' + $heading.text() + '</strong></a></li>');
    }else{
      $index.append('<li class="child"><a href="#' + $id + '">' + $heading.text() + '</a></li>');
    }
  });

  $('.block-content').find('h2[id]').each(function(i, heading){
    var $heading = $(heading),
        $id      = $heading.attr('id');
    if($id != 'bc-subblock') {
      $heading.append('<code>.' + $id + '</code>');
    }
  });

  $('._sample').find('a[href], .btn[href]').on('click', function(){
    return false;
  });

  //support-footer
  $('#_class-changer a').on('click', function(){
    $('body').removeClass().addClass($(this).html());
    return false;
  });

});

$(function() {
  
  $('span:even').css('color', 'red');

  $('p').each(function(index, el) {
    var button = '<button class = "btn" data-tmp = "'+ index +'">Click me</button>';
    $(el).append(button);
  });

  $('button').click(function() {
    alert($(this).attr('data-tmp'));
  });

});
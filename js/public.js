/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  // 圖自動縮放
  $('._i').imgLiquid ({verticalAlign: 'center'});

  var $banners = $('.banners').each (function () {
    var $that = $(this),
        $banner = $that.find ('.banner'),
        $pagination = $that.find ('.pagination > div > a'),
        i = 0;

    $pagination.click (function () {
      $(this).addClass ('active').siblings ().removeClass ('active');
      $that.attr ('class', 'banners n' + ($(this).index () + 1));
      if (i = $banner.eq ($(this).index ()).find ('img').height ()) $that.height (i);
      else $that.height ($banner.eq ($(this).index ()).find ('img').get (0).width / 4);
      
    }).first ().click ();

    setInterval (function () {
      var index = $pagination.filter ('.active').index () + 1;
      index = index >= $pagination.length ? 0 : index;
      $pagination.eq (index).click ();
    }, 7 * 1000);
  });

  var $menu = $('#menu'),
      $panel = $('#panel');

  $menu.find ('.group > a').click (function () {
    var $that = $(this).parent ();

    if (!$that.hasClass ('show')) $that.addClass ('show').siblings ().removeClass ('show');
    else $that.removeClass ('show');
  });

  $('#menu_button').click (function () { $menu.toggleClass ('show'); });
  $menu.find ('.close').click (function () { $menu.toggleClass ('show'); });

  $(window).resize (function () {
    if ($(this).width () > 960) $menu.height ($panel.height () + parseFloat ($panel.css ('padding-top')) + parseFloat ($panel.css ('padding-bottom')));
    else $menu.attr ('style');
    
    if ($(this).width () < 1200)
      $banners.each (function () {
        var $that = $(this), $banner = $that.find ('.banner'), i = 0;
        if (i = $banner.eq (0).find ('img').height ()) $that.height (i);
        else $that.height ($banner.eq (0).find ('img').get (0).width / 4);
      });
  });
  setTimeout (function () { $(window).resize (); });
});
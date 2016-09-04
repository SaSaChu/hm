/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  // 圖自動縮放
  $('._i').imgLiquid ({verticalAlign: 'center'});

  $('.banners').each (function () {
    var $that = $(this);
    var $pagination = $that.find ('.pagination > div > a');

    $pagination.click (function () {
      $(this).addClass ('active').siblings ().removeClass ('active');
      $that.attr ('class', 'banners n' + ($(this).index () + 1));
    }).first ().click ();

    setInterval (function () {
      var index = $pagination.filter ('.active').index () + 1;
      index = index >= $pagination.length ? 0 : index;
      $pagination.eq (index).click ();
    }, 7 * 1000);
  });

  
});
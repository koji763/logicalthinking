$(function() {
  // モーダル表示
  $('.burger-menu').click(function(){
    $('.modal').slideDown();
  })
  $('.modal-close').click(function(){
    $('.modal').slideUp();
  })

  // 説明表示
  $('#step1-wrap').click(function(){
    $('#step1-explain').fadeIn();
  })
  $('#step2-wrap').click(function(){
    $('#step2-explain').fadeIn();
  })
  $('#step3-wrap').click(function(){
    $('#step3-explain').fadeIn();
  })


  // 説明閉じる
  $('.close-explain').click(function(){
    $('#step1-explain').fadeOut();
  })
  $('.close-explain').click(function(){
    $('#step2-explain').fadeOut();
  })
  $('.close-explain').click(function(){
    $('#step3-explain').fadeOut();
  })

// 回答表示
  $('#question1').click(function(){
    $('#answer1-wrap').fadeIn();
  })
  $('#question2').click(function(){
    $('#answer2-wrap').fadeIn();
  })
  $('#question3').click(function(){
    $('#answer3-wrap').fadeIn();
  })
  $('#question4').click(function(){
    $('#answer4-wrap').fadeIn();
  })

  // 回答閉じる
  $('.close-answer').click(function(){
    $("#answer1-wrap").fadeOut();
  })
  $('.close-answer').click(function(){
    $("#answer2-wrap").fadeOut();
  })
  $('.close-answer').click(function(){
    $("#answer3-wrap").fadeOut();
  })
  $('.close-answer').click(function(){
    $("#answer4-wrap").fadeOut();
  })

  // ボトルネック詳細説明
  $('.neck-icon').hover(function(){
    $(this).parent().next().addClass("bottleneck-detail-active");
  },
  function(){
    $(this).parent().next().removeClass("bottleneck-detail-active");
  }
  )

  // 練習問題のヒント開閉
  $('.hint').click(function(){
    var $hintdetail=$(this).find('.hint-detail');
    if($hintdetail.hasClass('open')){
      $hintdetail.removeClass('open');
      $hintdetail.slideUp();
      $(this).find('span').text("+");
    }
    else{
      $hintdetail.addClass('open');
      $hintdetail.slideDown();
      $(this).find('span').text("-");
    };
  });

  // 練習問題解答開く・閉じる
  $('.answer-active').click(function(){
    $(this).next().slideDown();
  });

  $('.answer-nonactive').click(function(){
    $(this).parent().slideUp();
  });

});

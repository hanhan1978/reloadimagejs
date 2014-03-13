(function($){
    /* プラグイン名（myplugin）を指定 */
    /* 関数にオプション変数を渡す */
    $.fn.reloadimage=function(config){
        /* 引数の初期値を設定（カンマ区切り） */
        /* 一致した要素上で繰り返す */
        $(document).ready(function(){
            $('.imageFrame').each(function(){
                var imageObj = $(this).find('.reloadable');
                imageObj.bind('error', function(){
                    imageObj.hide();
                    imageObj.parent().addClass('loading');
                });
                imageObj.bind('load', function(){
                    imageObj.show();
                    imageObj.parent().removeClass('loading');
                });
            }); 
            reloadInterval = setInterval("reloadImage()", retrySecond * 1000);
        });
        
        
    };
})(jQuery);

function reloadImage(){
    $('.imageFrame').each(function(){
        var src = $(this).find('.reloadable').attr('src');
        $(this).find('.reloadable').attr('src', src + "?" + Math.round(new Date().getTime() / 1000));
    });
    if(++reloadImageCnt >= reloadImageMaxNum){
        clearInterval(reloadInterval);
    }
}

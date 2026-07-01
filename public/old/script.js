function copyDiscordId() {

    var str = "hyouhyan";
    var shownid = document.getElementById('discord-id');

    var listener = function(e){

        e.clipboardData.setData("text/plain" , str);    
        // 本来のイベントをキャンセル
        e.preventDefault();
        // 終わったら一応削除
        document.removeEventListener("copy", listener);
    }

    // コピーのイベントが発生したときに、クリップボードに書き込むようにしておく
    document.addEventListener("copy" , listener);

    // コピー
    document.execCommand("copy");

    if(shownid.innerHTML == "Copied!"){
        shownid.innerHTML = str;
    }
    else{
        shownid.innerHTML = "Copied!";
    }
}

$(function() {
    const hum = $('#hamburger, .close')
    const nav = $('.main-nav')
    hum.on('click', function(){
        nav.toggleClass('toggle');
    });
});
const plain = document.getElementById('plain_text');
const unicode = document.getElementById('unicode_text');

function encode(){
    unicode.value = escape(plain.value);
}

function decode(){
    plain.value = unescape(unicode.value);
}
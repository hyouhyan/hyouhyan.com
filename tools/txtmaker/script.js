const file_name = document.getElementById('file_name');
const main_text = document.getElementById('main_text');

function MakeTXT(){
    const blob = new Blob([main_text.value],{type:"text/plain"});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${file_name.value}.txt`;
    link.click();
}
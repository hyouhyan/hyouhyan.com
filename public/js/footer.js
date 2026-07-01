const body = document.body;

function txt_data(dataPath) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => { 
        const response = event.target.responseText; 
        body.insertAdjacentHTML('beforeend',`<footer><small>${response}</small></footer>`);
    });
    request.open('GET', dataPath, true); 
    request.send();
}  

if (typeof footer === 'undefined'){
    txt_data('/js/footer.txt');
}
else{
    txt_data(footer);
}
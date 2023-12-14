function callback(data) {
 
    document.getElementById("ip-address").innerHTML = data.ip;
    document.getElementById("host-name").innerHTML = data.hostname;
 
}
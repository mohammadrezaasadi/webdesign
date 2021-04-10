var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('update').innerHTML = this.responseText;
        console.log(request);
        var update= document.getElementsByTagName('ui')[1].getElementsByTagName('li');
        update[6].innerHTML=this.responseText;
    }
};
request.open('get', 'info.txt', true);
request.send();

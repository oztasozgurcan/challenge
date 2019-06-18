
var baseUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
function load(i){

    var xhr = new XMLHttpRequest();
    var output = '';

    xhr.open('GET', baseUrl);

    xhr.onload = function () {
        var photos = JSON.parse(this.responseText);

        for(var k in photos){

            if(k == i){
                output +=
                    '<div class=\"big-image\">' +
                    '<img src=\"' + photos[k-1].url + '\">' +
                    '</div>';
            }
        }

        document.getElementById('image-showport').innerHTML = output;
    };

    xhr.send();

}
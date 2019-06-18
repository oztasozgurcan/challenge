function load(i){

    // Url of the open api
    var baseUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';

    // new XHR
    var xhr = new XMLHttpRequest();
    var output = '';

    xhr.open('GET', baseUrl);

    xhr.onload = function () {
        var photos = JSON.parse(this.responseText);

        for(var k in photos){

            // If the photo id matches with the param id, the 600x600 photo url is embedded into the output.
            if(k == i){
                output +=
                    '<div class=\"big-image\">' +
                    '<img src=\"' + photos[k-1].url + '\">' +
                    '</div>';
            }
        }

        // the output is synchronized with the main html
        document.getElementById('image-showport').innerHTML = output;
    };

    xhr.send();

}
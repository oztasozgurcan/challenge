function getData(z) {

    // base url of the public API
    var baseUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';

    // Initializing the XHR;
    var xhr = new XMLHttpRequest();

    //output of the xhr
    var output = '';

    // Retrieving data from the api
    xhr.open('GET', baseUrl);

    // Checks whether the device is mobile or not.
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    // Loads the data into the html part.
    xhr.onload = function () {
        var albums = JSON.parse(this.responseText);

        var count = 0;
        for (var i in albums) {
            if (albums[i].albumId === z) {
                if(width < 960 /* checks for mobile screen width */){
                    if(count < 4){
                        output +=
                            '<div class=\"placeholder\">' +
                            '<a onclick=\"load(' + albums[i].id + ')\">' +
                            '<img src=\"' + albums[i].thumbnailUrl + '\">' +
                            '</a>' +
                            '</div>';
                        count++;
                    }
                } else {
                    if (count < 8) {
                        output +=
                            '<div class=\"placeholder\">' +
                            '<a onclick=\"load(' + albums[i].id + ')\">' +
                            '<img src=\"' + albums[i].thumbnailUrl + '\">' +
                            '</a>' +
                            '</div>';
                        count++;
                    }
                }
            }
        }

        // synchronize the output into the related html part.
        document.getElementById('thumbnail-4-2').innerHTML = output;
    };

    xhr.send();
}
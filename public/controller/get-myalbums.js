function getData(z) {

    var baseUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';

    var xhr = new XMLHttpRequest();
    var output = '';

    xhr.open('GET', baseUrl);

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    xhr.onload = function () {
        var albums = JSON.parse(this.responseText);

        var count = 0;
        for (var i in albums) {
            if (albums[i].albumId === z) {
                if(width < 960){
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

        document.getElementById('thumbnail-4-2').innerHTML = output;
    };

    xhr.send();
}
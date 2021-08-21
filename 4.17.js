let xhr = new XMLHttpRequest();
xhr.open( 'GET', '/countries.json');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    if( xhr.status == 200 ) {
        console.log( xhr.response );        
        let input = document.createElement( 'input' );
        input.id = "input-example";
        document.body.append( input );

        }
    else {
        console.error( 'Сталася помилка ' + xhr.status + ': ' + xhr.statusText );
    }
};
xhr.onerror = function() {
    console.error( 'Сталася помилка при виконанні запита до сервера' );
};

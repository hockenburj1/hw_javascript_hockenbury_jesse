function howdy() {
    console.log( 'Jesse Hockenbury says hi!' );
}

function inception( callback, value ) {
    callback( value );
}

function movieEndorsement( movie ) {
    console.log( movie + ' is a great movie.' );
}

numba = function( string ) {
    if ( string.length < 7 ) {
        console.log( 'What a short little word.' );
    } else if ( string.length > 7 ) {
        console.log( 'I\'m sorry, but thats too many to count.' );
    } else {
        console.log( '7, what a perfect choice!' );
    }
};

howdy();
numba( '7' );
numba( 'seventy' );
numba( 'university' );
inception( movieEndorsement, 'Star Wars' );

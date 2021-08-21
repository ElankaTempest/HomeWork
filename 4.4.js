/* let num = -2;
let resultSign = 0
if( num > 0 )
{
    resultSign = '+';
}
else( num < 0 )
{
    resultSign = '-';
}
console.log( num, resultSign ); */

/* let num = 0;
let resultSign = ( num > 0 ) ? '+' : ( num < 0 ? '-' : '0' );
console.log( num, resultSign ); */

/*let num = 7887;
let resultSign = '0';
switch( true )
{
    case ( num > 1 ):
        resultSign = '+';
        break;
    case ( num < 0 ):
        resultSign = '-';
        break;
    /* default:
    resultSign = '0' 
}
console.log( num, resultSign );*/

//4.10
function gerSign (num) 
{
    let result = ( num > 0 ) ? '+' : ( num < 0 ? '-' : '0' );
    return result;
}
let sign = getSign( 2048 );
console.log( sign );
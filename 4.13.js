 let sum = (n1, n2) => (n2 > n1) ? n1 + sum((n1) + 1, n2) : n1;

/* function sum (n1, n2)
{
     if (n1 < n2)
     {
         return n1 + sum ( n1 + 1, n2 );
     }
     return n2;
}*/

console.log( sum( 1, 3 ) );
console.log( sum( 1, 10 ) );
console.log( sum( 100, 1000 ) );
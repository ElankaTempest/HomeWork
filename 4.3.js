// Var. 1
let a = 10,
    b = 20;
    {
    a = a + b; //30
    b = a - b; //10
    a = a - b; //20
console.log( a, b );
    }

// Var. 2
/*let a = 10,
    b = 20;
    {
    a += b; //30
    b -= a; //10
    a -= b; //20    
console.log( a, b );
    }*/
/* for( let i = 1; i < 41; i++ )
{
if( i % 2 == 1 )
    {
    continue;
    }
    if( i % 4 == 0 && i % 10 == 0 ) 
    {
        ir = '^*' + i;
    }
    else if( i % 4 == 0 ) 
    {
        ir = '*' + i;
    }
    else if( i % 10 == 0 )
    { 
        ir = '^' + i; 
    }
    else
    {
        ir = i;
    }
    console.log( ir );
    } */

    let i = 1;
    while (i < 41 )
    {
        i++
    if( i % 2 == 1 )
        {
        continue;
        }
        if( i % 4 == 0 && i % 10 == 0 ) 
        {
            ir = '^*' + i;
        }
        else if( i % 4 == 0 ) 
        {
            ir = '*' + i;
        }
        else if( i % 10 == 0 )
        { 
            ir = '^' + i; 
        }
        else
        {
            ir = i;
        }
        console.log( ir );
        }
    
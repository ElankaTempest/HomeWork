const setErrorStyle = function( element )
{
    element.style.border        = '0.05rem solid #800000';
    element.style.background    = '#fff5f5';
};

const setSuccessStyle = function( element )
{
    element.style.border        = '0.05rem solid #a0a0a0';
    element.style.background    = '#ffffff';
};

const calculate = function()
{
    const element_operand1  = document.getElementById('Op1');
    const element_operand2  = document.getElementById('Op2');
    const element_action    = document.getElementById('action');
    const element_result    = document.getElementById('result');

    const operand1          = parseFloat( element_operand1.value );
    const operand2          = parseFloat( element_operand2.value );
    const action            = element_action.value.toString();

    let has_errors = false;

    if( !Number.isNaN( operand1 ) && operand1.toString().length > 0 && operand1.toString().length <= 16 )
    {
        element_operand1.value = operand1;
        setSuccessStyle( element_operand1 );
    }
    else
    {
        setErrorStyle( element_operand1 );
        has_errors = true;
    }

    if( !Number.isNaN( operand2 ) && operand2.toString().length > 0 && operand2.toString().length <= 16 )
    {
        element_operand2.value = operand2;
        setSuccessStyle( element_operand2 );
    }
    else
    {
        setErrorStyle( element_operand2 );
        has_errors = true;
    }

    let result = "";
    if( !has_errors )
    {
        const floating_digits_number = 4;
        switch( action )
        {
            case 'plus':
                result = parseFloat( ( operand1 + operand2 ).toFixed( floating_digits_number ) );
                break;

            case 'minus':
                result = parseFloat( ( operand1 - operand2 ).toFixed( floating_digits_number ) );
                break;

            case 'product':
                result = parseFloat( ( operand1 * operand2 ).toFixed( floating_digits_number ) );
                break;

            case 'friction':
                result = parseFloat( ( operand1 / operand2 ).toFixed( floating_digits_number ) );
                break;

            case 'fragment':
                result = parseFloat( ( operand1 % operand2 ).toFixed( floating_digits_number ) );
                break;

            case 'power':
                result = parseFloat( ( operand1 ** operand2 ).toFixed( floating_digits_number ) );
                break;

            default:
                setErrorStyle( element_action );
        }
    }

    element_result.value = result;
    return false;
};

const form      = document.getElementById('simple-calculator');
form.onsubmit   = calculate;

const button_calc   = document.getElementById('calculate');
button_calc.onclick = calculate;


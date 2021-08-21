<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>7.3</title>
</head>

<body>
<?php
    $str = 'Hello World';
    var_dump( myStrShuffle( $str ) );
    function myStrShuffle( (string)$str )
    {
        $arr1 = str_split($str);
        print_r($arr1);
        shuffle($arr1);
        $str = join($arr1);
        return "$str";
}
        
?>
</body>
</html>
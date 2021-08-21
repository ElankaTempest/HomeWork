/* let cityName = 'киїВ';
let one = cityName[0];
let oneL = one.toUpperCase();
let two = cityName.substring( 1 );
let twoL = two.toLowerCase();
let cityNameCapitalized = 'місто ' + oneL + twoL;
console.log( cityNameCapitalized ); */

/*let cityName = 'киїВ';
let cityName1 = cityName.replace(cityName, cityName.toLowerCase());
let cityNameCapitalized = cityName1.replace(cityName1[0], cityName1[0].toUpperCase());
console.log( cityNameCapitalized );
*/

function capitalize (cityName)
{
    let cityName1 = cityName.toLowerCase();
    let capitalize = cityName1.replace(cityName1[0], cityName1[0].toUpperCase());
    return (capitalize);
}
const parts = ['на', 'де', 'лез'];
function capitalize2 (cityName){
    let cityNameParts = cityName.split ('-')
    
    for(i = 0; i < cityNameParts.length; i++) {
        
        if (parts.indexOf(cityNameParts[i].toLowerCase()) >=0 ) {
            cityNameParts[i] = cityNameParts[i].toLowerCase()
        } else{
            cityNameParts[i] = capitalize(cityNameParts[i])
        }
    }
    return cityNameParts.join('-')
}
let cityNameCapitalized = capitalize2('нЬю-йорк-ДЕ');
console.log( cityNameCapitalized );



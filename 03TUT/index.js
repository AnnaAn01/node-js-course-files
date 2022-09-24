// usses common js, e use require
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

{
  /* we're calling the format function from date-fns, it accepts a new Date(),
then we add the format, year, month, day. Then a tab, then hours, minutes and seconds. 
*/
}
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());

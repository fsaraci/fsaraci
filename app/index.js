const concat = require('./concat')
const sum = require('./sum')

const fs = require('fs').promises;

const read = async () => {
  const data = await fs.readFile("array.json", "utf8");
  return new Buffer(data);
}
const numbersToAdd = [2, 2, 453, 64, 31]
const con = concat.concat(numbersToAdd);
const sumTotale = sum.sum(con);

console.log(`The result of the concat is: [ ${con} ]`)
console.log("Total sum is:" + sumTotale);

function resolveAfter2Seconds() {

    return new Promise(concat => {

        setTimeout(() => {

            concat(con);

        }, 2000);

    });

}


async function asyncCall() {

    try {
    const result = await resolveAfter2Seconds();

    console.log(result);
    }
    catch(err){
        console.log("there is an error");
        console.log(err);
    }

}

asyncCall();
/**
 * Continue & Break
 */

const orders = ['first', 'second', 'third'];

try {
    orders.forEach( order => {
        if(order === 'second') {
            throw new Error('Something went wrong!');
        }
        console.log(order);
    })
} catch (error) {   
    console.log(error.message);
}




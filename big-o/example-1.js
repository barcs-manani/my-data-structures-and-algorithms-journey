const members = ['nemo', 'dory', 'bruce'];
const large = new Array(1000).fill('nemo');

function findingNemo (array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found Nemo!");
        }
    }
    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1-t0) + " milliseconds");
};

findingNemo(members);
function fact(num){
    console.log("Num: ", num);
    if (num <= 1) {
        return 1;
    }
    else return num * fact(num - 1);
};

function handShake(people){
    console.log("PPs: ", people);
    if (people < 2) {
        console.log("Return: ", 0);
        return 0;
    }
    else {
        const recurse = handShake(people - 1) + (people - 1)
        console.log("Return: ", recurse);
        return recurse;
    }
}

// handShake(4);

function rabbits(months) {
    if (months === 0) {
        return 0;
    }
    if (months === 1) {
        return 1;
    }
    else {
        const recurse = rabbits(months - 1) + rabbits(months - 2);
        return recurse;
    }
};

rabbits(4);
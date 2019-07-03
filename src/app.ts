console.log('hey hey');

const x = 1;
const b = [1,2,3,45,5];
b.map((item) => item+1).filter(item => item>3);
console.log(() => () => x+1);

function add(x: number, y: number): number {
    return x+y;
}

const y = add(1,2);
console.log(y);

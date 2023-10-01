let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hello, ${name}!`;
};

console.log(greeting("Peter")); // "Hello, Peter!"

'use strict';

// clearing
console.clear();

// interpolated
console.log("Hello, I'm %s string", 'GREAT');

// styled
console.log("%cI'm some great text", 'font-size: 20px; background: #eee; color: white; text-shadow: 1px 1px 2px blue');

// warning!
console.warn('OH NO!');

// error :|
console.error('Shit!');

// info
console.info('crocodiles eat 3-4 people per year'); // for me works like regular console.log

// testing
console.assert(1 === 2, 'Wrong statement!')

// viewing DOM elements as an object
console.dir(window);

// grouping together
console.groupCollapsed('numbers'); // like console.group but in close state
[1, 2].forEach(num => console.log(num));
console.groupEnd();

// counting
console.count('wordA');
console.count('wordB');
console.count('wordA');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
    });

// table
console.table([{name: "John", age: 25}, {name: "Pete", age: 27}]); // works great for array of objects
// Assignment 1
function roll_d6(x){
  let count = 0;
  const rolls = [];
  while (count < x){
    let roll = Math.floor(Math.random()*7);
    rolls.push(roll);
    count++
  };
  return rolls;
};

function roll_stats(){
  const stat_array = [];
  while (stat_array.length < 6){
    let rolls = roll_d6(4);
    rolls.sort();
    rolls.shift();
    stat_array.push(rolls.reduce(function(total, num){return total + num}));
  };
  return stat_array;
};

// Task 1
const stats = roll_stats();
console.log(`task1 stat array ${stats}`)
stats.push(roll_d6(1)[0]);
console.log(`task1 stat array after push ${stats}`);
stats.pop();
console.log(`task1 stat array after pop ${stats}`);

// Task 2
const random_rolls = roll_stats();
console.log(`task2 stat array ${random_rolls}`);
random_rolls.sort();
console.log(`task1 stat array after sort ${random_rolls}`);

// Task 3
const new_array = roll_stats();
console.log(`task3 stat array ${new_array}`);

new_array_doubled = new_array.map(x => {return x*2});
console.log(`task3 stat array after doubling ${new_array_doubled}`);

even_array = new_array.filter(x => {return x % 2 == 0});
console.log(`task3 stat array after filtering ${even_array}`);

reduced_array = new_array.reduce((total, num) => {return total + num});
console.log(`task3 stat array after reducing ${reduced_array}`);

function print_numbers(...numbers){
  numbers[0].forEach(x => {console.log(x)})
};

final_array = [...even_array, ...new_array.filter(x => {return x % 2 != 0})];
print_numbers(final_array);

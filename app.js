// Question 1

function maxValue(numbers) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    let start = 0;
    let end = 0;

    for (let i = 0; i < numbers.length; i++) {
        let product = 1;
        for (let j = i; j < numbers.length; j++) {
            product *= numbers[j];
            if (product > maxProduct) {
                maxProduct = product;
                start = i;
                end = j;
            }
        }
    }

    return {
        maxProduct: maxProduct,
        subarray: numbers.slice(start, end + 1)
    };
}

const numbers = [2,3, -2, 4];
const result = maxValue(numbers);
console.log("Maximum Value :", 
        result.maxProduct);
console.log(
    "Subarray with Maximum Value:", 
        result.subarray);


// Question 2
let num = [2, 7, 11, 15]

let twoSum = function(num, target) {
    for(let i = 0; i <= num.length; i++){
        for(let j = 0; j <= num.length; j++){
            if(num[i] + num[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(twoSum(num, 13));
 



// Question 3:

let string = "Welcome to this Javascript Guide!";

let reverseStr = reverseWord(string,"");

var output = reverseWord(reverseStr," ");
console.log(output);

function reverseWord(string,separator){
  return string.split(separator).reverse().join(separator);
}

//Question 4:

let library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++) 
   {
    let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
 

//    Question 5:

function amountToCoins(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);
        
        return [coins[0]].concat(amountToCoins(left, coins));
      } else {
        coins.shift();
        return amountToCoins(amount, coins);
      }
    }
  }
  
  console.log(amountToCoins(46, [25, 10, 5, 2, 1]));


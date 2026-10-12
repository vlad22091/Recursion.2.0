const out = (x) => process.stdout.write(x + ' ');
const nl = () => process.stdout.write('\n');

// 1
function printUpTo(k) {
  if (k === 0) return;       
  printUpTo(k - 1);             
  out(k);                       
}


// 2.
function printRange(a, b) {
  out(a);
  if (a === b) return;       
  if (a < b) printRange(a + 1, b);
  else printRange(a - 1, b);
}


// 3.
function isPowerOfTwo(n) {
  if (n === 1) return true;     
  if (n % 2 !== 0) return false; 
  return isPowerOfTwo(n / 2);   
}


// 4.
function digitSum(n) {
  if (n === 0) return 0;
  return (n % 10) + digitSum((n - (n % 10)) / 10);
}


// 5.
function digitsRightToLeft(n) {
  if (n === 0) return;
  out(n % 10);                  
  digitsRightToLeft((n - (n % 10)) / 10);
}


// 6.
function digitsLeftToRight(n) {
  if (n === 0) return;
  digitsLeftToRight((n - (n % 10)) / 10);
  out(n % 10);                             
}



console.log('1. Від 1 до n, n = 5:');
printUpTo(5);
nl();

console.log('2. Від A до B, A = 1, B = 5:');
printRange(1, 5);
nl();
console.log('2. Від A до B, A = 5, B = 1:');
printRange(5, 1);
nl();

console.log('3. Степінь двійки, N = 8:');
console.log(isPowerOfTwo(8) ? 'YES' : 'NO');
console.log('3. Степінь двійки, N = 3:');
console.log(isPowerOfTwo(3) ? 'YES' : 'NO');

console.log('4. Сума цифр, N = 179:');
console.log(digitSum(179));

console.log('5. Цифри справа наліво, N = 179:');
digitsRightToLeft(179);
nl();

console.log('6. Цифри зліва направо, N = 179:');
digitsLeftToRight(179);
nl();

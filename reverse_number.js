const reverse = (num) => {
  let rev = 0;
  
  while (Math.abs(num) > 0) {
    rev = rev * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  if(rev>2**31-1 || rev<-(2**31)) return 0;
  return rev;
};

console.log(reverse(-123));

const countdown = (i) => {
  if (i <= 1) {
    // base case or exit condition
    return;
  }
  countdown(i - 1); // recursive call
  console.log({ i }); // the operation of recursive function
};

console.log(countdown(10));

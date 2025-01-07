function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  return n - 2 + (n === 3 ? 1 : n - 3);
}

console.log(iterativeFibonacci(6));

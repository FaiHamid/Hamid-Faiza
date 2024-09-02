var sum_to_n_a = function(n) {
  let result = 0;

  for(let i = 1; i <= n; i += 1) {
    result += i;
  }

  return result;
};

var sum_to_n_b = function(n) {
  return (n / 2) * (1 + n);
};

var sum_to_n_c = function(n) {
  if (n === 1) {
    return 1;
  }

  return n + sum_to_n_c(n - 1);
};


console.log(sum_to_n_a(6));
console.log(sum_to_n_b(6));
console.log(sum_to_n_c(6));
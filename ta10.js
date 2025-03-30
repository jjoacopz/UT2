function getSum(nums) {
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);  
  }
  
  const nums = [1, 2, 3, 4, 5, 1000, 2000, 1221];
  getSum(nums);  
  
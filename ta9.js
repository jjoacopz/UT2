function getOdds(nums) {
    const oddNumbers = nums.filter(num => num % 2 !== 0);
    console.log(oddNumbers);  
  }
  
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 587, 132312, 3821383, 2132321];
  getOdds(nums); 
  
function duplicates(nums) {
    if (!Array.isArray(nums)) {
      console.error("El parámetro debe ser un arreglo");
      return;
    }
  
    const countMap = nums.reduce((acc, num) => {
      if (typeof num === 'number') {
        acc[num] = (acc[num] || 0) + 1;
      }
      return acc;
    }, {});
  
    const duplicateCount = Object.values(countMap).filter(count => count > 1).length;
  
    console.log(duplicateCount);  
  }
  
  const nums = [1, 2, 2, 3, 4, 4, 4, 5];
  duplicates(nums);  
  
  
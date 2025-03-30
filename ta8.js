function findTheOldest(people) {
    return people.reduce((oldest, person) => {
      const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
      if (!oldest.age || age > oldest.age) {
        return { ...person, age };  
      }
      return oldest;
    }).name;  
  }
  
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Mirtha Legrand",
        yearOfBirth: 1900,
        yearOfDeath: 2000,
      }
  ];
  
  console.log(findTheOldest(people)); 
  
  
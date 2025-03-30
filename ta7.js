function getTheTitles(books) {
    return books.map(book => book.title);
  }
  
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
      title: 'Book3',
      author: 'Name3'
    },
    {
      title: 'Book4',
      author: 'Name4'
    }
  ];
  
  console.log(getTheTitles(books));  
  
// Sample list of books with authors and publication years
const books = [
    { title: 'Book 1', author: 'author 1', year: 2005 },
    { title: 'Book 2', author: 'author 2', year: 2015 },
    { title: 'Book 3', author: 'author 3', year: 2011 },
    // Add more books as needed
  ];
  
  // Function to capitalize the first letter of each word in a string
  function capitalizeName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Filter books published after 2010 and capitalize author names
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({
    title: book.title,
    author: capitalizeName(book.author),
  }));
  
  console.log("Filtered and Capitalized Books:", filteredBooks);
  
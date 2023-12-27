document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');
  
    bookForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const publishedYear = document.getElementById('published-year').value;
  
      if (title && author && publishedYear) {
        const listItem = document.createElement('li');
        listItem.textContent = `${title} by ${author}, ${publishedYear}`;
        bookList.appendChild(listItem);
  
        // Clear input fields after adding book
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('published-year').value = '';
      } else {
        alert('Please fill in all fields');
      }
    });
  });
  
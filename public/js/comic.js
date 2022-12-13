const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comic_id = document.querySelector('#comic-id').value.trim();
    const title = document.querySelector('#comic-title').value.trim();
    const issue = document.querySelector('#comic-issue').value.trim();
    const published_date = document.querySelector('#comic-date').value.trim();
    const publisher = document.querySelector('#comic-publisher').value.trim();
    const condition = document.querySelector('#comic-condition').value.trim();
    const image = document.querySelector('#comic-image').value.trim();
    const deck = document.querySelector('#comic-deck').value.trim();
    const user_id = document.querySelector('#comic-userid').value.trim();

  
    if (comic_id && title && issue && published_date && publisher && condition && image && deck && user_id) {
      const response = await fetch(`/api/comics`, {
        method: 'POST',
        body: JSON.stringify({ comic_id, title, issue, published_date, publisher, condition, image, deck, user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile'); // creation page?
      } else {
        alert('Failed to create a comic');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comics/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile'); //creation page?
      } else {
        alert('Failed to delete a comic');
      }
    }
  };
  
  document
    .querySelector('.new-comic-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.comic-form')
    .addEventListener('click', delButtonHandler);
  
async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_body = document.querySelector('input[name="post-body"]').value;
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          post_body
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/admin/');
    } else {
      alert("Sorry, something went wrong");
    }
}

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
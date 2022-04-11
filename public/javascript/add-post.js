async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
<<<<<<< HEAD
=======
  const post_url = document.querySelector('input[name="post-url"]').value;
>>>>>>> 56c0f19010b32935bcf0752342e853b410215de2

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
<<<<<<< HEAD
      title
=======
      title,
      post_url
>>>>>>> 56c0f19010b32935bcf0752342e853b410215de2
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

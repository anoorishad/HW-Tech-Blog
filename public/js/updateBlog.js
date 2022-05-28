const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#body').value.trim();
    const blogId = event.target.getAttribute("data-blogId")

    if (title && contents) {
        const response = await fetch(`/api/blogs/`+blogId, {
            method: 'PUT',
            body: JSON.stringify({ title, contents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create blog');
        }
    }
};


document
    .querySelector('.card')
    .addEventListener('submit', newFormHandler);

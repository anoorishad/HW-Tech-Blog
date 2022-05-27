const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#body').value.trim();
    const blogId = event.target.getAttribute("data-blogId")

    if (comment) {
        const response = await fetch(`/api/comments/`+blogId, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create comment');
        }
    }
};



document
    .querySelector('#newComment')
    .addEventListener('submit', newFormHandler);
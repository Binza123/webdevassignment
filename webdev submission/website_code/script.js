fetch('/data/coursesData.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Check if data is being loaded
       
    })
    .catch(error => {
        console.error('Error loading courses:', error);
    });


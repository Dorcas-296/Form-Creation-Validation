async function fetchUserData() {
    //  API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    //  Select the container where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data
        const response = await fetch(apiUrl);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        //  Clear loading message
        dataContainer.innerHTML = '';

        //  Create a <ul> to display user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name; // Set text to user's name
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        //  Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

//  Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
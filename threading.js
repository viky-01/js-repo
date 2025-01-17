const axios = require('axios');


const fetchData = async (url) => {
  try
  {
    console.log('Fetching data...');
    
    const response = await fetch(url); // For axios, use axios.get(url)
    
    // Check if the response status is OK
    if (!response.ok)
    {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    console.log('Data fetched successfully:', data);
    return data;

  }
  catch (error)
  {
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw the error if needed for higher-level handling
  }
};
(async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
  try
  {
    const posts = await fetchData(apiUrl);
    console.log('First post:', posts[0]); // Access the fetched data
  }
  catch (error)
  {
    console.error('Failed to retrieve posts:', error.message);
  }
})();

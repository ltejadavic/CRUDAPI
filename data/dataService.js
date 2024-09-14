const axios = require('axios');

// Function to fetch all posts
async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

// Function to fetch a single post by ID
async function fetchPostById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post ${id}:`, error);
        throw error;
    }
}

// Function to create a new post
async function createPost(postData) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}

// Function to update a post
async function updatePost(id, postData) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, postData);
        return response.data;
    } catch (error) {
        console.error(`Error updating post ${id}:`, error);
        throw error;
    }
}

// Function to delete a post
async function deletePost(id) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting post ${id}:`, error);
        throw error;
    }
}

// Export all functions
module.exports = {
    fetchPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost
};
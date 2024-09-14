const express = require('express');
const app = express();
const PORT = 5000;

// Import the dataService module
const dataService = require('./data/dataService');

// Middleware to parse JSON request bodies
app.use(express.json());

// GET /posts - Fetch all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        console.log('Data successfully retrieved and sent as response.');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

// GET /posts/:id - Fetch a single post by ID
app.get('/posts/:id', async (req, res) => {
    try {
        const post = await dataService.fetchPostById(req.params.id);
        console.log(`Post ${req.params.id} successfully retrieved.`);
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post' });
    }
});

// POST /posts - Create a new post
app.post('/posts', async (req, res) => {
    try {
        const newPost = await dataService.createPost(req.body);
        console.log('New post successfully created.');
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
});

// PUT /posts/:id - Update a post
app.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await dataService.updatePost(req.params.id, req.body);
        console.log(`Post ${req.params.id} successfully updated.`);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post' });
    }
});

// DELETE /posts/:id - Delete a post
app.delete('/posts/:id', async (req, res) => {
    try {
        await dataService.deletePost(req.params.id);
        console.log(`Post ${req.params.id} successfully deleted.`);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
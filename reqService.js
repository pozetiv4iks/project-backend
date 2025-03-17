import Post from './Post.js'

export default new class reqService {
    async create(post) {
        try {
            const createdPost = await Post.create(post);
            return createdPost;
        } catch (error) {
            console.error('Error creating post:', error);
            throw new Error('Could not create post');
        }
    }

    async get() {
        try {
            return await Post.find({});
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw new Error('Could not fetch posts');
        }
    }

    async getPostOfId(id) {
        try {
            const post = await Post.findById(id);
            if (!post) throw new Error('Post not found');
            return post;
        } catch (error) {
            console.error(`Error fetching post with ID ${id}:`, error);
            throw new Error('Could not fetch post');
        }
    }

    async update(id, data) {
        try {
            const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true });
            if (!updatedPost) throw new Error('Post not found');
            return updatedPost;
        } catch (error) {
            console.error(`Error updating post with ID ${id}:`, error);
            throw new Error('Could not update post');
        }
    }

    async delete(id) {
        try {
            const deletedPost = await Post.findByIdAndDelete(id);
            if (!deletedPost) throw new Error('Post not found');
            return { message: 'Post deleted successfully' };
        } catch (error) {
            console.error(`Error deleting post with ID ${id}:`, error);
            throw new Error('Could not delete post');
        }
    }

    async getByEmail(email) {
        try {
            const posts = await Post.find({ email });
            return posts;
        } catch (error) {
            console.error(`Error fetching posts for email ${email}:`, error);
            throw new Error('Could not fetch posts by email');
        }
    }
};

import Post from './Post.js'

export default new class reqService {
    async create (post) {
        const createdPost = await Post.create(post);
        return createdPost
    }

    async get () {
        const posts = await Post.find({});
        return posts
    }

    async getPostOfId (id) {
        const posts = await Post.findById(id);
        return posts
    }

    async update () {
        
    }

    async delete () {
        
    }

    async getByEmail () {
        
    }
}
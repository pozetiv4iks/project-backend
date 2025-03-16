import Post from './Post.js'

export default new class reqService {
    async get () {
        const posts = await Post.find({});
        return posts
    }

    async create (post) {
        const createdPost = await Post.create(post);
        return createdPost
    }

    async update () {
        
    }

    async delete () {
        
    }

    async getByEmail () {
        
    }
}
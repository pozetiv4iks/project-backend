import Post from "./Post.js";
import reqService from "./reqService.js";

export default new class reqController {
    async get(req, res) {
        try{
            const posts = reqService.get();
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const createPost = await Post.create(req.body);
            res.json(createPost);
        } catch (e) {
            res.status(500).json(e)
        } 
    }
    
    async update(req, res) {
        
    }
    
    async delete(req, res) {

    }

    async getByEmail(req, res) {
        
    }
}
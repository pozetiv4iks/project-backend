import Post from "./Post.js";

export default new class reqController {
    async get(req, res) {
        try{
            
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res) {
        try {
            const createdUser = await Post.create(req.body);
            res.json(user);
        } catch (e) {
            res.status(500).json(e)
        } 
    }
    
    async update(req, res) {
        
    }
    
    async delete(req, res) {

    }
}
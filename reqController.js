import Post from "./Post.js";
import reqService from "./reqService.js";

export default new class reqController {
    async get(req, res) {
        try {
            const posts = await reqService.get();
            res.json(posts);
        } catch (e) {
            res.status(500).json({ message: "Ошибка при получении постов", error: e.message });
        }
    }

    async getPostOfId(req, res) {
        try {
            const post = await reqService.getPostOfId(req.params.id);
            res.json(post);
        } catch (e) {
            res.status(500).json({ message: "Ошибка при получении поста", error: e.message });
        }
    }

    async create(req, res) {
        try {
            const createdPost = await reqService.create(req.body);
            res.json(createdPost);
        } catch (e) {
            res.status(500).json({ message: "Ошибка при создании поста", error: e.message });
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await reqService.update(req.params.id, req.body);
            res.json(updatedPost);
        } catch (e) {
            res.status(500).json({ message: "Ошибка при обновлении поста", error: e.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await reqService.delete(req.params.id);
            res.json(result);
        } catch (e) {
            res.status(500).json({ message: "Ошибка при удалении поста", error: e.message });
        }
    }

    async getByEmail(req, res) {
        try {
            const posts = await reqService.getByEmail(req.params.email);
            res.json(posts);
        } catch (e) {
            res.status(500).json({ message: "Ошибка при получении постов по email", error: e.message });
        }
    }
};
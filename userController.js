import User from './User.js';
import userService from './userService.js';
class UserController {
    async create(req,res){
        try {
            const user = await userService.create(req.body);
            res.json(user);
        } catch (e) {
            res.status(500).json(e)
        } 
    }

    async getUserOfId(req,res){
        try{
            const user = await userService.getUserOfId(req.body._id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updateUserOfId(id){
        try{
            const user = req.params;
            if(!user._id){
                res.status(400).json({message: 'not founded fot put'})
            }
            const updateUser = await User.findByIdAndUpdate(id, user, {new: true});
            return res.json(updateUser);

        } catch(e){
            res.status(500).json(e);
        }
    }

    async getUserEmail(req,res){
        try{
            const email = req.params.email;
            if(!email){
                res.status(400).json({message: "email not founded"})
            }
            const getUser = await User.findOne({"email": email});
            return res.json(getUser)
        } catch(e){
            res.status(500).json(e);
        }
    }
}

export default new UserController();
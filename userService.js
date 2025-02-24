import User from "./User.js";

class userService {
    async create(user){
            const createdUser = await User.create(user);
            return createdUser
        }
    
    async getUserOfId(id){
        if(!id) {
            throw new Error('id notfound')
        }
            const user = await User.findById(id)
            return user
        }
    
        async updateUserOfId(req,res){
            try{
                const user = req.params;
                if(!user._id){
                    res.status(400).json({message: 'not founded fot put'})
                }
                const updateUser = await User.findByIdAndUpdate(user._id, user, {new: true});
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

export default new userService();
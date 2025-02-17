import User from './User.js';

class UserController {
    async create(req,res){
        try {const {name, lastName, email, password, number, gender, age, status} = req.body;
        const post = await User.create({name, lastName, email, password, number, gender, age, status});
        console.log(req.body);
        res.json(post);
        } catch (e) {
            res.status(500).json(e)
        } 
    }

    async getUserOfId(req,res){
        try{
            const{id} = req.params;
            if(!id){
                res.status(400).json({message: 'id not founded'})
            }
            const user = await User.findById(id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
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

export default new UserController();
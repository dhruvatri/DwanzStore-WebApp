import User from "../model/user-schema.js";


export const userSignup = async(request, response)=>{
    try{

        // in backend we have already kept a unique check on username but frontend wont know 
        // make an explixit check
        const exist = await User.findOne({username : request.body.username });
        if (exist)
            {
                return response.status(401).json({message : 'Username Already Exist'});
            }
       const user = (request.body);
       const newUser = new User(user);
       await newUser.save();

       response.status(200).json({message:user});
    }catch(error)
    {
        response.status(500).json({message: error.message});
    }
};
const user = require('../models/user')
const bcrypt = require('bcrypt')

const createUser  = async(req,res)=>{
    const data = req.body
    const pass = data.password
    pass = await bcrypt.hash(pass,10)
    data.password = pass
    const obj = await user.create(data)
    res.json(obj) 
}

// const createUser = async(req,res)=>{
//     const data = req.body
//     let pass = data.password;

//     pass = await bcrypt.hash(pass, 10);
//     data.password = pass;
//     const object = await user.create(data)
//     res.json({"message":"Object created Successfully",object})
// }

const getAllUsers = async(req,res)=>{
const object = await user.find({})
res.json(object)
}

const getUserById = async(req,res)=>{
    try{
        const id = req.params.id        
        const object = await user.findById(id).populate('bookId')
        res.json(object)
    }catch(error){
        console.log(error)
        res.send("Error finding user")
    }
}

const updateUser = async(req,res)=>{
    const id = req.params.id
    const data = req.body
    const object =await user.findByIdAndUpdate(id,data)

    res.json(object)
}

const deleteUser = async (req,res)=>{
    const id = req.params.id
    await user.deleteOne(id);
}

module.exports  = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
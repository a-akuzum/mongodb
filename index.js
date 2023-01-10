const mongoose = require('mongoose');
//connection addresss here 
const { Schema } = mongoose;

//..........user schema

const userSchema = new Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String
});

const User = mongoose.model('User', userSchema)
async function fetchUser(){
    // const users = await User.find({ isMarried: true , salary: 0});
    const users = await User.findById("63bcd179852d29c593343b9e");
    console.log(users)
}

fetchUser();


// async function storeUserInfo(){
//     const user = new User({
//       name: "Aaron",
//       age: 36,
//       isMarried: true,
//       salary: 80000,
//       gender: "Male",
//     });
//     await user.save();
//     console.log(user)
// }

// storeUserInfo();
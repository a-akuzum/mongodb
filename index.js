const mongoose = require('mongoose');
//mongo hostname to connect here
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
    // const users = await User.findById("63bcd179852d29c593343b9e");

    // QUERY SELECT
    // const users = await User.find({ isMarried: true })
    // .select('name salary')
    // .sort('-salary')
    // .limit(1)

    //COMPARISON OPERATORS
    // const users = await User.find({ age: { $gte: 30} }) //gt, gte, lt, lte, in, nin
    // const users = await User.find({ salary: { $in: [80000, 70000]} }) //gt, gte, lt, lte, in, nin
    
    //AND OR OPERATORS
    // const users = await User.find({ salary: { $in: [80000, 70000]} })
    //                 .and([{ isMarried: true }, { age: { $lt: 40}} ])  //AND
                    
    const users = await User.find({ age: {$gt: 30}})
                            .or({ isMarried: false})
                            .select('name')
                            .sort('name')

    console.log(users)
}

// fetchUser();

//UPDATING A DB
async function updateUserInfo1(){
    const user = await User.findById("63bcd179852d29c593343b9b");
    user.salary = 1000000;
    await user.save()
    console.log(user)
}
async function updateUserInfo2(){
    const user = await User.findByIdAndUpdate("63bcd179852d29c593343b9b", 
    {age: 37, salary: 20000000}, {new: true, runValidators: true})
    
    console.log(user)
}

updateUserInfo1();

//DELETING USER FROM DB
async function deleteUser() {
  const user = await User.findByIdAndDelete("63bcd179852d29c593343b9b",
  );

  console.log(user);
}

deleteUser();
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
const mongoose = require('mongoose');
const UserModel = require('./models/users')

mongoose.connect('mongodb://127.0.0.1:27017/mongoTest');
/*
const data = [
    {
        name: 'panas',
        surname: 'myrniy!',
        birthday: Date.now()
    },
    {
        name: 'semen',
        surname: 'kolos!',
        birthday: Date.now()
    },
];


UserModel.create(data);
*/

const getAll = async() => {
    const person = await UserModel.find({});
    console.log(person);
};
getAll();


const getOne = async() => {
    const person = await UserModel.findOne({name: 'Yurko'});
    console.log(person);
};

const delOne = async() => {
    const person = await UserModel.deleteOne({name: 'semen'});
    
};

const updOne = async() => {
    const person = await UserModel.updateOne({name: 'panas'}, {surname: 'Ne Myrniy'});
};
getAll();
getOne();

//delOne();

//updOne();








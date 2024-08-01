// const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const db = require('../db/conn')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email id')
            }
        }
    },
    phone:{
        type:String,
        required:true,
        min:10
        
    },
    message:{
      type:String,
      required:true,
      minLength:3
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;

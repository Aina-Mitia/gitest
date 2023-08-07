import mongoose from "mongoose";
import { Schema } from "mongoose";

var Staff = new mongoose.Schema({
   
    name: {
        type: String 
    },
    firstName: {
        type: String 
    },
    
    email: {
        type: Number 
    },
    categorie: {
        type: String 
    },
    sex: {
        type: String 
    }
});
Staff.path('email').validate((val) => {
    var emailRegex:any;//nampiana
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
module.exports = mongoose.model('Staff',Staff);

var works = new mongoose.Schema({ //schoolid,name,loc,type
   
    school_id:{
        type: mongoose.Types.ObjectId,
        ref: "schools"
    },
    Staff_id:{
        type: Schema.Types.ObjectId,
        ref: "Staff"
    }
})
module.exports = mongoose.model('works',works);
var postlink = new mongoose.Schema({
    _id:{
        type:Number
    },
    Staff_id:{
        type: Schema.Types.ObjectId,
        ref: "Staff"
    },
    fct_id:{
        type: Schema.Types.ObjectId,
        ref: "function"
    }
})
module.exports = mongoose.model('postlink',postlink);


var school = new mongoose.Schema({ //schoolid,name,loc,type
    _id:{
        type:Number
    },
    type_id:{
        type: Schema.Types.ObjectId,
        ref: "school_id"
    },
    school_name: {
        type: String 
    },
      school_location: {
        type: String 
    }
})
module.exports = mongoose.model('school',school);
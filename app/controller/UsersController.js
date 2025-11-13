import UsersModel from "../model/UsersModel.js";
import { TokenEncode } from "../utility/TokenUtility.js";

// Registration

export const Registration = async (req, res) => {
    // console.log(req.body);
    try {        
        let reqBody = req.body;

        let result = await UsersModel.create(reqBody);

        return res.status(200).json({status: 'success', message: "Registration successful", result});
    } catch (err) {
        return res.status(200).json({status: "error", message: "Internal Server Error", err});
    }

    
}

// Login
export const Login = async (req, res) => {

    try {
        let reqBody = req.body;
        let data = await UsersModel.findOne(reqBody);
        
        if (data === null) {
            return res.status(200).json({status: "error", message: "User not Found"});
        }

        let token = TokenEncode(data["email"], data["_id"]);

        return res.status(200).json({status: 'success', message: "Login successful", Token: token});
    } catch (err) {
        console.log(err);
        return res.status(200).json({status: "error", message: "Internal Server Error", err});
    }
}

// Profile Details
export const ProfileDetails = async (req, res) => {

    try {
        let user_id = req.headers["user_id"];
        let data = await UsersModel.findOne({"_id": user_id}).select("-password");            // ot unshow some data of the database collection, write select("-propertyName")    for multiple{propertyName: 0, secondPropertyName: 0}
        console.log(data, user_id);
        return res.status(200).json({status: 'success', message: "Profile Details showing successfully", data}); 
        
    } catch (err) {
        return req.status(200).json({status: "error", message: "Internal Server error", err})
    }

   
}

// Profile Update
export const ProfileUpdate = async (req, res) => {
    try {
        let reqBody = req.body;
        let user_id = req.headers["user_id"];
        // let data = await UsersModel.findOne({"user_id": user_id}, reqBody);
        let data = await UsersModel.findOneAndUpdate({"_id": user_id}, reqBody,{new:true}).lean();

        if(!data?._id)return res.status(400).json({status: "error", message:"Profile not exist"});
    return res.status(200).json({status: 'success', message: "Profile Updated successful", data: data});
    } catch (err) {
        return res.status(200).json({status: "error", message: "Internal Server Error", err});
        
    }
}

// Email Verification
export const VerifyEmail = async (req, res) => {
    return res.status(200).json({status: 'success', message: "Email Verification successful"});
}

// Sending Verification Code
export const VerificationCode = async (req, res) => {
    return res.status(200).json({status: 'success', message: "Verification Code Sent Successfully"});
}

// Reset Password
export const ResetPassword = async (req, res) => {
    return res.starus(200).json({status: 'success', message: "Password Reset Successful"});
}
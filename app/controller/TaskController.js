import mongoose from 'mongoose';
import TasksModel from '../model/TasksModel.js';

// Create task
export const CreateTask = async (req, res) => {

    try {
        let reqBody = req.body;
        
        let user_id = req.headers["user_id"];

        reqBody.user_id = user_id;

        // console.log(reqBody);
        
        await TasksModel.create(reqBody);

        return res.status(200).json({status: "Success", message: "Task created successfully"});
    } catch (err) {
        return res.status(200).json({status: "error", message: "Internal server error"});
    }

}

// Update Task Status
export const UpdatedTaskStatus = async (req, res) => {

    try {
    let id = req.params.id;
    let status = req.params.status;
    let user_id = req.headers["user_id"];

    const exist = await TasksModel.findOne({_id: id, user_id: user_id}).lean()
    if(!exist?._id){
        return res.status(400).json({status: "Error", message: "Task not found or you are not authorized to update."});
    }

    let data =null
    if (exist?._id.toString() === id && user_id === user_id && status === "completed") {
        data = await TasksModel.updateOne({_id: id, user_id: user_id}, {status});
    }

    return res.status(200).json({status: "Success", message: "Task Status Updated Successfully", data});

    } catch (err) {
        console.error(err);
        return res.status(200).json({status: "Error", message: "Internal Server Error."});
    }
}

// Task List By Status
export const TaskListByStatus = async (req, res) => {
    try {
        
        let status = req.params.status;
        let user_id = req.headers["user_id"];

        let data = await TasksModel.find({user_id : user_id, status: status}).lean();

        return res.status(200).json({status: "Success", message: "Task List Created Successfully", data});
    } catch (err) {
    return res.status(200).json({status: "Error", message: "Internal Server Error."});        
    }
}

// Delete Task
export const DeleteTask = async (req, res) => {
    try {
        let id = req.params.id;
        let user_id = req.headers["user_id"];

        let data = await TasksModel.deleteOne({_id: id, user_id: user_id});

        return res.status(200).json({status: "Success", message: "Task deleted successfully", data});        
    } catch (err) {
    return res.status(200).json({status: "Error", message: "Internal Server Error.", err});        
    }
}

// Count Task
export const CountTask = async (req, res) => {

    try {
        let ObjectId = mongoose.Types.ObjectId;
        let user_id = req.headers["user_id"];
        let user_id_object = new ObjectId(user_id);

        let data = await TasksModel.aggregate([
            {$match : {user_id: user_id_object}},
            {$group : {_id: "$status", sum: {$count : {}}}}
        ])

        return res.status(200).json({status: "Success", message: "Task Counted Successfully", data});   
    } catch (err) {
    return res.status(200).json({status: "Error", message: "Internal Server Error.", err});        
        
    }
}
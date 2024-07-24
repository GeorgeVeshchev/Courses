import { logger } from "../libs/logger.js";
import { TodoModel } from "./schema.js";
import mongoose from 'mongoose';

export class TodoService {

    async getTodos() {
        try {
            const todos = await TodoModel.find({});
            return todos;
        } catch(error) {
            logger.error("error fetching:" , error )
            throw error;
        }

    }


    async getTodo(id) {
        try {
            const todo = await TodoModel.findByID(id);
            return todo;
        } catch(error) {
            logger.error("error fetching:" , error )
            throw error;
        }

    }

    async createTodo(todoData) {
        console.log({todoData})
        try {
            const todo = new TodoModel({
                _id: new mongoose.Types.ObjectId(),
                ...todoData,
            });
            const result = await todo.save();
            return result;
        } catch(error) {
            logger.error("error fetching" , error )
            throw error;
        }

    }

    async updateTodo(id,data) {
        try {
            const todo = await TodoModel.findByIDAndUpdate(id , data , {new : true});
            return todo;
        } catch(error) {
            logger.error("error fetching:" , error )
            throw error;
        }

    }

    async deleteTodo(id) {
        try {
            const todo = await TodoModel.findByIdAndDelete(id);
            return todo;
        } catch(error) {
            logger.error("error fetching:" , error )
            throw error;
        }

    }
}

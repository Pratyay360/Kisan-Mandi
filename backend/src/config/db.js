import mongoose from "mongoose";
import {config} from "./config.js";
const connectDB = async () => {

    try{
        mongoose.connection.on('connected', () => {
            console.log('Mongoose is connected')
        })

        mongoose.connection.on('error', (err) => {
            console.log('error connecting to Mongoose', err)
        })

        await mongoose.connect(config.mongoString, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

export default connectDB
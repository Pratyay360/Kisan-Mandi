import { config as conf } from "dotenv";
conf();

const _config = {
    mongoString: process.env.MONGO_STRING,
     port: process.env.PORT,
//   jwtSecret: process.env.JWT_SECRET,
//   twilioSid: process.env.TWILIO_ACCOUNT_SID,
//   twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
//   twilioNumber: process.env.SANDBOX_NUMBER

};

console.log(_config)
export const config = Object.freeze(_config);
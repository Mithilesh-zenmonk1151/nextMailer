const nodemailer = require("nodemailer");
import User from "@/models/userModel";
const bcrypt = require("bcrypt");
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = bcrypt.hash(userId.toString(), 10);
  if(emailType==="VERIFY"){
    await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
    },
      { new: true });
  }else if(emailType==="RESET"){
    await User.findByIdAndUpdate(userId,{
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
    },
      { new: true});
    
  }

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "46829d483d1849",
          pass: "d7da7ad29a920b"
        }
      });
      const mailOptions={
        from:'co20535@ccet.ac.in',
        to:email,
        subject: emailType==="VERIFY"? "Reset Your Password":"Verify ypour email"
      }

  
  } catch (error: any) {
    throw new Error(error.message);
  }
};

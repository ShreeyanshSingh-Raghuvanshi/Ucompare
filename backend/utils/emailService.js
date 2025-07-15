// import nodemailer from "nodemailer"

// // Create transporter
// const createTransporter = () => {
//   return nodemailer.createTransporter({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER || "your-email@gmail.com",
//       pass: process.env.EMAIL_PASS || "your-app-password",
//     },
//   })
// }

// // Send OTP email
// export const sendOTPEmail = async (email, otp, name) => {
//   try {
//     const transporter = createTransporter()

//     const mailOptions = {
//       from: process.env.EMAIL_USER || "your-email@gmail.com",
//       to: email,
//       subject: "Ucompare - Email Verification OTP",
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #007bff, #0056b3); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="color: white; margin: 0; font-size: 28px;">Ucompare</h1>
//             <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Product Comparison Platform</p>
//           </div>
          
//           <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
//             <h2 style="color: #333; margin-bottom: 20px;">Hello ${name}!</h2>
//             <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
//               Welcome to Ucompare! To complete your registration, please verify your email address using the OTP below:
//             </p>
            
//             <div style="background: white; padding: 25px; border-radius: 8px; text-align: center; margin: 25px 0; border: 2px solid #007bff;">
//               <h3 style="color: #333; margin-bottom: 15px;">Your Verification Code</h3>
//               <div style="font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px; font-family: monospace;">
//                 ${otp}
//               </div>
//               <p style="color: #666; margin-top: 15px; font-size: 14px;">
//                 This code will expire in 10 minutes
//               </p>
//             </div>
            
//             <p style="color: #666; font-size: 14px; line-height: 1.6;">
//               If you didn't create an account with Ucompare, please ignore this email.
//             </p>
            
//             <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
//               <p style="color: #999; font-size: 12px;">
//                 © 2024 Ucompare. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       `,
//     }

//     await transporter.sendMail(mailOptions)
//     console.log("OTP email sent successfully to:", email)
//   } catch (error) {
//     console.error("Error sending OTP email:", error)
//     throw new Error("Failed to send OTP email")
//   }
// }

















// import nodemailer from "nodemailer"

// // Create transporter with better error handling
// const createTransporter = () => {
//   const emailConfig = {
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   }

//   // If no email config, create a test account
//   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//     console.log("⚠️  Email credentials not found. Using test mode.")
//     return null
//   }

//   return nodemailer.createTransporter(emailConfig)
// }

// // Send OTP email
// export const sendOTPEmail = async (email, otp, name) => {
//   try {
//     const transporter = createTransporter()

//     // If no transporter (no email config), simulate sending
//     if (!transporter) {
//       console.log(`📧 [TEST MODE] OTP for ${email}: ${otp}`)
//       console.log(`📧 [TEST MODE] In production, this would be sent via email`)
//       return Promise.resolve()
//     }

//     const mailOptions = {
//       from: {
//         name: "Ucompare Team",
//         address: process.env.EMAIL_USER,
//       },
//       to: email,
//       subject: "🔐 Ucompare - Email Verification Code",
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Ucompare Email Verification</title>
//         </head>
//         <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
//           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
//             <!-- Header -->
//             <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 40px 30px; text-align: center;">
//               <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">Ucompare</h1>
//               <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Smart Product Comparison Platform</p>
//             </div>
            
//             <!-- Content -->
//             <div style="padding: 40px 30px;">
//               <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 24px;">Hello ${name}! 👋</h2>
//               <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
//                 Welcome to Ucompare! To complete your registration and start comparing products, please verify your email address using the verification code below:
//               </p>
              
//               <!-- OTP Box -->
//               <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border: 2px solid #3b82f6; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
//                 <h3 style="color: #1f2937; margin-bottom: 15px; font-size: 18px;">Your Verification Code</h3>
//                 <div style="font-size: 36px; font-weight: bold; color: #3b82f6; letter-spacing: 8px; font-family: 'Courier New', monospace; margin: 20px 0;">
//                   ${otp}
//                 </div>
//                 <p style="color: #6b7280; margin-top: 15px; font-size: 14px;">
//                   ⏰ This code will expire in 10 minutes
//                 </p>
//               </div>
              
//               <!-- Features -->
//               <div style="margin: 40px 0;">
//                 <h3 style="color: #1f2937; margin-bottom: 20px;">What you can do with Ucompare:</h3>
//                 <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
//                   <li>🔍 Compare products from any e-commerce website</li>
//                   <li>💡 Get intelligent recommendations based on price and features</li>
//                   <li>⚡ Make informed purchasing decisions quickly</li>
//                   <li>📊 Access detailed product analysis and comparisons</li>
//                 </ul>
//               </div>
              
//               <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin-top: 30px;">
//                 If you didn't create an account with Ucompare, please ignore this email. Your account will not be activated without verification.
//               </p>
//             </div>
            
//             <!-- Footer -->
//             <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
//               <p style="color: #9ca3af; font-size: 12px; margin: 0;">
//                 © 2024 Ucompare. All rights reserved.
//               </p>
//               <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
//                 Smart Product Comparison Platform
//               </p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     }

//     const info = await transporter.sendMail(mailOptions)
//     console.log(`✅ Email sent successfully to ${email}:`, info.messageId)
//     return info
//   } catch (error) {
//     console.error("❌ Error sending email:", error.message)

//     // Log the OTP to console for development
//     if (process.env.NODE_ENV === "development") {
//       console.log(`📧 [DEV MODE] OTP for ${email}: ${otp}`)
//     }

//     throw new Error("Failed to send verification email")
//   }
// }


















import nodemailer from "nodemailer"

// ✅ Corrected createTransporter function
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("⚠️  Email credentials not found. Using test mode.")
    return null
  }

  const emailConfig = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }

  // ✅ Proper function call
  return nodemailer.createTransport(emailConfig)
}

// ✅ Send OTP Email
export const sendOTPEmail = async (email, otp, name) => {
  try {
    const transporter = createTransporter()

    if (!transporter) {
      console.log(`📧 [TEST MODE] OTP for ${email}: ${otp}`)
      console.log(`📧 [TEST MODE] In production, this would be sent via email`)
      return Promise.resolve()
    }

    const mailOptions = {
      from: {
        name: "Ucompare Team",
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: "🔐 Ucompare - Email Verification Code",
      html: `<!-- your HTML content stays unchanged --> 
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ucompare Email Verification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">Ucompare</h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Smart Product Comparison Platform</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #1f2937; margin-bottom: 20px; font-size: 24px;">Hello ${name}! 👋</h2>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Welcome to Ucompare! To complete your registration and start comparing products, please verify your email address using the verification code below:
              </p>

              <!-- OTP Box -->
              <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border: 2px solid #3b82f6; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
                <h3 style="color: #1f2937; margin-bottom: 15px; font-size: 18px;">Your Verification Code</h3>
                <div style="font-size: 36px; font-weight: bold; color: #3b82f6; letter-spacing: 8px; font-family: 'Courier New', monospace; margin: 20px 0;">
                  ${otp}
                </div>
                <p style="color: #6b7280; margin-top: 15px; font-size: 14px;">
                  ⏰ This code will expire in 10 minutes
                </p>
              </div>

              <!-- Features -->
              <div style="margin: 40px 0;">
                <h3 style="color: #1f2937; margin-bottom: 20px;">What you can do with Ucompare:</h3>
                <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
                  <li>🔍 Compare products from any e-commerce website</li>
                  <li>💡 Get intelligent recommendations based on price and features</li>
                  <li>⚡ Make informed purchasing decisions quickly</li>
                  <li>📊 Access detailed product analysis and comparisons</li>
                </ul>
              </div>

              <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin-top: 30px;">
                If you didn't create an account with Ucompare, please ignore this email. Your account will not be activated without verification.
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                © 2024 Ucompare. All rights reserved.
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
                Smart Product Comparison Platform
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log(`✅ Email sent successfully to ${email}:`, info.messageId)
    return info
  } catch (error) {
    console.error("❌ Error sending email:", error.message)

    if (process.env.NODE_ENV === "development") {
      console.log(`📧 [DEV MODE] OTP for ${email}: ${otp}`)
    }

    throw new Error("Failed to send verification email")
  }
}

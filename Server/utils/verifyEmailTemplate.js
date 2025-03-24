const verifyEmailTemplate = ({name, url}) => {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; text-align: center;">
        <div style="max-width: 600px; background: #fff; padding: 20px; margin: auto; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333;">Welcome to BlinkeyIT, ${name}!</h2>
            <p style="color: #555; font-size: 16px;">We're excited to have you on board. Please verify your email to get started.</p>
            <a href="${url}" style="display: inline-block; padding: 12px 20px; background-color: #007BFF; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify Email</a>
            <p style="color: #777; font-size: 14px; margin-top: 20px;">If you didn’t create an account, you can safely ignore this email.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px;">&copy; 2025 BlinkeyIT. All rights reserved.</p>
        </div>
    </div>`;
}

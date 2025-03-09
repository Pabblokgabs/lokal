import jwt from "jsonwebtoken";
import nylas from 'nylas'

export const generateOTP = async (email, res) => {
	const code = Math.floor(1000 + Math.random() * 9000).toString();

	const token = jwt.sign(
		{
			email,
			code,
		},
		process.env.EMAIL_ACTIVATION_SECRET,
		{
			expiresIn: "5m",
		}
	);
	try {
		await nylas.messages.sent({
			identifier: process.env.USER_GRANT_ID,
			requestBody: {
				to: [{ email: email }],
				subject: "Verify your email address",
				body: `
          <p>Hi there,</p>
          <p>Thanks for registering at TheSpot</p>
          <p><strong>use the below code to verify your registration</strong></p>
          <h4><strong>${code}</strong></p>
          <br/>
          <br/>
          <p>Please ignore the email if you received it in error</p>
          `,
			},
		});
	} catch (error) {
		console.log(error);
	}
	res.status(201).json({
		success: true,
		token,
	});
};

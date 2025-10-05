import { catchAsync } from "../utils/catchAsync.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = catchAsync(
  async (email, verificationToken) => {
    const recipient = [{ email }];
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: verificationToken,
      category: "Email Verification",
    });

    console.log("Verification Email sent successfully", response);
  }
);

export const sendWelcomeEmail = catchAsync(async (email, name) => {
  const recipients = [{ email }];
  const response = await mailTrapClient.send({
    from: sender,
    to: recipients,
    template_uuid: "0a370b9c-e863-48d6-8423-6a111d8432f8",
    template_variables: {
      name: name,
    },
  });

  console.log("Welcome Email sent successfully", response);
});

import nodemailer, { SendMailOptions } from 'nodemailer';

// async function CreateTestAcc() {
//   const acc = await nodemailer.createTestAccount();
//   console.log({ acc });
// }
//
// CreateTestAcc();

const smtp = {
  user: 'mqpqut2mhrkwmtyq@ethereal.email',
  pass: 'hJ74NXSX4ymxhfpwTF',
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
};

const transporter = nodemailer.createTransport({
  ...smtp,
  auth: { user: smtp.user, pass: smtp.pass },
});

export async function SendEmail(payload: SendMailOptions) {
  transporter.sendMail(payload, (err, info) => {
    if (err) {
      console.error(err, 'Error sending email');
      return;
    }

    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
  });
}

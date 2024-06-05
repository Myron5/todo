import nodemailer from 'nodemailer';

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
};

const transporter = nodemailer.createTransport(config);

export default class MainService {
  private emailOptions = {
    from: process.env.MAIL_USER
  };

  async sendConfirmEmail(email: string, verifToken: string) {
    await transporter.sendMail({
      ...this.emailOptions,
      subject: 'Email verification',
      to: email,
      html: `<a href="${process.env.BASE_URL_FRONTEND}/confirm/${verifToken}">Click to verify</a>`
    });
  }

  async sendConfirmResetPassword(email: string, resetPassToken: string) {
    await transporter.sendMail({
      ...this.emailOptions,
      subject: 'Password Reset',
      to: email,
      html: `<a href="${process.env.BASE_URL_FRONTEND}/resetpassword/${resetPassToken}">Click to reset your password</a>`
    });
  }
}

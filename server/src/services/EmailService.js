const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    async sendReservationConfirmation(email, name, date) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Reservasi Janji Temu Dikonfirmasi',
            text: `Halo ${name},\n\nTerima kasih telah melakukan reservasi janji temu. Jadwal Anda telah dikonfirmasi pada tanggal ${date}.\n\nSalam hormat,\nPT CIMT`
        };

        try {
            await this.transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error('Failed to send email:', error);
            return false;
        }
    }
}

module.exports = new EmailService();
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'danescu.stefan96@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'danescu.stefan96@gmail.com',
        subject: 'Have a nive day!',
        text: `Thanks for using our app, ${name}. I hope you enjoyed it!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

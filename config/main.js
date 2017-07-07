module.exports = {
  'mongoose': 'mongodb://127.0.0.1:27017/scrambledu',
  'secret_key': 'f655d2c0da9cba2102628231c39b175dbddbd1dc72c42971861a5a4d2eb6d15ceee17c9e289660b36d549fa8c1562b32f5009d767c8ac91437cea67eb3b99e71',
  'nodemailer': {
    'email': 'dmonmad@gmail.com',
    'password': 'pramayu10'
  },
  'facebookAuth': {
    'clientID': '405557799819098',
    'clientSecret': '184c114e64eea8e916d7f6b31de883e2',
    'callbackURL': 'http://localhost:3000/signup/auth/facebook/callback'
  },
  'googleAuth': {
    'clientID': '144057272005-3b01j2lfohtujsa3gn43vh5pnubfoo28.apps.googleusercontent.com',
    'clientSecret': 'xtwMmuwRINSCGhVwc4oh1wWF',
    'callbackURL': 'http://localhost:3000/signup/auth/google/callback'
  },
  'twilio': {
    'SID': 'AC6cf33455f6b25940d9ce1751204e8670',
    'AUTH': '8f7c056965e253a6217d9ab5d2a47745'
  }
}

export default {
  'githubAuth': {
    'clientID': process.env.CLIENT_ID,
    'clientSecret': process.env.CLIENT_SECRET,
    'callbackURL': 'http://127.0.0.1:3000/auth/callback/github'
  }
}

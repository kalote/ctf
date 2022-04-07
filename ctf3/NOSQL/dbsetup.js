require('dotenv').config();
const mongoose = require('mongoose');
const mongoUri = process.env.MONGOURI || 'mongodb://mongodb/nosequel';
const User = require('./userSchema');
mongoose.connect(mongoUri);

User.count({}, (err, cnt) => {
  if (err)
    return console.error(err);
  if (cnt > 0) {
    console.log("Users already in DB");
    mongoose.disconnect();
    return 1;
  } else {
    let admin = new User({name: 'Admin', username: 'admin', password: 'm0r3c0mpl1c4t3d57uff'});
    admin.save((err, admin) => {
      if (err)
        return console.error(err)
      console.log("Admin user created");
      let user = new User({name: 'User', username: 'user', password: 'th1s1ssp4rt4'});
      user.save((err, user) => {
        if (err)
          return console.error(err)
        console.log("User user created");
        mongoose.disconnect();
        return 1;
      });
    });
  }
});

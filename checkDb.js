const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const p = await mongoose.connection.collection('projects').findOne({ title: /Delta State University Of Science/i });
  console.log(p);
  process.exit(0);
});

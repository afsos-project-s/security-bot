const mongoose = require("mongoose")

function ConnectDB(uri) {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((result) =>
      console.log("Mongoose connected to ", result.connections[0].host)
    )
    .catch((err) => console.log("error connecting to the database", err));
}

module.exports = ConnectDB
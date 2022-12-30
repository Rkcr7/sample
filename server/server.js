const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const multer = require("multer");
const path = require("path");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: ["http://localhost:4200"],
  credentials: true,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "HRSMS-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
);

const db = require("./app/models");
const { user } = require("./app/models/index");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HRMS application." });
});

// routes
const routes = require("./app/routes/index");
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
app.use("/", routes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

///////// For image upload

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100000000,
  },
});
app.use("/profile", express.static("upload/images"));
app.patch("/upload/:id", upload.single("profile"), async (req, res) => {
  const taskUpdate = await user.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        image: `http://localhost:${PORT}/profile/${req.file.filename}`,
      },
    }
    // { new: true }
  );

  taskUpdate.save((err, data) => {
    if (!err) {
      res.json({
        success: 1,
        profile_url: `http://localhost:${PORT}/profile/${req.file.filename}`,
      });
    } else {
      console.log(err);
    }
  });
});

/////////////////

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "employee",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'employee' to roles collection");
      });

      new Role({
        name: "hr",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'hr' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

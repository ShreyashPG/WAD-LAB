require("dotenv").config();
const bcrypt = require("bcrypt");
const pool = require("../config/db.js");
const generateUserToken = require("../utils/generateUserToken");

const signup = async (req, res) => {
  var {
    first_name,
    last_name,
    mobile_number,
    college_email,
    is_alumini,
    email,
    password,
  } = req.body;

  try {
    const timestamp = new Date();

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    if (!is_alumini) {
      is_alumini = false;
    }

    const userQuery = `INSERT INTO users (first_name, last_name, mobile_number, 
college_email, is_alumini, email, password, created_at) VALUES 
($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
    const userQueryParams = [
      first_name,
      last_name,
      mobile_number,
      college_email,
      is_alumini,
      email,
      hashedPassword,
      timestamp,
    ];
    const userQueryData = await pool.query(userQuery, userQueryParams);
    const token = await generateUserToken(userQueryData.rows[0].id);
    delete userQueryData.password;

    res.status(201).json({
      error: false,
      message: "Signup Successful. Welcome aboard!",
      data: {
        token,
        user: userQueryData.rows[0],
      },
    });
  } catch (err) {
    if (err.code === "23505") {
      res.status(400).json({
        error: true,
        message:
          "User with this details already exists! Please use a different email or phone number to create your account.",
      });
    } else {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal Server Error!" });
    }
  }
};

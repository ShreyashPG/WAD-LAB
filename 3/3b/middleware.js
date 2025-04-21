const pool = require("../config/db.js");

const validateUserData = (req, res, next) => {
  const {
    first_name,
    last_name,
    mobile_number,
    college_email,
    is_alumini,
    email,
    password,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !mobile_number ||
    !college_email ||
    !email ||
    !password
  ) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required!" });
  }

  if (
    validateEmail(email) &&
    validateMobileNumber(mobile_number) &&
    validatePassword(password)
  ) {
    next();
  } else {
    res.status(400).json({ error: true, message: "Invalid Data!" });
  }
};

const isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: true,
        message: "You must be logged in to perform this action.",
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const tokenQueryParams = [token];
    const tokenQuery = `SELECT * FROM user_token WHERE token = $1`;
    const tokenQueryData = await pool.query(tokenQuery, tokenQueryParams);

    if (tokenQueryData.rowCount < 1) {
      return res.status(401).json({ error: true, message: "Invalid Token!" });
    }

    const userId = tokenQueryData.rows[0].fk_user;
    const userQuery = `SELECT id FROM users WHERE id = $1`;
    const userQueryParams = [userId];
    const userQueryData = await pool.query(userQuery, userQueryParams);

    req.user = userQueryData.rows[0];
    req.token = token;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error!" });
  }
};

module.exports = {
  validateUserData,
  isAuthenticated,
};

import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  // Generate JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d", // Token expiration set to 7 days
  });

  // Set token as a cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === "production", // Ensure cookies are sent over HTTPS in production
    sameSite: "strict", // Ensures the cookie is sent only to the same site
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  });

  return token; // Return the token in case you need to send it elsewhere
};

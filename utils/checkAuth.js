import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.jWT_SECRET);

      req.userId = decoded.id

      next()
    } catch (error) {
      return res.json({
        message: "No token provided",
      });
    }
  } else {
    return res.json({
      message: "Access denied, invalid token",
    });
  }
};

  import jwt from "jsonwebtoken";

  const isAuthenticated = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "User not authenticated",
        });
      }

      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      // console.log("Decoded token payload:", decoded);
      if (!decoded) {
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });
      }

      // console.log("Decoded role:", decoded.role); // Debug log for role
      req.user = { _id: decoded.userId, name:decoded.name, role: decoded.role };
      next();
    } catch (error) {
      console.error("Authentication error:", error);

      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Token expired. Please log in again.",
        });
      }

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };

  export default isAuthenticated;
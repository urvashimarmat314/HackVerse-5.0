export default function isRole(roles) {
    return (req, res, next) => {
      const userRole = req.user.role; // Assume `isAuthenticated` adds `req.user`
      if (!roles.includes(userRole)) {
        return res.status(403).json({
          success: false,
          message: "Access denied. Insufficient permissions.",
        });
      }
      next();
    };
  }
  
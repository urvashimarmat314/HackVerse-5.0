import express from "express";
import {register, login, logout} from "../controllers/index.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(isAuthenticated, logout);
router.route('/authcheck').get(isAuthenticated, (req, res) => {
    // console.log(req.user);
    res.status(200).json({
        success: true,
        message: "User is authenticated",
        user: {name: req.user.name, role: req.user.role}
      });
});

export default router;
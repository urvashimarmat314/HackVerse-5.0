import express from "express";
import {setDoctorProfile, viewDoctorProfile, updateDoctorProfile} from '../controllers/index.js';
const router = express.Router();


router.route('/').post(setDoctorProfile);
router.route('/view').get(viewDoctorProfile);
router.route('/update').put(updateDoctorProfile);

export default router;
import express from "express";
import {setPatientProfile, viewPatientProfile, updatePatientProfile} from '../controllers/index.js';
const router = express.Router();


router.route('/').post(setPatientProfile);
router.route('/view').get(viewPatientProfile);
router.route('/update').put(updatePatientProfile);

export default router;
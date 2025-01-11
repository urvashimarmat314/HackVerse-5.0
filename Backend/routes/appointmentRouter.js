import express from "express";
import isRole from "../middleware/isRole.js";
import {
  getDepartments,
  getDoctorsByDepartment,
  scheduleAppointment,
  getAppointmentsForDoctor,
} from "../controllers/index.js";
const router = express.Router();

router.route("/uniqueDepartments").get(getDepartments);
router.route("/doctors").get(getDoctorsByDepartment);
router.route("/schedule").post(scheduleAppointment);
router
  .route("/dashboard/doctor")
  .get(isRole(["Doctor"]), getAppointmentsForDoctor);
// router.route("/dashboard/patient").get(isRole(["Patient"]), getAppointmentsForPatient);
// router.route("/status").get(checkStatus);
// router.route("/status").put(newStatus);

export default router;

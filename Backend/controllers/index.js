import { register, login, logout } from "./user.controllers.js";
import {
  setPatientProfile,
  viewPatientProfile,
  updatePatientProfile,
} from "./patient.controllers.js";
import {
  setDoctorProfile,
  viewDoctorProfile,
  updateDoctorProfile,
} from "./doctor.controllers.js";
import {
  scheduleAppointment,
  getDepartments,
  getDoctorsByDepartment,
  getAppointmentsForDoctor,
} from "./appointment.controller.js";

export {
  register,
  login,
  logout,
  setPatientProfile,
  viewPatientProfile,
  updatePatientProfile,
  setDoctorProfile,
  viewDoctorProfile,
  updateDoctorProfile,
  scheduleAppointment,
  getDepartments,
  getDoctorsByDepartment,
  getAppointmentsForDoctor,
};

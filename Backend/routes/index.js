import userRouter from "./userRouter.js";
import patientRouter from "./patientRouter.js";
import doctorRouter from "./doctorRouter.js";
import appointmentRouter from "./appointmentRouter.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import isRole from "../middleware/isRole.js";

export default (app) => {
  // Route for user API
  app.use("/api/user", userRouter);

  // Middleware to authenticate the user
  app.use("/api/user/profile", isAuthenticated);

  // Role-based routes for doctors and patients
  app.use("/api/user/profile/doctor", isRole(["Doctor"]), doctorRouter);
  app.use("/api/user/profile/patient", isRole(["Patient"]), patientRouter);

  app.use("/api/user/appointment", isAuthenticated, appointmentRouter);
};

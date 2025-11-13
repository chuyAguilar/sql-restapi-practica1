import { Router } from "express";
import { getemployes, CreateEmployee, GetEmployeeById, DeleteEmployee, UpdateEmployee } from "../controllers/employes.controller.js";

const router = Router();

router.get(`/employees`, getemployes);

router.post(`/employees`, CreateEmployee);

router.get(`/employee/:id`, GetEmployeeById);

router.delete(`/employee/:id`, DeleteEmployee);

router.patch(`/employee/:id`, UpdateEmployee);

export default router
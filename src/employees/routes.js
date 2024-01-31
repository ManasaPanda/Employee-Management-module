const { Router}=require('express');

const controller= require("./controller");

const router= Router();

router.get('/getemployees',controller.getemployees);

router.post("/add_User",controller.addUser);

router.put("/update_dept/:dept_id",controller.Updatedept);

router.put("/Change_admin/:company_id",controller.Updateadmine);

router.post("/add_company",controller.addcompany);

router.post("/add_employee",controller.addemployee);

router.post("/add_dept",controller.adddept);

router.get("/getdeptdetails",controller.getdeptdetails);

router.get("/getallcompanys",controller.getcompany);

router.get("/GetAllInformation",controller.details);

module.exports = router;
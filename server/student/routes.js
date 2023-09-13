const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.delete("/:id", controller.removeStudent);
router.put("/:id", controller.updateStudent);
router.post("/", controller.addStudent);

module.exports = router;

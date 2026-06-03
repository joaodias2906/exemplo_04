var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");


router.get("/", (req, res) => {
    res.render("pages/index", { "erros": null, "resultado": null, "valores": { "nota":"digite qual é o resultado" } });
});


router.post("/resul",
    router.post(
        "/index",
        body("nota").isLength({ min: 1, max: 3 })
            .withMessage("A resultado deve ter de 1 a 3 digitos!"),

        (req, res) => {


            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                console.log(erros);
                return res.render("pages/index", { "erros": erros, "valores": req.body, "resultado": null });
            }


            let nota = Number(req.body.nota);

            if (nota >= 9 && nota <= 10) {
                var resul = "Nota A";
            } else if (nota >= 7.5 && nota <= 9) {
                var resul = "Nota B";
            } else if (nota >= 6 && nota <= 7.5) {
                var resul = "Nota C";
            } else if (nota >= 4 && nota <= 6) {
                var resul = "Nota D";
            } else {
                var resul = "Nota E";
            };

            let objJson = { "resul": resul }

            res.render("pages/index", { "erros": null, "valores": req.body, "resultado": objJson });

        }));


module.exports = router;
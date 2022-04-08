const express = require ("express");
const router = express.Router();

let courses = [];

// Hämtar 
router.get("/all", (request, response ) => {
    console.log({
     method: request.method,
     data: courses,
    });
    response.json({
        status: "success",
        method: request.method,
        data: courses,
    });
});

router.post('/create', (request, response) => {
    console.log({
        method: request.method,
        body: request.body, 
    })
    response.json({
        status: "success",
        method: request.method,
        body: request.body,
    });
 
})

module.exports = router;
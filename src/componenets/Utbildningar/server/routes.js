const express = require ("express");
const router = express.Router();

let courses = [];

// Hämtar 
router.get("/read", (request, response ) => {
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
    });
    const courses = {
        id: request.body.id,
        title: request.body.title,
        description: request.body.description,
    };
    courses.push(course);
    
    response.json({
        status: "success",
        method: request.method,
        body: request.body,
    });
 
})

module.exports = router;
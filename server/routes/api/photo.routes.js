const photoRouter = require('express').Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

photoRouter.put('/', async (req, res) => {
    try {
        const file = req.files.pic
        const picURL = 
    }
})
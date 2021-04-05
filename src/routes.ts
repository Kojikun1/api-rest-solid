import express from 'express';

const router = express.Router();

router.get('/users', (resquest, response) => {
    return response.status(201).send();
})

export default router;
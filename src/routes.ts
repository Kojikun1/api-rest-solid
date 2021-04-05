require('dotenv').config();
import express from 'express';
import { createUserController } from './useCases/CreateUser';

const router = express.Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
})

export default router;
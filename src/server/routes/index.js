import express from 'express';
import { getHomepage } from './home';
import { getAboutPage } from './about';

const router = express.Router();

router.get('/', getHomepage);
router.get('/about', getAboutPage);

export default router;

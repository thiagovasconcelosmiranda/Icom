import {Router} from 'express';
import * as homeController from '../controllers/homeController';
import * as aboutController from '../controllers/aboutController';
import * as faqController from '../controllers/faqController';
import * as privacyController from '../controllers/privacy';
import * as blogController from '../controllers/blogController';
import * as contactController from '../controllers/contactController';
import * as serviceController from '../controllers/serviceCartController';
import * as digitalController from '../controllers/digitalController';

export const router = Router();

router.get('/', homeController.home);
router.get('/sobre', aboutController.about);
router.get('/faq', faqController.faq);
router.get('/blog', blogController.blog);
router.get('/blog/:pag/:namePage', blogController.blogPag)
router.get('/privacidade', privacyController.privacy);
router.get('/contato', contactController.contact);
router.post('/new-contact', contactController.createContact);
router.get('/atendimento-cartorios', serviceController.ServiceCart);
router.get('/digital', digitalController.digital);
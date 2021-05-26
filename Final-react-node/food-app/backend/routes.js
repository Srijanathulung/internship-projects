import { Router} from 'express';
import * as endpoints from './Constants/endpoints';
import {validateCustomerCreation } from './schema/contact';


const router = Router();


router.get('/' , (request,response,next) => {
    response.json({
         name:'meals-api',
         version: '1.0.0'
     });
 
 });
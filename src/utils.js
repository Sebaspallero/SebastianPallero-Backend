import {fileURLToPath} from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


//MULTER CONFIG

/* let storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname+'/public')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+ file.originalName)
    }
});

export const uploader = multer({storage:storage}); */
export default __dirname;
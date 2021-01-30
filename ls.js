
/**fs is not a global (like process) but a module — 
 * that means you'll need to require it: const fs = require('fs'); */
const fs = require('fs')

 fs.readdir('./','utf8',(err,files)=>{
   if(err){
       throw err;
   }else{
       process.stdout.write(files.join('\n'));
       process.stdout.write('promt >');
   }

 })


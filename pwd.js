
const pwd = function(){
   process.stdout.write('prompt >');  
  process.stdin.on('data',(data)=>{
  const cmd = data.toString().trim();

//   process.stdout.write(`pwd = ${process.cwd()}`);}
if(cmd === 'pwd'){
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt >');
}else{
  process.stdout.write('You typed:' + cmd);
  process.stdout.write('\nprompt >');
}
})
} 
pwd()
//So you will be able to execute it in this file!
module.exports = pwd
// The other way to express module.exports = function(){




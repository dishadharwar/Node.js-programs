var readline= require('readline');  // readline is a wrapper
var util=require('util');
var RL= readline.createInterface(process.stdin,process.stdout);

RL.question('what is ur name?', (name)=>{

    RL.setPrompt(name + " how old are you?");

    RL.prompt(); // after prompting, we have set up a listener.

    RL.on('line',(age)=>{

        if(age < 18){
            
                util.log(`${name.trim()} because you are ${age} years old, you cannot use it`);
            RL.close();
        }
        else {
            util.log(`${name.trim()} is great that you are ${age} years old, beacuse you can now enjoy our services`);
            RL.close();
        }
    });
 });           

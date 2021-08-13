function saturdayFun(event = 'roller-skate'){
     return `This Saturday, I want to ${event}!`;
}   
saturdayFun('bathe my dog');


function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`;
}
mondayWork('work from home');


function wrapAdjective(char = '*'){
    return  function(adj = 'special'){
       return `You are ${char}${adj}${char}!`;
    }

} 
wrapAdjective("*")("a hard worker");
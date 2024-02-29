// Immidiately invoked functions(IIFE)

// sometime there is problem due to global scopes pollution so the variables pollution can be removed by IIFE
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //when we invoke a IIFE then we must stop the contex so we use semicolon to end IIFE
( (name)=>{
    //unnamed IIFE
        console.log(`DB is connected to ${name}`)
    }
)("sonal");
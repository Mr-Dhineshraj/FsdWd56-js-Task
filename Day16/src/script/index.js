(function(){

    let coundown=document.getElementById("timer")
    setTimeout(function(){
        coundown.innerText="10";
        setTimeout(function(){
            coundown.innerText="9";
            setTimeout(function(){
                coundown.innerText="8";
                setTimeout(function(){
                    coundown.innerText="7";
                    setTimeout(function(){
                        coundown.innerText="6";
                        setTimeout(function(){
                            coundown.innerText="5";
                            setTimeout(function(){
                                coundown.innerText="4";
                                setTimeout(function(){
                                    coundown.innerText="3";
                                    setTimeout(function(){
                                        coundown.innerText="2";
                                        setTimeout(function(){
                                            coundown.innerText="1";
                                            setTimeout(function(){
                                                coundown.textContent=("Happy Independence day")
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);                   
                    },1000);
                },1000);
            },1000);
        },1000);  
    },1000);
})();


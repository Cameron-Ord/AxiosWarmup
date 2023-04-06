let injector = document.querySelector(`#section_main`);





injector.insertAdjacentHTML(`beforeend`,

 `<article>
<span class="main_span">

<button class="clickme">USE API</button>

</span>
</article>`



);



function callAPI(){


    axios.request({

        url: `https://api.adviceslip.com/advice`
    }).then(successFunction).catch(failureFunction);




};

function successFunction(response){


        let injector = document.querySelector(`#section_main`);

        injector.insertAdjacentHTML(`beforeend`,
        
        
        `<article>
        <span class="main_span">
        
        <h1>${response[`data`][`slip`][`id`]}</h1>

        <p>${response[`data`][`slip`][`advice`]}</p>
        

        </span>
        </article>

        
        `);



};



function failureFunction(){


    let injector = document.querySelector(`#section_main`);

    injector.insertAdjacentHTML(`beforeend`, `<h1> error </h1>`);


};


let call_api = document.querySelectorAll(`.clickme`);

for (let counter = 0; counter < call_api.length; counter = counter + 1) {


    call_api[counter].addEventListener(`click`, callAPI);
};
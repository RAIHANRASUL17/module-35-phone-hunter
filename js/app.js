// /*________________________ step-1 ___________________________*/ 
// const loadPhones= async() =>{
//     const url=` https://openapi.programming-hero.com/api/phones?search=iphone `
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.data)  // always find array of object
//     }


//     // call function
//     loadPhones();


// /*__________________________ step-2 ___________________________*/ 
// const loadPhones= async() =>{
//     const url=` https://openapi.programming-hero.com/api/phones?search=iphone `
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadPhones(data.data)  // always find array of object
//     }

//     const displayLoadPhones = datas =>{
//         // console.logf(datas)
//         // (step-1): get id from a parent container
//         const phonesContainer = document.getElementById('phones-container');
//         phonesContainer.innerHTML= '';
//         datas.forEach(singleData =>{
//             console.log(singleData)

//             // (step-2):create a phoneDiv, phoneDiv with classList.add('') and set innerHTML
//             const phoneDiv= document.createElement('div');
//             phoneDiv.classList.add('col');
//             phoneDiv.innerHTML=`
//             <div class="card h-100">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in
//                     to additional content. This content is a little bit longer.</p>
//             </div>
//         </div>
//             `;
//              // (step-3):the parent container (step-1) with appendChild to the phoneDiv
//              phonesContainer.appendChild(phoneDiv);
//         });
//     };


//     // call function
//     loadPhones();



// /*__________________________ step-3 ___________________________*/ 
// const loadPhones= async() =>{
//     const url=` https://openapi.programming-hero.com/api/phones?search=iphone `
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadPhones(data.data)  // always find array of object
//     }

//     const displayLoadPhones = datas =>{
//         // console.logf(datas)
//         // (step-1): get id from a parent container
//         const phonesContainer = document.getElementById('phones-container');
//         phonesContainer.innerHTML= '';
//         datas.forEach(singleData =>{
//             // console.log(singleData)
//             console.log(singleData)

//             // (step-2):create a phoneDiv, phoneDiv with classList.add('') and set innerHTML
//             const phoneDiv= document.createElement('div');
//             phoneDiv.classList.add('col');
//             phoneDiv.innerHTML=`
//             <div class="card h-100 w-100 p-3 ">
//             <img src="${singleData.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in
//                     to additional content. This content is a little bit longer.</p>
//             </div>
//         </div>
//             `;
//              // (step-3):the parent container (step-1) with appendChild to the phoneDiv
//              phonesContainer.appendChild(phoneDiv);
//         });
//     };

//     // for btn search and  with search input field part
//     document.getElementById('btn-search').addEventListener('click', function(){
//         const searchField= document.getElementById('search-field');
//         const searchValue= searchField.value;
//         searchField.value= '';

//     });

//     // call function
//     loadPhones();



// /*__________________________ step-4 ___________________________*/ 
// const loadPhones= async(searchValue) =>{
//     const url=` https://openapi.programming-hero.com/api/phones?search=${searchValue} `
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadPhones(data.data)  // always find array of object
//     }

//     const displayLoadPhones = datas =>{
//         // console.logf(datas)
//         // (step-1): get id from a parent container
//         const phonesContainer = document.getElementById('phones-container');
//         phonesContainer.innerHTML= '';
//         datas.forEach(singleData =>{
//             // console.log(singleData)
//             console.log(singleData)

//             // (step-2):create a phoneDiv, phoneDiv with classList.add('') and set innerHTML
//             const phoneDiv= document.createElement('div');
//             phoneDiv.classList.add('col');
//             phoneDiv.innerHTML=`
//             <div class="card h-100 w-100 p-3 ">
//             <img src="${singleData.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">Name:${singleData.phone_name}</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in
//                     to additional content. This content is a little bit longer.</p>
//             </div>
//         </div>
//             `;
//              // (step-3):the parent container (step-1) with appendChild to the phoneDiv
//              phonesContainer.appendChild(phoneDiv);
//         });
//     };

//     // for btn search and  with search input field part
//     document.getElementById('btn-search').addEventListener('click', function(){
//         const searchField= document.getElementById('search-field');
//         const searchValue= searchField.value;
//         searchField.value= '';

//         // set loadPhones call function here and dynamic loadPhones url
//         loadPhones(searchValue)

//     });

//     // call function
//     loadPhones();



/*__________________________ step-5 ___________________________*/
const loadPhones = async (searchValue) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue} `
    const res = await fetch(url);
    const data = await res.json();
    // display 20 phones only for using slice(0,20)
    displayLoadPhones(data.data.slice(0, 20))  // always find array of object
}

const displayLoadPhones = datas => {
    // console.log(datas)
    // (step-1): get id from a parent container
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    /*___________________________________________________________________________*/
    // display no phone alrt message
    const noPhoneFound = document.getElementById('no-phone-found');
    if (datas.length === 0) {
        noPhoneFound.classList.remove('d-none')
    }
    else {
        noPhoneFound.classList.add('d-none')
    }
    /*___________________________________________________________________________*/
    // display all phones
    datas.forEach(singleData => {
        // console.log(singleData)
        console.log(singleData)

        // (step-2):create a phoneDiv, phoneDiv with classList.add('') and set innerHTML
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card h-100 w-100 p-3 ">
            <img src="${singleData.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name:${singleData.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        </div>
            `;
        // (step-3):the parent container (step-1) with appendChild to the phoneDiv
        phonesContainer.appendChild(phoneDiv);
    });
};

// for btn search and  with search input field part
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';

    // set loadPhones call function here and dynamic loadPhones url
    loadPhones(searchValue)

});

    // call function
    // loadPhones();   // for no phone found message alrt you have to close

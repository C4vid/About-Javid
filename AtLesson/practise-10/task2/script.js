const row = document.getElementsByClassName('row')     

const fetchApi = async()=>{
    const apidata = await fetch(`https://restcountries.com/v3.1/all`)
    const comingdata = await apidata.json()

    let card = ""

    comingdata.map((fd) => {
         card +=
    `
        <div class="col-12 col-sm-6 col -1 3" 
            <div class="card">
                <img height=150" src="${fd.flags.png}">
                <div class="card-body">
                    <h5 class="card-title" style="color: aliceblue; font-size: 20px; font-weight: 600;">${fd.name.common.substring(0,16)}</h5>
                    <p class="card-text" style="color: black;">${fd.name.official.substring(0,16)}</p>
                    <p class="card-text" style="color: black;">${fd.region}</p>
                    <p class="card-text" style="color: black;">${fd.population}</p>
                    <span class="card-text">${fd.fifa}</span>
                </div>     
            </div>     
        </div>     
        `
})

row.innerHTML = card
}

fetchApi();
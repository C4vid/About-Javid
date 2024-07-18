const row = document.querySelector(".row");

const fetchApi = async()=>{
    const apidata = await fetch("https://restcountries.com/v3.1/all");
    const firstdata = await apidata.json();

    let card ="";

    firstdata.map((fd)=>{
        card += 
        `
        <div class="card" style="width: 18rem;">
  <img src="${fd.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${fd.name.official.substring(0,20)}</h5>
    <p class="card-text">${fd.region}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    })
    row.innerHTML =card;

}
fetchApi();
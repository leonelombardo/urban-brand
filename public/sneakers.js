const sneakersCtn = document.querySelector("#sneaker-cards-ctn")
const searchBar = document.querySelector("#sneakers-search-bar");

searchBar.addEventListener("search", (e)=>{
    const value = e.target.value;

    sneakersCtn.innerHTML = "";

    fetch("../api/sneakers.json")
    .then(r => r.json())
        .then(r => {
            const keys = Object.keys(r);

            for(let i=0; i < keys.length; i++){
                if(r[i].title.toLowerCase().includes(value.toLowerCase())){
                    sneakersCtn.innerHTML += `
                    <div class="div col-xl-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="card">
                            <img src="${r[i].img}" class="card-img-top card-img" alt="nike sb dunk low grateful dead bears yellow" loading="lazy">
                            <div class="card-body">
                                <h5 class="card-title">${r[i].title}</h5>
                                <div class="card-badges">
                                    ${r[i].badges.verified ? '<span class="badge bg-green">Verified</span>' : "" }
                                    ${r[i].badges.classic ? '<span class="badge bg-secondary">Classic</span>' : "" } 
                                    ${r[i].badges.exclusive ? '<span class="badge bg-purple">Exclusive</span>' : "" }
                                    ${r[i].badges.collaboration ? '<span class="badge bg-primary">Collaboration</span>' : "" }
                                    ${r[i].badges.trending ? '<span class="badge bg-pink">Trending</span>' : "" }
                                    ${r[i].badges.hype ? '<span class="badge bg-red">Hype</span>' : "" }
                                    ${r[i].badges.limited ? '<span class="badge bg-blue">Limited</span>' : "" }
                                </div>
                                <p class="card-text">${r[i].price}</p>
                                <p class="card-desc">
                                ${r[i].description}
                                </p>
                                <a href="${r[i].buy}" target="_blank" class="btn btn-primary">Buy</a>
                            </div>
                        </div>
                    </div>
                `
                }
            }
        })
        .catch(r => console.error(r));
})
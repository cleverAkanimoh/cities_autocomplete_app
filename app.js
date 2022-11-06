const search = document.getElementById('search');
const resultArea = document.getElementById('resultArea');

const searchEntry = async value => {
    let res = await fetch('data.json');
    let datas = await res.json();
    
    let matches = datas.filter(data => {
        const regex = new RegExp(`^${value}`, 'gi');
        return data.name.match(regex) || data.code.match(regex);
    });

    if (value.length === 0) {
        matches = [];
        resultArea.innerHTML = '<p class="text-danger">Search result will appear here...</p>';
    }

    outputHTML(matches);
};

const outputHTML = matches => {
    if ( matches.length > 0 ) {
        const html = matches.map( match =>
            `<div class="card card-body mb-3 bg-dark">
                <h4>${match.name} (${match.code}) <span class="text-primary">${match.capital}</span></h4>
                <p>LGAs</p>
                <ul>
                    <li>${match.lgas}</li>
                </ul>
            </div>`
        )
        .join('');
        
        resultArea.innerHTML = html;
    }
}

search.oninput = () => searchEntry(search.value);
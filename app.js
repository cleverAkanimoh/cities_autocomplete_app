const search = document.getElementById('search');
const resultArea = document.getElementById('resultArea');

const searchEntry = async value => {
    const res = await fetch('data.json');
    const data = await res.json();
    
    let matches = data.filter(state => {
        const regex = new RegExp(`^${value}`, 'gi');
        return data.name.match(regex) || data.code.match(regex)
    })
}

search.oninput = searchEntry(search.value);
function searchFilms() {
    // Gaukite įvesties elementą ir įvestą vertę
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();

    // Gaukite filmų sąrašą
    let filmList = document.getElementById('filmList');
    let films = filmList.getElementsByClassName('film');

    // Pereikite per filmų sąrašą ir rodykite tik tuos, kurie atitinka paieškos kriterijus
    for (let i = 0; i < films.length; i++) {
        let film = films[i];
        let textValue = film.textContent || film.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            film.style.display = "";
        } else {
            film.style.display = "none";
        }
    }
}

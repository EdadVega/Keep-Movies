document.addEventListener('DOMContentLoaded', () => {
  cargaPeliculas();
});
let cargaPeliculas = async () => {
  const url = 'https://movies-api14.p.rapidapi.com/movies';
  const options = {
method: 'GET',
headers: {
  'X-RapidAPI-Key': '19fd36cd43msh7d3b8d2d36df160p143940jsn7c6f40d313c4',
  'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
}
};

  try {
      let response = await fetch(url, options);
      let data = await response.json();

      const arrayMovies = data.movies;

      // Películas según búsqueda
      const showMovies = (movies) => {
          // Isertar posters
          const container = document.getElementById('container');

          // Limpiar contenedor
          container.innerHTML = '';

          // Mostrar peliculas
          movies.forEach(element => {
              let title = element.original_title;
              let image = element.backdrop_path;

              let posterDiv = document.createElement('div');
              posterDiv.className = 'poster-container';
              posterDiv.innerHTML = `
                  <p>
                      <img src="${image}" alt="${title}" />
                      <h2>${title}</h2> 
                      
                  </p>
              `;
              container.appendChild(posterDiv);
          });
      };

      // Evento click para búsqueda
      document.getElementById('searchButton').addEventListener('click', async () => {
          const searchTerm = document.getElementById('searchInput').value.toLowerCase();

          // Filtro película == término buscado
          const matchingMovies = arrayMovies.filter(movie => movie.original_title.toLowerCase().includes(searchTerm));

          // Películas coincidentes
          showMovies(matchingMovies);
      });

      // Todas las películas
      showMovies(arrayMovies);

  } catch (error) {
      console.error(error);
  }
}


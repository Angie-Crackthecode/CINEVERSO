const peliculas = [
  // ===============================
  // 📚 BASADAS EN LIBROS
  // ===============================
  { id: 1, titulo: "Harry Potter", anio: 2001, genero: "Fantasía / Aventura", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF894,1000_QL80_.jpg" },
  { id: 2, titulo: "Orgullo y Prejuicio", anio: 2005, genero: "Romance / Drama", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/91rMno0XUzL._AC_UF894,1000_QL80_.jpg" },
  { id: 3, titulo: "El señor de los anillos", anio: 2001, genero: "Fantasía / Épico", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/71y-2u8rV9L._AC_UF894,1000_QL80_.jpg" },
  { id: 4, titulo: "Crepúsculo", anio: 2008, genero: "Romance / Fantasía", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/61aW0M0nQ-L._AC_UF894,1000_QL80_.jpg" },
  { id: 5, titulo: "Yo antes de ti", anio: 2016, genero: "Romance / Drama", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/71bEomzP5JL._AC_UF894,1000_QL80_.jpg" },
  { id: 6, titulo: "El padrino", anio: 1972, genero: "Crimen / Drama", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/91B3xDfzJLL._AC_UF894,1000_QL80_.jpg" },
  { id: 7, titulo: "El resplandor", anio: 1980, genero: "Terror / Psicológico", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/71bttjKzbkL._AC_UF894,1000_QL80_.jpg" },
  { id: 8, titulo: "Mujercitas", anio: 2019, genero: "Drama / Histórico", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/71zsu7A5JpL._AC_UF894,1000_QL80_.jpg" },
  { id: 9, titulo: "It", anio: 2017, genero: "Terror", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/71ZbDqu5qVL._AC_UF894,1000_QL80_.jpg" },
  { id: 10, titulo: "Psicosis", anio: 1960, genero: "Suspenso / Terror", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81I-6fw9b5L._AC_UF894,1000_QL80_.jpg" },
  { id: 11, titulo: "Los juegos del hambre", anio: 2012, genero: "Ciencia Ficción / Acción", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81H4cWfUtxL._AC_UF894,1000_QL80_.jpg" },
  { id: 12, titulo: "El código Da Vinci", anio: 2006, genero: "Misterio / Suspenso", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81pT8J9mQBL._AC_UF894,1000_QL80_.jpg" },
  { id: 13, titulo: "Las ventajas de ser invisible", anio: 2012, genero: "Drama / Adolescente", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81xvC2Aeo1L._AC_UF894,1000_QL80_.jpg" },
  { id: 14, titulo: "El niño con el pijama de rayas", anio: 2008, genero: "Drama / Guerra", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81I9wFv19JL._AC_UF894,1000_QL80_.jpg" },
  { id: 15, titulo: "La milla verde", anio: 1999, genero: "Drama / Fantasía", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81VjvF7J3QL._AC_UF894,1000_QL80_.jpg" },
  { id: 16, titulo: "Forrest Gump", anio: 1994, genero: "Drama / Comedia", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81xTxW7YQdL._AC_UF894,1000_QL80_.jpg" },
  { id: 17, titulo: "Narnia", anio: 2005, genero: "Fantasía / Aventura", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81M-HjM3woL._AC_UF894,1000_QL80_.jpg" },
  { id: 18, titulo: "Dune", anio: 2021, genero: "Ciencia Ficción / Épico", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81kz8jG0GSL._AC_UF894,1000_QL80_.jpg" },
  { id: 19, titulo: "La chica del tren", anio: 2016, genero: "Thriller / Drama", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81NoaEoTk2L._AC_UF894,1000_QL80_.jpg" },
  { id: 20, titulo: "El gran Gatsby", anio: 2013, genero: "Drama / Romance", categoria: "Basadas en Libros", imagen: "https://m.media-amazon.com/images/I/81XMFwOGbJL._AC_UF894,1000_QL80_.jpg" },

  // ===============================
  // 🔥 TOP 10 DE 2025
  // ===============================
  { id: 21, titulo: "Cómo entrenar a tu dragón", anio: 2025, genero: "Animación / Aventura", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/71Z8aMtM-AL._AC_UF894,1000_QL80_.jpg" },
  { id: 22, titulo: "Superman", anio: 2025, genero: "Acción / Superhéroes", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/81j8iY+gl-L._AC_UF894,1000_QL80_.jpg" },
  { id: 23, titulo: "La Hora De La Desaparición", anio: 2025, genero: "Suspenso / Misterio", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/91XFdctdKEL._AC_UF894,1000_QL80_.jpg" },
  { id: 24, titulo: "Caught Stealing", anio: 2025, genero: "Acción / Crimen", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/81kN+Vr4nXL._AC_UF894,1000_QL80_.jpg" },
  { id: 25, titulo: "Thunderbolts", anio: 2025, genero: "Acción / Marvel", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/91OEGaWqBbL._AC_UF894,1000_QL80_.jpg" },
  { id: 26, titulo: "Los 4 fantásticos: primeros pasos", anio: 2025, genero: "Superhéroes / Ciencia Ficción", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/81BuVQ5c8zL._AC_UF894,1000_QL80_.jpg" },
  { id: 27, titulo: "Misión: Imposible - Sentencia final", anio: 2025, genero: "Acción / Espionaje", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/81W4sAxWk4L._AC_UF894,1000_QL80_.jpg" },
  { id: 28, titulo: "Blade", anio: 2025, genero: "Acción / Terror", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/81bVq-umIzL._AC_UF894,1000_QL80_.jpg" },
  { id: 29, titulo: "Guardianes de la noche", anio: 2025, genero: "Animación / Fantasía", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/91r2h2eY9DL._AC_UF894,1000_QL80_.jpg" },
  { id: 30, titulo: "F1", anio: 2025, genero: "Acción / Deporte", categoria: "Top 10", imagen: "https://m.media-amazon.com/images/I/71j7T+0xXWL._AC_UF894,1000_QL80_.jpg" },

  // ===============================
  // 🎬 KIDS
  // ===============================
  { id: 31, titulo: "Toy Story", anio: 1995, genero: "Animación / Aventura", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF894,1000_QL80_.jpg" },
  { id: 32, titulo: "Buscando a Nemo", anio: 2003, genero: "Animación / Familiar", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81r0ZV4hWmL._AC_UF894,1000_QL80_.jpg" },
  { id: 33, titulo: "Shrek", anio: 2001, genero: "Animación / Comedia", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/71Xl5ZC3l0L._AC_UF894,1000_QL80_.jpg" },
  { id: 34, titulo: "Frozen", anio: 2013, genero: "Animación / Musical", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81rbHqVtZPL._AC_UF894,1000_QL80_.jpg" },
  { id: 35, titulo: "Kung Fu Panda", anio: 2008, genero: "Animación / Aventura", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81P7rC5R8kL._AC_UF894,1000_QL80_.jpg" },
  { id: 36, titulo: "Los Increíbles", anio: 2004, genero: "Animación / Superhéroes", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81Xx6D5W6sL._AC_UF894,1000_QL80_.jpg" },
  { id: 37, titulo: "Coco", anio: 2017, genero: "Animación / Musical", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81C3WhiXQZL._AC_UF894,1000_QL80_.jpg" },
  { id: 38, titulo: "Encanto", anio: 2021, genero: "Animación / Musical", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81zMDxF1R5L._AC_UF894,1000_QL80_.jpg" },
  { id: 39, titulo: "Ratatouille", anio: 2007, genero: "Animación / Comedia", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81M0nGblcLL._AC_UF894,1000_QL80_.jpg" },
  { id: 40, titulo: "Monsters Inc", anio: 2001, genero: "Animación / Fantasía", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81r+0D0EJzL._AC_UF894,1000_QL80_.jpg" },
  { id: 41, titulo: "Zootopia", anio: 2016, genero: "Animación / Aventura", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81xLzZka3RL._AC_UF894,1000_QL80_.jpg" },
  { id: 42, titulo: "Moana", anio: 2016, genero: "Animación / Aventura", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81m+6cG8gEL._AC_UF894,1000_QL80_.jpg" },
  { id: 43, titulo: "Intensamente", anio: 2015, genero: "Animación / Emocional", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81LRwVbQMYL._AC_UF894,1000_QL80_.jpg" },
  { id: 44, titulo: "Luca", anio: 2021, genero: "Animación / Amistad", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81D2f5WdfJL._AC_UF894,1000_QL80_.jpg" },
  { id: 45, titulo: "Up", anio: 2009, genero: "Animación / Aventura", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81u3ZBzMleL._AC_UF894,1000_QL80_.jpg" },
  { id: 46, titulo: "La Sirenita", anio: 2023, genero: "Musical / Fantasía", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81xDnL4McnL._AC_UF894,1000_QL80_.jpg" },
  { id: 47, titulo: "Mi villano favorito", anio: 2010, genero: "Animación / Comedia", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81rCeUFW9aL._AC_UF894,1000_QL80_.jpg" },
  { id: 48, titulo: "Sing", anio: 2016, genero: "Animación / Musical", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/81CjEoaymFL._AC_UF894,1000_QL80_.jpg" },
  { id: 49, titulo: "Pinocho", anio: 2022, genero: "Animación / Fantasía", categoria: "Kids", imagen: "https://m.media-amazon.com/images/I/91k9mP3vA6L._AC_UF894,1000_QL80_.jpg" },

  // ===============================
  // 🎥 DOCUMENTALES
  // ===============================
  { id: 50, titulo: "Nuestro Planeta", anio: 2019, genero: "Naturaleza / Ciencia", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81k1uvhZbZL._AC_UF894,1000_QL80_.jpg" },
  { id: 51, titulo: "Blackfish", anio: 2013, genero: "Animales / Denuncia", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81h4tS3ANbL._AC_UF894,1000_QL80_.jpg" },
  { id: 52, titulo: "The Social Dilemma", anio: 2020, genero: "Tecnología / Sociedad", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81Zz3uEJKuL._AC_UF894,1000_QL80_.jpg" },
    { id: 53, titulo: "Seaspiracy", anio: 2021, genero: "Océanos / Ecología", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81tB9hFTKoL._AC_UF894,1000_QL80_.jpg" },
  { id: 54, titulo: "The Tinder Swindler", anio: 2022, genero: "Crimen / Real", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81gmpz52stL._AC_UF894,1000_QL80_.jpg" },
  { id: 55, titulo: "13th", anio: 2016, genero: "Sociedad / Política", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81Bwo1Dwc6L._AC_UF894,1000_QL80_.jpg" },
  { id: 56, titulo: "David Attenborough: A Life on Our Planet", anio: 2020, genero: "Naturaleza / Reflexión", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81x5D2+dCGL._AC_UF894,1000_QL80_.jpg" },
  { id: 57, titulo: "My Octopus Teacher", anio: 2020, genero: "Naturaleza / Vida Marina", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81j0L-FC8zL._AC_UF894,1000_QL80_.jpg" },
  { id: 58, titulo: "American Factory", anio: 2019, genero: "Trabajo / Sociedad", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81x8rE47HqL._AC_UF894,1000_QL80_.jpg" },
  { id: 59, titulo: "Crip Camp", anio: 2020, genero: "Derechos Humanos / Historia", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81pySMu+JQL._AC_UF894,1000_QL80_.jpg" },
  { id: 60, titulo: "The Deepest Breath", anio: 2023, genero: "Aventura / Océano", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81j2CjSfAoL._AC_UF894,1000_QL80_.jpg" },
  { id: 61, titulo: "Beckham", anio: 2023, genero: "Deporte / Biografía", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81M0W4UMCEL._AC_UF894,1000_QL80_.jpg" },
  { id: 62, titulo: "Arnold", anio: 2023, genero: "Biografía / Superación", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81qqUoy6AsL._AC_UF894,1000_QL80_.jpg" },
  { id: 63, titulo: "Billie Eilish: The World's a Little Blurry", anio: 2021, genero: "Música / Juventud", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81Ojx7LBnsL._AC_UF894,1000_QL80_.jpg" },
  { id: 64, titulo: "Taylor Swift: Miss Americana", anio: 2020, genero: "Música / Inspiración", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81AqNQ9mVFL._AC_UF894,1000_QL80_.jpg" },
  { id: 65, titulo: "Planet Earth II", anio: 2016, genero: "Naturaleza / Mundo", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81yBt6uwOqL._AC_UF894,1000_QL80_.jpg" },
  { id: 66, titulo: "Inside Job", anio: 2010, genero: "Economía / Política", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81nERkgw3nL._AC_UF894,1000_QL80_.jpg" },
  { id: 67, titulo: "The Great Hack", anio: 2019, genero: "Tecnología / Privacidad", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81YNNdPUnaL._AC_UF894,1000_QL80_.jpg" },
  { id: 68, titulo: "Wild Wild Country", anio: 2018, genero: "Religión / Misterio", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81g+X7CUpZL._AC_UF894,1000_QL80_.jpg" },
  { id: 69, titulo: "The Last Dance", anio: 2020, genero: "Deporte / Inspiración", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81OHgU0U+LL._AC_UF894,1000_QL80_.jpg" },
  { id: 70, titulo: "Navalny", anio: 2022, genero: "Política / Corrupción", categoria: "Documentales", imagen: "https://m.media-amazon.com/images/I/81O4L4f9o6L._AC_UF894,1000_QL80_.jpg" },

  // ===============================
  // 🎎 ASIÁTICAS (COREANAS / ANIMES)
  // ===============================
  { id: 71, titulo: "Parasite", anio: 2019, genero: "Thriller / Drama", categoria: "Asiáticas", imagen: "https://img.rtve.es/imagenes/caratula-parasito-saga-completa/1466077733963.jpg" },
  { id: 72, titulo: "Train to Busan", anio: 2016, genero: "Terror / Acción", categoria: "Asiáticas", imagen: "https://images.justwatch.com/poster/9373937/s718/train-to-busan.jpg" },
  { id: 73, titulo: "My Name", anio: 2021, genero: "Acción / Drama", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BN2ZiZWU3MzMtNGM5OC00ZWVkLTkxNjUtMTYwZGU4MzgxYzk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 74, titulo: "The Glory", anio: 2023, genero: "Drama / Venganza", categoria: "Asiáticas", imagen: "https://pics.filmaffinity.com/La_gloria_Serie_de_TV-431017765-large.jpg" },
  { id: 75, titulo: "Extraordinary You", anio: 2019, genero: "Romance / Fantasía", categoria: "Asiáticas", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2jC7TEk0s7u4RJKInfbfI_LlXTblbEdchNlmpTKBEsYHZtApNLSO-KSbzPwRpu0W7iw&usqp=CAU" },
  { id: 76, titulo: "Start-Up", anio: 2020, genero: "Drama / Romance", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BYTJiYmE0ZGItMmU1NS00NThhLWIzODEtZmJlYjBmMzcwNmY3XkEyXkFqcGc@._V1_.jpg" },
  { id: 77, titulo: "Alchemy of Souls", anio: 2022, genero: "Fantasía / Aventura", categoria: "Asiáticas", imagen: "https://www.monash.edu/__data/assets/image/0006/3069096/Alchemy-of-Souls-official-poster.jpg" },
  { id: 78, titulo: "Twenty-Five Twenty-One", anio: 2022, genero: "Drama / Romance", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BNDU3ODZjMzAtYTIyZi00MGExLWFhYjEtOGQ5YjVlMjU3MjNlXkEyXkFqcGc@._V1_.jpg" },
  { id: 79, titulo: "Squid Game", anio: 2021, genero: "Acción / Suspenso", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BMDcxYjg1OTctYmUxZi00ZjhjLWIwNTMtNmI2M2Y4OTU1YWU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 80, titulo: "All of Us Are Dead", anio: 2022, genero: "Terror / Escolar", categoria: "Asiáticas", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxay4or86F0zxdpPsmrbpXXutgSKklnYtrb9E15oPc0tzOcro4u7PDYG0idNv80StwCI&usqp=CAU" },
  { id: 81, titulo: "Your Name", anio: 2016, genero: "Anime / Romance", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg" },
  { id: 82, titulo: "A Silent Voice", anio: 2016, genero: "Anime / Drama", categoria: "Asiáticas", imagen: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg" },
  { id: 83, titulo: "Spirited Away", anio: 2001, genero: "Anime / Fantasía", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BM2E2YzcwMTQtNWRlMC00ZGZlLWJhZTEtMDU4ZGIzMWI0NzJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 84, titulo: "Demon Slayer: Mugen Train", anio: 2020, genero: "Anime / Acción", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BNzEzYjhkYTctMWNmZS00MTc5LWI4OWUtZjFkNzNkYTNkMTJlXkEyXkFqcGc@._V1_.jpg" },
  { id: 85, titulo: "Attack on Titan", anio: 2013, genero: "Anime / Épico", categoria: "Asiáticas", imagen: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 86, titulo: "Naruto", anio: 2002, genero: "Anime / Aventura", categoria: "Asiáticas", imagen: "https://pics.filmaffinity.com/naruto_movie_1_daikatsugeki_yukihime_ninpocho_dattebayo_naruto_the_movie_ninja_clash_in_the_land_of_snow-813795021-msmall.jpg" },
  { id: 87, titulo: "One Piece Film: Red", anio: 2022, genero: "Anime / Acción", categoria: "Asiáticas", imagen: "https://pics.filmaffinity.com/One_Piece_Film_Red-407711303-large.jpg" },
  { id: 88, titulo: "Jujutsu Kaisen 0", anio: 2021, genero: "Anime / Sobrenatural", categoria: "Asiáticas", imagen: "https://es.web.img3.acsta.net/pictures/22/05/18/16/23/5993750.jpg" },
  { id: 89, titulo: "Belle", anio: 2021, genero: "Anime / Musical", categoria: "Asiáticas", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdl4BP4Nyl9D9QUlzcg6sKotOpwy93-KXApg&s" },
  { id: 91, titulo: "Demon Slayer – The Movie: Infinity Castle", anio: 2025, genero: "Anime / Acción / Fantasía", categoria: "Asiáticas", imagen: "https://pics.filmaffinity.com/Demon_Slayer_Kimetsu_no_Yaiba_AO_Castillo_infinito-319955045-large.jpg" },

];

export default peliculas;

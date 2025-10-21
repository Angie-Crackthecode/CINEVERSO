// archivo: comentariosData.js (o el nombre de tu archivo de comentarios)

/**
 * Objeto exportable (Array) que contiene 5 comentarios para cada una de las 20 películas.
 * Están vinculados al arreglo peliculasBasadasEnLibros por el campo 'peliculaId'.
 */
export const comentariosPeliculas = [
  // =========================================================
  // --- Película ID 1: El Señor de los Anillos ---
  // =========================================================
  {
    id: 101,
    peliculaId: 1,
    nombreUsuario: "GandalfElBlanco",
    mensaje: "La mejor adaptación de fantasía. Peter Jackson hizo magia con la atmósfera de la Comarca. ¡Qué épica!",
    puntuacion: 5
  },
  {
    id: 102,
    peliculaId: 1,
    nombreUsuario: "HobbitViajero",
    mensaje: "Demasiado larga, la versión extendida me agotó, pero el Balrog es impresionante. Los efectos especiales aguantan bien el paso del tiempo.",
    puntuacion: 4
  },
  {
    id: 103,
    peliculaId: 1,
    nombreUsuario: "ElvenArcher",
    mensaje: "El casting es perfecto. Viggo Mortensen es el Aragorn que imaginé leyendo el libro.",
    puntuacion: 5
  },
  {
    id: 104,
    peliculaId: 1,
    nombreUsuario: "OneRingFan",
    mensaje: "No me gustó que omitieran la escena de Tom Bombadil, es importante para la trama del libro. Una pena.",
    puntuacion: 3
  },
  {
    id: 105,
    peliculaId: 1,
    nombreUsuario: "MoriaMiner",
    mensaje: "Las Minas de Moria son la mejor parte, tensión pura. ¡No puedes pasar! ⛏️",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 2: El Padrino ---
  // =========================================================
  {
    id: 201,
    peliculaId: 2,
    nombreUsuario: "DonCorleone",
    mensaje: "Una obra maestra del cine. La evolución de Michael es uno de los mejores arcos narrativos jamás escritos.",
    puntuacion: 5
  },
  {
    id: 202,
    peliculaId: 2,
    nombreUsuario: "MafiaLover",
    mensaje: "El libro es más detallado en la vida de Sonny, pero la película capturó la esencia de la familia. Un 10/10.",
    puntuacion: 5
  },
  {
    id: 203,
    peliculaId: 2,
    nombreUsuario: "SicilianCook",
    mensaje: "La escena de la cabeza de caballo es muy fuerte, aunque clave. El drama es impecable.",
    puntuacion: 4
  },
  {
    id: 204,
    peliculaId: 2,
    nombreUsuario: "HollywoodAgent",
    mensaje: "La iluminación y la fotografía son de otro mundo. Hacen que cada escena se sienta como una pintura. 🖼️",
    puntuacion: 5
  },
  {
    id: 205,
    peliculaId: 2,
    nombreUsuario: "VitoFan",
    mensaje: "Marlon Brando lo dio todo. Su actuación como Vito es inigualable, un clásico absoluto.",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 3: Harry Potter y Azkaban ---
  // =========================================================
  {
    id: 301,
    peliculaId: 3,
    nombreUsuario: "PotterHeadMx",
    mensaje: "Mi favorita de la saga. Cuarón le dio un tono más oscuro y artístico. Los Dementores son aterradores.",
    puntuacion: 5
  },
  {
    id: 302,
    peliculaId: 3,
    nombreUsuario: "TimeTurner",
    mensaje: "Amo cómo explican el mapa del merodeador. La trama del viaje en el tiempo es muy inteligente.",
    puntuacion: 4
  },
  {
    id: 303,
    peliculaId: 3,
    nombreUsuario: "ProfesorLupin",
    mensaje: "El cambio de actores en algunos personajes se sintió extraño al principio, pero la historia me atrapó.",
    puntuacion: 4
  },
  {
    id: 304,
    peliculaId: 3,
    nombreUsuario: "ExpectoPatronum",
    mensaje: "La escena final con el Patronus es pura emoción. ¡Increíble!",
    puntuacion: 5
  },
  {
    id: 305,
    peliculaId: 3,
    nombreUsuario: "SiriusBlack",
    mensaje: "Buena, pero el libro tiene más subtramas que hacen el misterio más rico.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 4: Matar a un Ruiseñor ---
  // =========================================================
  {
    id: 401,
    peliculaId: 4,
    nombreUsuario: "ScoutFinch",
    mensaje: "Una película que todo el mundo debería ver. La inocencia de los niños frente a la crueldad adulta es desgarradora.",
    puntuacion: 5
  },
  {
    id: 402,
    peliculaId: 4,
    nombreUsuario: "AtticusPeck",
    mensaje: "Gregory Peck ES Atticus Finch. Su interpretación eleva el mensaje de justicia y compasión de Harper Lee.",
    puntuacion: 5
  },
  {
    id: 403,
    peliculaId: 4,
    nombreUsuario: "SouthernLawyer",
    mensaje: "El clímax en la corte es tenso e inolvidable. Un clásico del cine judicial.",
    puntuacion: 5
  },
  {
    id: 404,
    peliculaId: 4,
    nombreUsuario: "OldTown",
    mensaje: "La ambientación del Sur de Estados Unidos está muy lograda, se siente el calor y la pesadez del verano.",
    puntuacion: 4
  },
  {
    id: 405,
    peliculaId: 4,
    nombreUsuario: "MovieCritic",
    mensaje: "La versión cinematográfica simplifica algunas cosas, pero es una adaptación fiel al espíritu del libro.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 5: Blade Runner ---
  // =========================================================
  {
    id: 501,
    peliculaId: 5,
    nombreUsuario: "CyberpunkFan",
    mensaje: "La estética 'neo-noir' es increíble. Definió el género cyberpunk. El corte del director es el mejor.",
    puntuacion: 5
  },
  {
    id: 502,
    peliculaId: 5,
    nombreUsuario: "DeckardHunter",
    mensaje: "¿Es Deckard un replicante? La película te hace pensar durante días. ¡Qué dilema filosófico!",
    puntuacion: 5
  },
  {
    id: 503,
    peliculaId: 5,
    nombreUsuario: "ElectricSheep",
    mensaje: "La banda sonora de Vangelis es tan importante como la fotografía. Inmersión total.",
    puntuacion: 4
  },
  {
    id: 504,
    peliculaId: 5,
    nombreUsuario: "SciFiLover",
    mensaje: "Un poco lenta en algunas partes, pero la atmósfera lo compensa. La recomiendo mucho a quien busque algo diferente.",
    puntuacion: 4
  },
  {
    id: 505,
    peliculaId: 5,
    nombreUsuario: "BookPurity",
    mensaje: "La película se aleja mucho del libro en la trama de los 'kipple', pero como obra de cine es genial.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 6: El Resplandor ---
  // =========================================================
  {
    id: 601,
    peliculaId: 6,
    nombreUsuario: "KubrickFan",
    mensaje: "Una lección de cómo generar terror a través del espacio y la psicología. La simetría de Kubrick es inquietante.",
    puntuacion: 5
  },
  {
    id: 602,
    peliculaId: 6,
    nombreUsuario: "StephenKingFan",
    mensaje: "Aunque King la odió, es una obra maestra del terror. La actuación de Jack Nicholson es legendaria.",
    puntuacion: 5
  },
  {
    id: 603,
    peliculaId: 6,
    nombreUsuario: "OverlookHotel",
    mensaje: "La sensación de claustrofobia y el laberinto son geniales. Te mantiene pegado al asiento.",
    puntuacion: 5
  },
  {
    id: 604,
    peliculaId: 6,
    nombreUsuario: "Hereditary",
    mensaje: "El terror no necesita *gore* para ser efectivo, y esta película lo prueba. Puro malestar.",
    puntuacion: 4
  },
  {
    id: 605,
    peliculaId: 6,
    nombreUsuario: "Redrum",
    mensaje: "Mi escena favorita es la del ascensor con sangre. Un efecto simple pero aterrador. 🩸",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 7: Cadena Perpetua ---
  // =========================================================
  {
    id: 701,
    peliculaId: 7,
    nombreUsuario: "FreedomSeeker",
    mensaje: "La mejor película sobre la esperanza. Morgan Freeman y Tim Robbins tienen una química increíble.",
    puntuacion: 5
  },
  {
    id: 702,
    peliculaId: 7,
    nombreUsuario: "IMDBRanker",
    mensaje: "Entiendo por qué siempre está en el top de las listas. Un guion perfecto y un final muy satisfactorio.",
    puntuacion: 5
  },
  {
    id: 703,
    peliculaId: 7,
    nombreUsuario: "ShortStoryFan",
    mensaje: "La adaptación de la novela corta es excelente, logra expandir la historia sin perder su alma.",
    puntuacion: 5
  },
  {
    id: 704,
    peliculaId: 7,
    nombreUsuario: "AndyDufresne",
    mensaje: "Lloré al final. Una película que te recuerda la importancia de no rendirse.",
    puntuacion: 5
  },
  {
    id: 705,
    peliculaId: 7,
    nombreUsuario: "PrisonDrama",
    mensaje: "Un drama carcelario que se enfoca más en el espíritu humano que en la violencia. Muy recomendable.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 8: Orgullo y Prejuicio (2005) ---
  // =========================================================
  {
    id: 801,
    peliculaId: 8,
    nombreUsuario: "DarcyLover",
    mensaje: "La versión definitiva. La escena de la neblina y la declaración bajo la lluvia son puro cine romántico. 💖",
    puntuacion: 5
  },
  {
    id: 802,
    peliculaId: 8,
    nombreUsuario: "JaneAustenReader",
    mensaje: "Joe Wright logra capturar el espíritu de la época y el ingenio de Elizabeth. Me encantó la cinematografía.",
    puntuacion: 5
  },
  {
    id: 803,
    peliculaId: 8,
    nombreUsuario: "KeiraKnightley",
    mensaje: "La química entre los protagonistas es palpable. Es la mejor comedia romántica de época.",
    puntuacion: 5
  },
  {
    id: 804,
    peliculaId: 8,
    nombreUsuario: "PeriodDramaFan",
    mensaje: "Los vestidos y los paisajes son preciosos. Una película para disfrutar un domingo por la tarde.",
    puntuacion: 4
  },
  {
    id: 805,
    peliculaId: 8,
    nombreUsuario: "BBCAdaptation",
    mensaje: "Prefiero la versión de la BBC, más fiel y con más tiempo para desarrollar la relación. Pero esta es hermosa.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 9: Psicosis (1960) ---
  // =========================================================
  {
    id: 901,
    peliculaId: 9,
    nombreUsuario: "HitchcockMaster",
    mensaje: "El giro de la trama y la escena de la ducha son historia del cine. Terror psicológico en su máxima expresión.",
    puntuacion: 5
  },
  {
    id: 902,
    peliculaId: 9,
    nombreUsuario: "NormanBates",
    mensaje: "Anthony Perkins es escalofriante. Su actuación lleva toda la película.",
    puntuacion: 5
  },
  {
    id: 903,
    peliculaId: 9,
    nombreUsuario: "ClassicHorror",
    mensaje: "Increíble cómo usa la música y los ángulos de cámara para crear suspense. Imprescindible.",
    puntuacion: 5
  },
  {
    id: 904,
    peliculaId: 9,
    nombreUsuario: "PlotTwist",
    mensaje: "La primera media hora es lenta, pero cuando llega el punto de inflexión, no puedes dejar de mirar.",
    puntuacion: 4
  },
  {
    id: 905,
    peliculaId: 9,
    nombreUsuario: "Cinematography",
    mensaje: "Demuestra que el suspense es más aterrador que cualquier monstruo.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 10: Forrest Gump ---
  // =========================================================
  {
    id: 1001,
    peliculaId: 10,
    nombreUsuario: "LifeIsABox",
    mensaje: "Una película que te hace reír y llorar en la misma escena. Un clásico que envejece muy bien.",
    puntuacion: 5
  },
  {
    id: 1002,
    peliculaId: 10,
    nombreUsuario: "RunningMan",
    mensaje: "La banda sonora es épica. Las referencias históricas están muy bien integradas en la historia de Forrest.",
    puntuacion: 5
  },
  {
    id: 1003,
    peliculaId: 10,
    nombreUsuario: "JennyFan",
    mensaje: "Me encanta el mensaje de optimismo y la inocencia de Forrest. Muy conmovedora.",
    puntuacion: 5
  },
  {
    id: 1004,
    peliculaId: 10,
    nombreUsuario: "PingPongStar",
    mensaje: "El libro es mucho más cínico y oscuro, pero la película lo hizo más accesible y emotivo. Prefiero la película.",
    puntuacion: 4
  },
  {
    id: 1005,
    peliculaId: 10,
    nombreUsuario: "BoxOfChocolates",
    mensaje: "Un drama que te deja pensando en las pequeñas cosas de la vida. Gran trabajo de Tom Hanks.",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 11: Dune (2021) ---
  // =========================================================
  {
    id: 1101,
    peliculaId: 11,
    nombreUsuario: "Arrakis",
    mensaje: "Visualmente impactante. Villeneuve logró capturar la majestuosidad de la especia y el desierto. 🏜️",
    puntuacion: 5
  },
  {
    id: 1102,
    peliculaId: 11,
    nombreUsuario: "SpiceMelange",
    mensaje: "Demasiado lenta en algunos puntos, pero la construcción del mundo es fantástica. Hay que verla en una gran pantalla.",
    puntuacion: 4
  },
  {
    id: 1103,
    peliculaId: 11,
    nombreUsuario: "GeekLit",
    mensaje: "Como fan del libro, es la adaptación que siempre quise. Es fiel a la densidad política y mitológica.",
    puntuacion: 5
  },
  {
    id: 1104,
    peliculaId: 11,
    nombreUsuario: "ZimmerScore",
    mensaje: "La banda sonora de Hans Zimmer es una obra de arte. Le da a la película una sensación épica y tribal.",
    puntuacion: 5
  },
  {
    id: 1105,
    peliculaId: 11,
    nombreUsuario: "PartOne",
    mensaje: "Me frustra que sea solo la primera parte. ¡Necesito ver la secuela ya!",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 12: El Club de la Lucha ---
  // =========================================================
  {
    id: 1201,
    peliculaId: 12,
    nombreUsuario: "TylerDurden",
    mensaje: "Un *thriller* inteligente con un giro que te explota la cabeza. La sátira al consumismo sigue vigente.",
    puntuacion: 5
  },
  {
    id: 1202,
    peliculaId: 12,
    nombreUsuario: "BradAndEd",
    mensaje: "Las actuaciones de Pitt y Norton son de lo mejor de su carrera. Tienen una química muy intensa.",
    puntuacion: 5
  },
  {
    id: 1203,
    peliculaId: 12,
    nombreUsuario: "NoTelling",
    mensaje: "La dirección de Fincher es espectacular. Oscura, cínica y muy estilizada.",
    puntuacion: 5
  },
  {
    id: 1204,
    peliculaId: 12,
    nombreUsuario: "AntiSystem",
    mensaje: "El mensaje es poderoso, aunque la ultraviolencia puede ser excesiva para algunos. Es una película de culto.",
    puntuacion: 4
  },
  {
    id: 1205,
    peliculaId: 12,
    nombreUsuario: "BookFanatic",
    mensaje: "El libro es aún más extremo, pero la película le da un final visualmente más impactante.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 13: La Naranja Mecánica ---
  // =========================================================
  {
    id: 1301,
    peliculaId: 13,
    nombreUsuario: "AlexDeLarge",
    mensaje: "El lenguaje *nadsat* y el diseño de producción son geniales. Una distopía incómoda, pero brillante.",
    puntuacion: 5
  },
  {
    id: 1302,
    peliculaId: 13,
    nombreUsuario: "StanleyFan",
    mensaje: "Kubrick abordando el libre albedrío y el control estatal. Una obra maestra filosófica del cine.",
    puntuacion: 5
  },
  {
    id: 1303,
    peliculaId: 13,
    nombreUsuario: "Droogs",
    mensaje: "La música clásica usada en el contexto de la violencia es perturbadora y efectiva.",
    puntuacion: 4
  },
  {
    id: 1304,
    peliculaId: 13,
    nombreUsuario: "Controversial",
    mensaje: "Es muy difícil de ver por su contenido, pero el debate moral que plantea vale la pena.",
    puntuacion: 4
  },
  {
    id: 1305,
    peliculaId: 13,
    nombreUsuario: "Clockwork",
    mensaje: "La adaptación ignora el último capítulo, lo que cambia completamente el mensaje final del autor.",
    puntuacion: 3
  },

  // =========================================================
  // --- Película ID 14: El Diario de Noa ---
  // =========================================================
  {
    id: 1401,
    peliculaId: 14,
    nombreUsuario: "RomanticAtHeart",
    mensaje: "El drama romántico por excelencia. Prepárense para llorar. 😭",
    puntuacion: 5
  },
  {
    id: 1402,
    peliculaId: 14,
    nombreUsuario: "RNGosling",
    mensaje: "Ryan Gosling y Rachel McAdams. Química innegable y una historia de amor muy dulce.",
    puntuacion: 5
  },
  {
    id: 1403,
    peliculaId: 14,
    nombreUsuario: "SparksLover",
    mensaje: "Fiel a la novela de Nicholas Sparks. Un romance intenso y con un final emotivo.",
    puntuacion: 4
  },
  {
    id: 1404,
    peliculaId: 14,
    nombreUsuario: "OldFashioned",
    mensaje: "Cliché pero efectivo. Es lo que esperas de una película de amor y cumple con creces.",
    puntuacion: 4
  },
  {
    id: 1405,
    peliculaId: 14,
    nombreUsuario: "RainKiss",
    mensaje: "La escena del beso bajo la lluvia es icónica. Puro cine romántico.",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 15: Mujercitas (2019) ---
  // =========================================================
  {
    id: 1501,
    peliculaId: 15,
    nombreUsuario: "JoMarch",
    mensaje: "La mejor adaptación. Se siente moderna y celebra la ambición de las mujeres sin perder el encanto clásico.",
    puntuacion: 5
  },
  {
    id: 1502,
    peliculaId: 15,
    nombreUsuario: "GretaGerwig",
    mensaje: "La dirección de Gerwig es excelente, el uso de saltos temporales es refrescante e inteligente.",
    puntuacion: 5
  },
  {
    id: 1503,
    peliculaId: 15,
    nombreUsuario: "SaoirseRonan",
    mensaje: "El reparto es soñado. Saoirse Ronan como Jo es brillante. La dinámica familiar es muy creíble.",
    puntuacion: 5
  },
  {
    id: 1504,
    peliculaId: 15,
    nombreUsuario: "ClassicReader",
    mensaje: "Una hermosa película. Captura perfectamente el espíritu del libro sobre la independencia y la familia.",
    puntuacion: 4
  },
  {
    id: 1505,
    peliculaId: 15,
    nombreUsuario: "PeriodCostume",
    mensaje: "El diseño de vestuario es increíble y merecido ganador de un Óscar.",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 16: El Exorcista ---
  // =========================================================
  {
    id: 1601,
    peliculaId: 16,
    nombreUsuario: "FatherKarras",
    mensaje: "El terror más puro no es visual, es psicológico. Esta película es aterradora por su atmósfera y fe.",
    puntuacion: 5
  },
  {
    id: 1602,
    peliculaId: 16,
    nombreUsuario: "HorrorClassic",
    mensaje: "Sigue siendo la película más terrorífica que he visto. Las escenas de Regan son icónicas y muy duras.",
    puntuacion: 5
  },
  {
    id: 1603,
    peliculaId: 16,
    nombreUsuario: "70sHorror",
    mensaje: "Una película que marcó un antes y un después en el género. No se hacen películas así hoy en día.",
    puntuacion: 5
  },
  {
    id: 1604,
    peliculaId: 16,
    nombreUsuario: "Demonic",
    mensaje: "Basada en el libro, que es muy detallado en la posesión. La película logra transmitir la misma desesperación.",
    puntuacion: 4
  },
  {
    id: 1605,
    peliculaId: 16,
    nombreUsuario: "LindaBlair",
    mensaje: "El maquillaje y la actuación de Linda Blair merecen todo el reconocimiento.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 17: El Silencio de los Corderos ---
  // =========================================================
  {
    id: 1701,
    peliculaId: 17,
    nombreUsuario: "ClariceStarling",
    mensaje: "Un *thriller* impecable. La dinámica entre Clarice y Lecter es magnética. Un guion perfectamente escrito.",
    puntuacion: 5
  },
  {
    id: 1702,
    peliculaId: 17,
    nombreUsuario: "AnthonyHopkins",
    mensaje: "Anthony Hopkins como Lecter es aterrador. Solo aparece unos minutos, pero se roba la película.",
    puntuacion: 5
  },
  {
    id: 1703,
    peliculaId: 17,
    nombreUsuario: "FiveOscars",
    mensaje: "Una de las pocas en ganar los 5 premios principales. Es historia del cine.",
    puntuacion: 5
  },
  {
    id: 1704,
    peliculaId: 17,
    nombreUsuario: "FBIStudent",
    mensaje: "La tensión y el suspense son constantes. Te mantiene en vilo hasta el final. 😨",
    puntuacion: 4
  },
  {
    id: 1705,
    peliculaId: 17,
    nombreUsuario: "BuffaloBill",
    mensaje: "Muy buena adaptación de la novela de Thomas Harris. Un *thriller* que se siente muy bien investigado.",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 18: Trainspotting ---
  // =========================================================
  {
    id: 1801,
    peliculaId: 18,
    nombreUsuario: "ChooseLife",
    mensaje: "Cruda, divertida y con un estilo visual único. Un retrato honesto de la adicción y la juventud perdida.",
    puntuacion: 5
  },
  {
    id: 1802,
    peliculaId: 18,
    nombreUsuario: "Britpop",
    mensaje: "La banda sonora es una joya. Es una película llena de energía, aunque el tema es difícil.",
    puntuacion: 5
  },
  {
    id: 1803,
    peliculaId: 18,
    nombreUsuario: "DannyBoyle",
    mensaje: "El monólogo inicial es épico. Boyle dirigió una película de culto instantánea.",
    puntuacion: 5
  },
  {
    id: 1804,
    peliculaId: 18,
    nombreUsuario: "Scottish",
    mensaje: "El acento escocés es a veces difícil de entender, ¡pero la película es genial!",
    puntuacion: 4
  },
  {
    id: 1805,
    peliculaId: 18,
    nombreUsuario: "CultFilm",
    mensaje: "Una película que revolucionó el cine británico. Cruda y estilizada a partes iguales.",
    puntuacion: 4
  },

  // =========================================================
  // --- Película ID 19: La Lista de Schindler ---
  // =========================================================
  {
    id: 1901,
    peliculaId: 19,
    nombreUsuario: "HistoryBuff",
    mensaje: "Una película esencial sobre el Holocausto. Spielberg y la fotografía en blanco y negro son magistrales.",
    puntuacion: 5
  },
  {
    id: 1902,
    peliculaId: 19,
    nombreUsuario: "SchindlerSaved",
    mensaje: "Es muy difícil de ver, pero el mensaje de humanidad y redención es vital. Impresionante.",
    puntuacion: 5
  },
  {
    id: 1903,
    peliculaId: 19,
    nombreUsuario: "LiamNeeson",
    mensaje: "La actuación de Liam Neeson es sobria y poderosa. Su arco de personaje es conmovedor.",
    puntuacion: 5
  },
  {
    id: 1904,
    peliculaId: 19,
    nombreUsuario: "RedCoat",
    mensaje: "El uso sutil del color (el abrigo rojo) es un golpe visual brillante. Una obra de arte.",
    puntuacion: 5
  },
  {
    id: 1905,
    peliculaId: 19,
    nombreUsuario: "HolocaustSurvivor",
    mensaje: "Fiel al espíritu de la novela. Un documento histórico doloroso pero necesario.",
    puntuacion: 5
  },

  // =========================================================
  // --- Película ID 20: Desayuno con Diamantes ---
  // =========================================================
  {
    id: 2001,
    peliculaId: 20,
    nombreUsuario: "HollyGolightly",
    mensaje: "Un clásico encantador. Audrey Hepburn es la perfección y el glamour de Nueva York.",
    puntuacion: 5
  },
  {
    id: 2002,
    peliculaId: 20,
    nombreUsuario: "MoonRiver",
    mensaje: "La música es inolvidable. Es una película de culto que marcó una generación.",
    puntuacion: 5
  },
  {
    id: 2003,
    peliculaId: 20,
    nombreUsuario: "CapoteReader",
    mensaje: "El personaje de Holly en la película es mucho más dulce que en la novela. Una diferencia notable, pero funciona.",
    puntuacion: 4
  },
  {
    id: 2004,
    peliculaId: 20,
    nombreUsuario: "FashionIcon",
    mensaje: "El vestuario es lo mejor de la película. Un icono de la moda en el cine.",
    puntuacion: 5
  },
  {
    id: 2005,
    peliculaId: 20,
    nombreUsuario: "BlackAndWhite",
    mensaje: "Una comedia romántica con un toque melancólico. Me encantó la relación entre los vecinos.",
    puntuacion: 4
  },
];
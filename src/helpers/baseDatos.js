// QUEMAR UNA BASE DE DATOS

// TAMAÑO IMG 276 x 361
export let productos = Array(
    {
     nombre: "Assassins Creed II",
     descripcion: "Esta es la secuela directa de Assassin's Creed, que se enfoca en la historia de Desmond Miles después de escapar de los laboratorios de Abstergo con la ayuda de Lucy Stillman.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/AC2_cover.jpg?alt=media&token=607951e3-f16d-4bce-9dc9-26946d011152","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/AC2_coverBW.jpg?alt=media&token=5158b7c5-c91a-49f7-8e85-e55ac87709dc"],
     precio: 80000,
     popularidad: 4.2
    },
    {
     nombre: "Battlefield 1",
     descripcion: "Battlefield 1 es un videojuego de disparos y acción bélica en primera persona. El juego se ambienta en el periodo de la Primera Guerra Mundial, y está inspirado en eventos históricos. Los jugadores pueden usar armas de la Primera Guerra Mundial, incluyendo fusiles de cerrojo, fusiles automáticos y semiautomáticos, artillería, lanzallamas, y gas mostaza contra los enemigos.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/Battlefield1_cover.jpg?alt=media&token=5227837c-3b0e-475f-b685-e53c1eaf507d","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/Battlefield1BW_cover.jpg?alt=media&token=4d251f15-685f-453d-a22b-bc68be3fc1a8"],
     precio: 70000,
     popularidad: 4.5
    },
    {
     nombre: "Cyberpunk 2077",
     descripcion: "Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/Cyberpunk_cover.jpg?alt=media&token=cb4d1935-9d8a-4a6d-ae0d-360af2b7cd43","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/Cyberpunk_coverBW.jpg?alt=media&token=fd9df954-2c48-4ce2-bf4a-9bd9ce9e1d46"],
     precio: 130000,
     popularidad: 3.7
    },
    {
     nombre: "Dishonored 2",
     descripcion: "Dishonored 2 es un juego de acción-aventura y sigilo en primera persona. El jugador puede iniciar la campaña con Emily Kaldwin o Corvo Attano (protagonista de Dishonored) los cuales podrán expresarse a lo largo del juego. Ambos personajes tendrán habilidades y estilos de juego muy distintos.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/dishonored2_cover.jpg?alt=media&token=86eaffcf-cd48-4356-8575-5c5648d43250","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/dishonored2_coverBW.jpg?alt=media&token=c39be93a-6c2f-4fb0-a99b-3f7d4d28a5e4"],
     precio: 65000,
     popularidad: 4.5
    },
    {
     nombre: "Elden Ring",
     descripcion: "Elden Ring es un título de acción RPG a cargo de From Software y Bandai Namco. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/EldenRing_cover.jpg?alt=media&token=6f7f2db0-59fd-444f-855e-da53ad36f8eb","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/EldenRing_coveBWr.jpg?alt=media&token=df87b4bd-56f9-49d9-8bcb-0a3099ed6f54"],
      precio: 180000,
     popularidad: 4.9
    },
    {
     nombre: "Gran Turismo 7",
     descripcion: "La octava entrega principal de la serie Gran Turismo. ran Turismo 7 presenta el regreso de la campaña para un jugador, el modo de simulación GT. Otras características que regresan son el regreso de las pistas de carreras y los vehículos tradicionales, los eventos especiales, los campeonatos, la escuela de manejo, la tienda de piezas de tuning, el concesionario de autos usados y GT Auto, al mismo tiempo que conservan el nuevo modo GT Sport, Brand Central y Discover que se introdujeron en Gran Turismo Sport.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/gt7_cover.jpg?alt=media&token=cfb493db-0f52-405b-a1a5-cfde7133840f","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/gt7_coverBW.jpg?alt=media&token=7ad7a673-00ac-44d3-9d47-2e358a6c26dd"],
     precio: 130000,
     popularidad: 3.6
    },
    {
     nombre: "Grand Theft Auto V",
     descripcion: "Se trata de una aventura de acción de mundo abierto con multitud de misiones en la que encarnamos a tres personajes distintos: Trevor, Michael y Franklin. Además de contar con un modo multijugador en linea.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/gtaV_cover.jpg?alt=media&token=f29089d8-f4cb-46ef-9197-192cc1a2ea7f","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/gtaV_coverBW.jpg?alt=media&token=56eb76c2-b50b-499c-be66-2f45f3f76870"],
     precio: 80000,
     popularidad: 4.7
    },
    {
     nombre: "Hogwarts Legacy",
     descripcion: "Hogwarts Legacy es un juego de rol inmersivo en mundo abierto que se inspira de los libros de la saga Harry Potter. Disfruta del Hogwarts del siglo XIX.",  // DEBE IR OCULTA
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/Hogwarts_cover.jpg?alt=media&token=70a0eae4-8083-4785-bb55-a26ce5ee67e4","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/Hogwarts_coverBW.jpg?alt=media&token=a8aa3a8c-6531-4d12-a4c9-886f909be844"],
     precio: 180000,
     popularidad: 4.9
    },
    {
     nombre: "Red Dead Redemption 2",
     descripcion: "Ambientado en 1899, sigue las aventuras de Arthur Morgan y sus compañeros dentro de la banda de Dutch van der Linde doce años antes de la anterior entrega. En este videojuego regresan personajes como John Marston, el protagonista del título previo.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/rdr2_cover.jpg?alt=media&token=3446ded4-5759-4eca-a08b-b4e18fad76b0","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/rdr2_coverBW.jpg?alt=media&token=82665c63-3665-4e9e-9104-c6cf71caa53a"],
     precio: 80000,
     popularidad: 4.7
    },
    {
     nombre: "The Elder Scrolls V: Skyrim",
     descripcion: "Es un juego de rol de un solo jugador desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. Se trata de la quinta entrega de la serie de juegos de rpg/fantasía de The Elder Scrolls, y sigue a The Elder Scrolls IV: Oblivion en aproximadamente 200 años después de la historia del mismo, durante la Cuarta Era.",
     fotos: ["https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/skyrim_cover.png?alt=media&token=3caedf60-9f75-4be7-86c7-a6207a51371a","https://firebasestorage.googleapis.com/v0/b/jcortienda.appspot.com/o/skyrim_coverBW.png?alt=media&token=202f7091-152d-4637-ae04-b2aee3704492"],
     precio: 80000,
     popularidad: 4.3
     },
 
)
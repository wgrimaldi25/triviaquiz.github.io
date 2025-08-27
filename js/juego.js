//Arreglo que contiene las preguntas
const preguntas = [
    {
        id: 1,
        categoria: "general",
        titulo: "1. What is the largest ocean on Earth?",
        opcionA: "Atlantic Ocean",
        opcionB: "Indian Ocean",
        opcionC: "Arctic Ocean",
        opcionD: "Pacific Ocean",
        correcta: "d"
    },
    {
        id: 2,
        categoria: "general",
        titulo: "2. Who painted the Mona Lisa?",
        opcionA: "Vincent van Gogh",
        opcionB: "Leonardo da Vinci",
        opcionC: "Pablo Picasso",
        opcionD: "Claude Monet",
        correcta: "b"
    },
    {
        id: 3,
        categoria: "general",
        titulo: "3. What is the chemical symbol for gold?",
        opcionA: "Au",
        opcionB: "Ag",
        opcionC: "Pb",
        opcionD: "Fe",
        correcta: "a"
    },
    {
        id: 4,
        categoria: "general",
        titulo: "4. Which planet is known as the 'Red Planet'?",
        opcionA: "Jupiter",
        opcionB: "Mars",
        opcionC: "Venus",
        opcionD: "Saturn",
        correcta: "b"
    },
    {
        id: 5,
        categoria: "general",
        titulo: "5. What is the capital of Japan?",
        opcionA: "Seoul",
        opcionB: "Beijing",
        opcionC: "Tokyo",
        opcionD: "Bangkok",
        correcta: "c"
    },
    {
        id: 6,
        categoria: "general",
        titulo: "6. How many continents are there?",
        opcionA: "5",
        opcionB: "6",
        opcionC: "7",
        opcionD: "8",
        correcta: "c"
    },
    {
        id: 7,
        categoria: "general",
        titulo: "7. What is the longest river in the world?",
        opcionA: "Amazon River",
        opcionB: "Nile River",
        opcionC: "Mississippi River",
        opcionD: "Yangtze River",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "general",
        titulo: "8. Who wrote 'Romeo and Juliet'?",
        opcionA: "Charles Dickens",
        opcionB: "William Shakespeare",
        opcionC: "Jane Austen",
        opcionD: "Mark Twain",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "general",
        titulo: "9. What is the main component of the sun?",
        opcionA: "Oxygen",
        opcionB: "Helium",
        opcionC: "Hydrogen",
        opcionD: "Carbon",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "general",
        titulo: "10. What is the smallest country in the world?",
        opcionA: "Monaco",
        opcionB: "San Marino",
        opcionC: "Vatican City",
        opcionD: "Nauru",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "general",
        titulo: "11. What is the name of the largest mammal?",
        opcionA: "Elephant",
        opcionB: "Blue Whale",
        opcionC: "Giraffe",
        opcionD: "Hippopotamus",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "general",
        titulo: "12. Which country is home to the kangaroo?",
        opcionA: "Brazil",
        opcionB: "South Africa",
        opcionC: "Australia",
        opcionD: "China",
        correcta: "c"
    },
    {
        id: 13,
        categoria: "general",
        titulo: "13. What is the fastest land animal?",
        opcionA: "Lion",
        opcionB: "Cheetah",
        opcionC: "Gazelle",
        opcionD: "Horse",
        correcta: "b"
    },
    {
        id: 14,
        categoria: "general",
        titulo: "14. What is the largest desert in the world?",
        opcionA: "Sahara Desert",
        opcionB: "Gobi Desert",
        opcionC: "Antarctic Polar Desert",
        opcionD: "Arabian Desert",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "general",
        titulo: "15. What is the currency of Mexico?",
        opcionA: "Peso",
        opcionB: "Euro",
        opcionC: "Dollar",
        opcionD: "Yen",
        correcta: "a"
    },
    {
        id: 16,
        categoria: "general",
        titulo: "16. What is the human body's largest organ?",
        opcionA: "Heart",
        opcionB: "Brain",
        opcionC: "Liver",
        opcionD: "Skin",
        correcta: "d"
    },
    {
        id: 17,
        categoria: "general",
        titulo: "17. In which city is the Eiffel Tower located?",
        opcionA: "London",
        opcionB: "Rome",
        opcionC: "Paris",
        opcionD: "Berlin",
        correcta: "c"
    },
    {
        id: 18,
        categoria: "general",
        titulo: "18. What is the capital of Canada?",
        opcionA: "Toronto",
        opcionB: "Vancouver",
        opcionC: "Ottawa",
        opcionD: "Montreal",
        correcta: "c"
    },
    {
        id: 19,
        categoria: "general",
        titulo: "19. Who was the first man to walk on the moon?",
        opcionA: "Yuri Gagarin",
        opcionB: "Buzz Aldrin",
        opcionC: "Neil Armstrong",
        opcionD: "Alan Shepard",
        correcta: "c"
    },
    {
        id: 20,
        categoria: "general",
        titulo: "20. How many bones are in the adult human body?",
        opcionA: "206",
        opcionB: "212",
        opcionC: "184",
        opcionD: "250",
        correcta: "a"
    },
    //Preguntas de la categoria musica
    {
        id: 21,
        categoria: "musica",
        titulo: "1. Who is considered the King of Pop?",
        opcionA: "Elvis Presley",
        opcionB: "Michael Jackson",
        opcionC: "Madonna",
        opcionD: "Prince",
        correcta: "b"
    },
    {
        id: 22,
        categoria: "musica",
        titulo: "2. From which country is the rock band The Beatles originally from?",
        opcionA: "United States",
        opcionB: "England",
        opcionC: "Canada",
        opcionD: "Australia",
        correcta: "b"
    },
    {
        id: 23,
        categoria: "musica",
        titulo: "3. What is the real name of the singer Shakira?",
        opcionA: "Shakira Sofia Marquez Rivas",
        opcionB: "Shakira Isabel Mebarak Ripoll",
        opcionC: "Isabel Cristiana Shakira López",
        opcionD: "Shakira Elena Gonzales Torres",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "musica",
        titulo: "4. Which instrument does Carlos Santana mainly play?",
        opcionA: "Piano",
        opcionB: "Drums",
        opcionC: "Guitar",
        opcionD: "Saxophone",
        correcta: "c"
    },
    {
        id: 25,
        categoria: "musica",
        titulo: "5. Which of these musical genres was born in Jamaica?",
        opcionA: "Reggae",
        opcionB: "Merengue",
        opcionC: "Tango",
        opcionD: "Salsa",
        correcta: "a"
    },
        {
        id: 26,
        categoria: "musica",
        titulo: "6. Who was the lead vocalist of the band Queen?",
        opcionA: "David Bowie",
        opcionB: "Michael Jackson",
        opcionC: "Freddie Mercury",
        opcionD: "Elton John",
        correcta: "c"
    },
    {
        id: 27,
        categoria: "musica",
        titulo: "7. In what year was the famous Woodstock festival held?",
        opcionA: "1965",
        opcionB: "1975",
        opcionC: "1972",
        opcionD: "1969",
        correcta: "d"
    },
    {
        id: 28,
        categoria: "musica",
        titulo: "8. What is Beyoncé’s nickname?",
        opcionA: "Queen B",
        opcionB: "Diva B",
        opcionC: "Lady B",
        opcionD: "Star B",
        correcta: "a"
    },
    {
        id: 29,
        categoria: "musica",
        titulo: "9. Which band performed the famous song Hotel California?",
        opcionA: "The Rolling Stones",
        opcionB: "Eagles",
        opcionC: "Aerosmith",
        opcionD: "Pink Floyd",
        correcta: "b"
    },
    {
        id: 30,
        categoria: "musica",
        titulo: "10. From which country is the singer Rosalía?",
        opcionA: "Mexico",
        opcionB: "Spain",
        opcionC: "Argentina",
        opcionD: "Colombia",
        correcta: "b"
    },
        {
        id: 31,
        categoria: "musica",
        titulo: "11. Who sings the song Flowers?",
        opcionA: "Ariana Grande",
        opcionB: "Dua Lipa",
        opcionC: "Miley Cyrus",
        opcionD: "Taylor Swift",
        correcta: "c"
    },
    {
        id: 32,
        categoria: "musica",
        titulo: "12. Which artist released the album Un Verano Sin Ti in 2022?",
        opcionA: "J Balvin",
        opcionB: "Bad Bunny",
        opcionC: "Rauw Alejandro",
        opcionD: "Feid",
        correcta: "b"
    },
    {
        id: 33,
        categoria: "musica",
        titulo: "13. What is Karol G’s real name?",
        opcionA: "Carolina Giraldo Navarro",
        opcionB: "Karolina Guiterrez Navas",
        opcionC: "Camila Gonzales Rivera",
        opcionD: "Carla García Nuñez",
        correcta: "a"
    },
    {
        id: 34,
        categoria: "musica",
        titulo: "14. Which of these songs is by Olivia Rodrigo?",
        opcionA: "Peaches",
        opcionB: "Drivers License",
        opcionC: "Señorita",
        opcionD: "Perfect",
        correcta: "b"
    },
    {
        id: 35,
        categoria: "musica",
        titulo: "15. Who was part of One Direction and now has a solo career?",
        opcionA: "Harry Styles",
        opcionB: "Charlie Puth",
        opcionC: "Bruno Mars",
        opcionD: "Justin Bieber",
        correcta: "a"
    },
        {
        id: 36,
        categoria: "musica",
        titulo: "16. Which singer released the song Tusa with Nicki Minaj?",
        opcionA: "Shakira",
        opcionB: "Becky G",
        opcionC: "Rosalía",
        opcionD: "Karol G",
        correcta: "d"
    },
    {
        id: 37,
        categoria: "musica",
        titulo: "17. Which of these artists is Spanish?",
        opcionA: "Tini",
        opcionB: "Natti Natasha",
        opcionC: "Rosalía",
        opcionD: "Greeicy",
        correcta: "c"
    },
    {
        id: 38,
        categoria: "musica",
        titulo: "18. Who sings Stay with The Kid LAROI?",
        opcionA: "Justin Bieber",
        opcionB: "Post Malone",
        opcionC: "Shawn Mendes",
        opcionD: "Drake",
        correcta: "a"
    },
    {
        id: 39,
        categoria: "musica",
        titulo: "19. Which BLACKPINK member released the song Money as a solo artist?",
        opcionA: "BrunoMars",
        opcionB: "Rosé",
        opcionC: "Jisoo",
        opcionD: "Lisa",
        correcta: "d"
    },
    {
        id: 40,
        categoria: "musica",
        titulo: "20. Who sings Industry Baby with Jack Harlow?",
        opcionA: "Drake",
        opcionB: "Travis Scott",
        opcionC: "Lil Nas X",
        opcionD: "Post Malone",
        correcta: "c"
    },
    //Preguntas de la categoria deportes
    {
        id: 41,
        categoria: "deportes",
        titulo: "1. Which country has won the most FIFA World Cups up to 2022?",
        opcionA: "Germany",
        opcionB: "Brazil",
        opcionC: "Italy",
        opcionD: "Argentina",
        correcta: "b"
    },
    {
        id: 42,
        categoria: "deportes",
        titulo: "2. In basketball, how many players per team must be on the court at the start?",
        opcionA: "6",
        opcionB: "7",
        opcionC: "5",
        opcionD: "4",
        correcta: "c"
    },
    {
        id: 43,
        categoria: "deportes",
        titulo: "3. In which city were the 2016 Olympic Games held?",
        opcionA: "Tokyo",
        opcionB: "Rio de Janeiro",
        opcionC: "London",
        opcionD: "Beijing",
        correcta: "b"
    },
    {
        id: 44,
        categoria: "deportes",
        titulo: "4. What is the surface of the Roland Garros tennis tournament?",
        opcionA: "Grass",
        opcionB: "Clay",
        opcionC: "Hard Count",
        opcionD: "Wood",
        correcta: "b"
    },
    {
        id: 45,
        categoria: "deportes",
        titulo: "5. Who is known as “The King of Football”?",
        opcionA: "Pelé",
        opcionB: "Diego Maradona",
        opcionC: "Lionel Messi",
        opcionD: "Cristiano Ronaldo",
        correcta: "a"
    },
        {
        id: 46,
        categoria: "deportes",
        titulo: "6. Which team won the UEFA Euro 2008?",
        opcionA: "Germany",
        opcionB: "France",
        opcionC: "Spain",
        opcionD: "Italy",
        correcta: "c"
    },
    {
        id: 47,
        categoria: "deportes",
        titulo: "7. In baseball, how many bases are there on the field?",
        opcionA: "3",
        opcionB: "4",
        opcionC: "5",
        opcionD: "6",
        correcta: "b"
    },
    {
        id: 48,
        categoria: "deportes",
        titulo: "8. Which country is famous for sumo wrestling as a traditional sport?",
        opcionA: "China",
        opcionB: "South Korea",
        opcionC: "Japan",
        opcionD: "Mongolia",
        correcta: "c"
    },
    {
        id: 49,
        categoria: "deportes",
        titulo: "9. What is the regular duration of a professional soccer match?",
        opcionA: "80 minutes",
        opcionB: "90 minutes",
        opcionC: "100 minutes",
        opcionD: "70 minutes",
        correcta: "b"
    },
    {
        id: 50,
        categoria: "deportes",
        titulo: "10. Which sport is played with a board and a wave?",
        opcionA: "Surfing",
        opcionB: "Skateboarding",
        opcionC: "Windsurfing",
        opcionD: "Snowboarding",
        correcta: "a"
    },
        {
        id: 51,
        categoria: "deportes",
        titulo: "11. Who won the 2010 FIFA World Cup?",
        opcionA: "Spain",
        opcionB: "Netherlands",
        opcionC: "Brazil",
        opcionD: "Germany",
        correcta: "a"
    },
    {
        id: 52,
        categoria: "deportes",
        titulo: "12. Which is the most-watched sporting event in the world every 4 years?",
        opcionA: "Super Bowl",
        opcionB: "Olympic Games",
        opcionC: "FIFA World Cup",
        opcionD: "Tour de France",
        correcta: "c"
    },
    {
        id: 53,
        categoria: "deportes",
        titulo: "13. What does NBA stand for?",
        opcionA: "National Basketball Association",
        opcionB: "National Baseball Association",
        opcionC: "New Basketball Alliance",
        opcionD: "National Ball Association",
        correcta: "a"
    },
    {
        id: 54,
        categoria: "deportes",
        titulo: "14. Which national team has played in every FIFA World Cup up to 2022?",
        opcionA: "Italy",
        opcionB: "Germany",
        opcionC: "Argentina",
        opcionD: "Brazil",
        correcta: "d"
    },
    {
        id: 55,
        categoria: "deportes",
        titulo: "15. In which sport did Michael Phelps excel?",
        opcionA: "Gymnastics",
        opcionB: "Tennis",
        opcionC: "Swimming",
        opcionD: "Athletics",
        correcta: "c"
    },
        {
        id: 56,
        categoria: "deportes",
        titulo: "16. In which city was the baseball team Yankees founded?",
        opcionA: "Chicago",
        opcionB: "New York",
        opcionC: "Los Angeles",
        opcionD: "Boston",
        correcta: "b"
    },
    {
        id: 57,
        categoria: "deportes",
        titulo: "17. Who is nicknamed “La Pulga” (The Flea) in football?",
        opcionA: "Neymar",
        opcionB: "Cristiano Ronaldo",
        opcionC: "Lionel Messi",
        opcionD: "Kylian Mbappé",
        correcta: "c"
    },
    {
        id: 58,
        categoria: "deportes",
        titulo: "18. Which country won the first FIFA World Cup in 1930?",
        opcionA: "Brazil",
        opcionB: "Uruguay",
        opcionC: "Argentina",
        opcionD: "Italy",
        correcta: "b"
    },
    {
        id: 59,
        categoria: "deportes",
        titulo: "19. How many rings are there in the Olympic Games logo?",
        opcionA: "4",
        opcionB: "5",
        opcionC: "6",
        opcionD: "7",
        correcta: "b"
    },
    {
        id: 60,
        categoria: "deportes",
        titulo: "20. Which country is the origin of the Tour de France?",
        opcionA: "Spain",
        opcionB: "Italy",
        opcionC: "France",
        opcionD: "Belgium",
        correcta: "c"
    },
    //Preguntas de la categoria 
    {
        id: 61,
        categoria: "Programacion",
        titulo: "1. What is a 'variable' in programming?",
        opcionA: "A fixed value that cannot be changed.",
        opcionB: "A special command to exit a program.",
        opcionC: "A named storage location for data.",
        opcionD: "A tool used for debugging code.",
        correcta: "c"
    },
    {
        id: 62,
        categoria: "Programacion",
        titulo: "2. Which of the following is a 'boolean' data type?",
        opcionA: "500",
        opcionB: "'Hello'",
        opcionC: "True",
        opcionD: "3.14",
        correcta: "c"
    },
    {
        id: 63,
        categoria: "Programacion",
        titulo: "3. What is the purpose of an 'if-else' statement?",
        opcionA: "To repeat a block of code.",
        opcionB: "To store multiple values.",
        opcionC: "To execute code based on a condition.",
        opcionD: "To declare a new function.",
        correcta: "c"
    },
    {
        id: 64,
        categoria: "Programacion",
        titulo: "4. What is the process of finding and fixing errors in code called?",
        opcionA: "Compiling",
        opcionB: "Debugging",
        opcionC: "Executing",
        opcionD: "Synthesizing",
        correcta: "b"
    },
    {
        id: 65,
        categoria: "Programacion",
        titulo: "5. What is a 'function'?",
        opcionA: "A single instruction in a program.",
        opcionB: "A block of reusable code that performs a specific task.",
        opcionC: "A numerical value with decimals.",
        opcionD: "A comment that explains the code.",
        correcta: "b"
    },
    {
        id: 66,
        categoria: "Programacion",
        titulo: "6. Which symbol is commonly used to create a single-line comment in many programming languages?",
        opcionA: "##",
        opcionB: "->",
        opcionC: "//",
        opcionD: "&&",
        correcta: "c"
    },
    {
        id: 67,
        categoria: "Programacion",
        titulo: "7. What is the result of '5 + 3 * 2' following the order of operations?",
        opcionA: "16",
        opcionB: "13",
        opcionC: "10",
        opcionD: "8",
        correcta: "a"
    },
    {
        id: 68,
        categoria: "Programacion",
        titulo: "8. What is the main purpose of a 'for loop'?",
        opcionA: "To make decisions.",
        opcionB: "To repeat a block of code a specific number of times.",
        opcionC: "To handle errors.",
        opcionD: "To store information.",
        correcta: "b"
    },
    {
        id: 69,
        categoria: "Programacion",
        titulo: "9. What is a 'syntax error'?",
        opcionA: "An error that causes the program to crash.",
        opcionB: "An error in the logic of the program.",
        opcionC: "A violation of the language's grammar rules.",
        opcionD: "A mistake in a variable name.",
        correcta: "c"
    },
{
        id: 71,
        categoria: "Programacion",
        titulo: "11. What is 'pseudocode'?",
        opcionA: "A type of machine code.",
        opcionB: "A simplified programming language.",
        opcionC: "An informal high-level description of a program.",
        opcionD: "Code that contains a virus.",
        correcta: "c"
    },
    {
        id: 72,
        categoria: "Programacion",
        titulo: "12. What does 'API' stand for?",
        opcionA: "Application Protocol Interface",
        opcionB: "Automated Program Integration",
        opcionC: "Application Programming Interface",
        opcionD: "Advanced Program Interruption",
        correcta: "c"
    },
    {
        id: 73,
        categoria: "Programacion",
        titulo: "13. What is the process of converting source code into machine code called?",
        opcionA: "Debugging",
        opcionB: "Compiling",
        opcionC: "Running",
        opcionD: "Linking",
        correcta: "b"
    },
    {
        id: 74,
        categoria: "Programacion",
        titulo: "14. What is a 'loop' that never ends called?",
        opcionA: "A recursive loop",
        opcionB: "An infinite loop",
        opcionC: "A nested loop",
        opcionD: "A while loop",
        correcta: "b"
    },
    {
        id: 75,
        categoria: "Programacion",
        titulo: "15. In Python, which keyword is used to define a function?",
        opcionA: "func",
        opcionB: "def",
        opcionC: "create",
        opcionD: "function",
        correcta: "b"
    },
    {
        id: 76,
        categoria: "Programacion",
        titulo: "16. What is a 'class' in object-oriented programming?",
        opcionA: "A type of variable.",
        opcionB: "A blueprint for creating objects.",
        opcionC: "A single instruction in a program.",
        opcionD: "A list of data.",
        correcta: "b"
    },
    {
        id: 77,
        categoria: "Programacion",
        titulo: "17. What is the output of 'print(10 % 3)'?",
        opcionA: "3",
        opcionB: "1",
        opcionC: "3.33",
        opcionD: "0",
        correcta: "b"
    },
    {
        id: 78,
        categoria: "Programacion",
        titulo: "18. What is the purpose of an 'array'?",
        opcionA: "To store a single variable.",
        opcionB: "To create a function.",
        opcionC: "To store a collection of elements of the same type.",
        opcionD: "To perform a calculation.",
        correcta: "c"
    },
    {
        id: 79,
        categoria: "Programacion",
        titulo: "19. Which programming paradigm focuses on 'objects' and their interactions?",
        opcionA: "Procedural Programming",
        opcionB: "Functional Programming",
        opcionC: "Declarative Programming",
        opcionD: "Object-Oriented Programming",
        correcta: "d"
    },
    {
        id: 80,
        categoria: "Programacion",
        titulo: "20. What is 'git' primarily used for?",
        opcionA: "To create graphical user interfaces.",
        opcionB: "To manage and track changes in source code.",
        opcionC: "To debug a program.",
        opcionD: "To compile code.",
        correcta: "b"
    },
    //Preguntas de la categoria juegos
    {
        id: 81,
        categoria: "juegos",
        titulo: "1. What was the first video game console ever created in history?",
        opcionA: "Nes",
        opcionB: "Magnavox Odyssey",
        opcionC: "Atari 2600",
        opcionD: "Sega Master System",
        correcta: "b"
    },
    {
        id: 82,
        categoria: "juegos",
        titulo: "2. Which character is the official mascot of Nintendo?",
        opcionA: "Link",
        opcionB: "Donkey Kong",
        opcionC: "Mario Bros",
        opcionD: "Pikachu",
        correcta: "c"
    },
    {
        id: 83,
        categoria: "juegos",
        titulo: "3. In which video game does Sonic the Hedgehog first appear?",
        opcionA: "Sonic Adventure",
        opcionB: "Sonic the Hedgehog (1991)",
        opcionC: "Sonic Generations",
        opcionD: "Sonic Mania",
        correcta: "b"
    },
    {
        id: 84,
        categoria: "juegos",
        titulo: "4. Which video game is considered the best-selling of all time?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Mario Kart 8 Deluxe",
        correcta: "b"
    },
    {
        id: 85,
        categoria: "juegos",
        titulo: "5. In The Legend of Zelda saga, what is the name of the princess?",
        opcionA: "Zelda",
        opcionB: "Peach",
        opcionC: "Link",
        opcionD: "Samus",
        correcta: "a"
    },
    {
        id: 86,
        categoria: "juegos",
        titulo: "6. What was Nintendo’s first handheld console?",
        opcionA: "Game Boy",
        opcionB: "Nintendo DS",
        opcionC: "Game & Watch",
        opcionD: "3DS",
        correcta: "c"
    },
    {
        id: 87,
        categoria: "juegos",
        titulo: "7. Which company developed the game Fortnite?",
        opcionA: "Activision",
        opcionB: "Ubisoft",
        opcionC: "Riot Games",
        opcionD: "Epic Games",
        correcta: "d"
    },
    {
        id: 88,
        categoria: "juegos",
        titulo: "8. In Pokémon, what is the name of the professor who gives trainers their first Pokémon in the Kanto region?",
        opcionA: "Professor Birch",
        opcionB: "Professor Sycamore",
        opcionC: "Professor Elm",
        opcionD: "Professor Oak",
        correcta: "d"
    },
    {
        id: 89,
        categoria: "juegos",
        titulo: "9. Which video game series features Kratos as the protagonist?",
        opcionA: "Devil May Cry",
        opcionB: "God of War",
        opcionC: "Dark Souls",
        opcionD: "The Witcher",
        correcta: "b"
    },
    {
        id: 90,
        categoria: "juegos",
        titulo: "10. In Minecraft, which mineral do you need to reach the Nether?",
        opcionA: "Diamond",
        opcionB: "Gold",
        opcionC: "Iron",
        opcionD: "Obsidian",
        correcta: "d"
    },
    {
        id: 91,
        categoria: "juegos",
        titulo: "11. Which video game popularized the Battle Royale genre in 2017?",
        opcionA: "Free Fire",
        opcionB: "PUBG",
        opcionC: "Call of Duty: Warzone",
        opcionD: "Fortnite",
        correcta: "b"
    },
    {
        id: 92,
        categoria: "juegos",
        titulo: "12. What is Master Chief’s most iconic weapon in Halo?",
        opcionA: "Assault Rifle",
        opcionB: "Energy Sword",
        opcionC: "Sniper Rifle",
        opcionD: "Plasma Pistol",
        correcta: "b"
    },
    {
        id: 93,
        categoria: "juegos",
        titulo: "13. In which video game does Donkey Kong first appear?",
        opcionA: "Donkey Kong Country",
        opcionB: "Donkey Kong Jr.",
        opcionC: "Mario Bros",
        opcionD: "Donkey Kong (1981)",
        correcta: "d"
    },
    {
        id: 94,
        categoria: "juegos",
        titulo: "14. What is Scorpion’s iconic phrase in Mortal Kombat?",
        opcionA: "Get over here!",
        opcionB: "Finish him!",
        opcionC: "Toasty!",
        opcionD: "Pure Chaos!",
        correcta: "a"
    },
    {
        id: 95,
        categoria: "juegos",
        titulo: "15. In which fictional city does most of GTA V take place?",
        opcionA: "Los Santos",
        opcionB: "Vice City",
        opcionC: "Liberty City",
        opcionD: "San Fierro",
        correcta: "a"
    },
    {
        id: 96,
        categoria: "juegos",
        titulo: "16. What was Sony’s first console?",
        opcionA: "PlayStation 3",
        opcionB: "PlayStation 2",
        opcionC: "PlayStation",
        opcionD: "PlayStation Portable",
        correcta: "c"
    },
    {
        id: 97,
        categoria: "juegos",
        titulo: "17. Which video game is mainly played with falling pieces that must be fitted together?",
        opcionA: "Fortnite",
        opcionB: "Minecraft",
        opcionC: "Tetris",
        opcionD: "Space Invaders",
        correcta: "c"
    },
    {
        id: 98,
        categoria: "juegos",
        titulo: "18. In Among Us, what role do the impostors have?",
        opcionA: "Repair the ship",
        opcionB: "Eliminate the crewmates without being detected",
        opcionC: "Collect resources",
        opcionD: "Complete tasks faster",
        correcta: "b"
    },
    {
        id: 99,
        categoria: "juegos",
        titulo: "19. Which character is known as the “Hero of Hyrule”?",
        opcionA: "Ganondorf",
        opcionB: "Link",
        opcionC: "Zelda",
        opcionD: "Epona",
        correcta: "b"
    },
    {
        id: 100,
        categoria: "juegos",
        titulo: "20. What was Microsoft’s first console?",
        opcionA: "Xbox 360",
        opcionB: "Xbox One",
        opcionC: "Xbox Series X",
        opcionD: "Xbox",
        correcta: "d"
    },
    //Preguntas de la categoria peliculas
    {
        id: 101,
        categoria: "peliculas",
        titulo: "1. What Disney-Pixar movie features a clownfish named Marlin searching for his son, Nemo?",
        opcionA: "Finding Dory",
        opcionB: "Monster Inc.",
        opcionC: "Finding Nemo",
        opcionD: "Toy Story",
        correcta: "c"
    },
    {
        id: 102,
        categoria: "peliculas",
        titulo: "2. Which of these superhero movies stars Tom Holland as the main character?",
        opcionA: "Captain America: The First Avenger",
        opcionB: "Iron Man 2",
        opcionC: "Avengers: Endgame",
        opcionD: "Spiderman: Homecoming",
        correcta: "d"
    },
    {
        id: 103,
        categoria: "peliculas",
        titulo: "3. What group of superheroes joins together to stop Thanos in Avengers: Infinity War?",
        opcionA: "Justice League",
        opcionB: "The Avengers",
        opcionC: "Guardians of the Galaxy",
        opcionD: "The X-Men",
        correcta: "b"
    },
    {
        id: 104,
        categoria: "peliculas",
        titulo: "4. In which Pixar animated movie are the toys based on a boy named Andy?",
        opcionA: "Finding Nemo",
        opcionB: "Monster Inc.",
        opcionC: "Toy Story",
        opcionD: "Cars",
        correcta: "c"
    },
    {
        id: 105,
        categoria: "peliculas",
        titulo: "5. Who is the director of the movie Inception, known for its complex plot?",
        opcionA: "Steven Spielberg",
        opcionB: "Quentin Tarantino",
        opcionC: "Christopher Nolan",
        opcionD: "Martin Scorsese",
        correcta: "c"
    },
        {
        id: 106,
        categoria: "peliculas",
        titulo: "6. What is the name of the main character in the Harry Potter saga?",
        opcionA: "Ron Weasley",
        opcionB: "Draco Malfoy",
        opcionC: "Severus Snape",
        opcionD: "Harry Potter",
        correcta: "d"
    },
    {
        id: 107,
        categoria: "peliculas",
        titulo: "7. In the movie The Greatest Showman, who plays P.T. Barnum, the showman who creates a circus of oddities?",
        opcionA: "Zac Efron",
        opcionB: "Hugh Jackman",
        opcionC: "Ryan Gosling",
        opcionD: "Chris Hemsworth",
        correcta: "b"
    },
    {
        id: 108,
        categoria: "peliculas",
        titulo: "8. Which of these movies is not part of the Star Wars saga?",
        opcionA: "The Empire Strikes Back",
        opcionB: "A New Hope",
        opcionC: "The Lord of the Rings",
        opcionD: "The Force Awakens",
        correcta: "c"
    },
    {
        id: 109,
        categoria: "peliculas",
        titulo: "9. What psychological horror movie follows a group of teenagers who are attacked by a monster known as Pennywise?",
        opcionA: "Anabelle",
        opcionB: "IT",
        opcionC: "Scream",
        opcionD: "SlenderMan",
        correcta: "b"
    },
        {
        id: 110,
        categoria: "peliculas",
        titulo: "10. What is the name of the protagonist in the Disney animated movie Coco, who travels to the land of the dead?",
        opcionA: "Miguel",
        opcionB: "Héctor",
        opcionC: "Ernesto de la Cruz",
        opcionD: "Tía Rosita",
        correcta: "a"
    },
    {
        id: 111,
        categoria: "peliculas",
        titulo: "11. Which of these superhero movies stars Tom Holland as the main character?In the movie The Hunger Games, who is the girl who volunteers to represent her district?",
        opcionA: "Katniss Everdeen",
        opcionB: "Bella Swan",
        opcionC: "Triss Prior",
        opcionD: "Hermione Granger",
        correcta: "a"
    },
    {
        id: 112,
        categoria: "peliculas",
        titulo: "12. What 2014 science-fiction movie features an interstellar journey through a wormhole?",
        opcionA: "Gravity",
        opcionB: "Dune",
        opcionC: "Arrival",
        opcionD: "Interstellar",
        correcta: "d"
    },
    {
        id: 113,
        categoria: "peliculas",
        titulo: "13. Which of these Disney movies features a princess who lives on the island of Motunui?",
        opcionA: "Frozen",
        opcionB: "Moana",
        opcionC: "Tangled",
        opcionD: "Brave",
        correcta: "b"
    },
        {
        id: 114,
        categoria: "peliculas",
        titulo: "14. What character from the movie Joker is a failed comedian who becomes a criminal?",
        opcionA: "Harley Quinn",
        opcionB: "Bruce Wayne",
        opcionC: "Arthur Fleck",
        opcionD: "Commissioner Gordon",
        correcta: "c"
    },
    {
        id: 115,
        categoria: "peliculas",
        titulo: "15. What animal is the protagonist's best friend in the movie How to Train Your Dragon?",
        opcionA: "Wolf",
        opcionB: "Eagle",
        opcionC: "Dragon",
        opcionD: "Horse",
        correcta: "c"
    },
    {
        id: 116,
        categoria: "peliculas",
        titulo: "16. In the movie Spider-Man: Into the Spider-Verse, how many different Spider-Men from different realities come together?",
        opcionA: "One",
        opcionB: "Three",
        opcionC: "Five",
        opcionD: "Seven",
        correcta: "c"
    },
    {
        id: 117,
        categoria: "peliculas",
        titulo: "17. What director is known for movies like Pulp Fiction and Kill Bill?",
        opcionA: "Steven Spielberg",
        opcionB: "Quentin Tarantino",
        opcionC: "Christopher Nolan",
        opcionD: "Martin Scorsese",
        correcta: "b"
    },
    {
        id: 118,
        categoria: "peliculas",
        titulo: "18. What is the name of the character played by Johnny Depp in Pirates of the Caribbean?",
        opcionA: "Jack Sparrow",
        opcionB: "Will Turner",
        opcionC: "Hector Barbossa",
        opcionD: "Davy Jones",
        correcta: "a"
    },
    {
        id: 119,
        categoria: "peliculas",
        titulo: "19. What 2019 DC Comics movie centers on a teenager who discovers the truth about the Dark Justice League?",
        opcionA: "Shazam!",
        opcionB: "Aquaman",
        opcionC: "Superman",
        opcionD: "The Flash",
        correcta: "a"
    },
    {
        id: 120,
        categoria: "peliculas",
        titulo: "20. What animated movie follows a family of robots who suddenly find themselves in a war against their own technology?",
        opcionA: "Big Hero 6",
        opcionB: "WALL-E",
        opcionC: "Robots",
        opcionD: "The Mitchells vs. The Machines",
        correcta: "d"
    }
]

//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=20){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    

})


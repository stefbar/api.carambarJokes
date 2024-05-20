-- SQLite
-- PRAGMA foreign_keys = ON;

-- DROP TABLE IF EXISTS carambarJokes;
-- DROP TABLE IF EXISTS jokesCategories;

-- CREATE TABLE IF NOT EXISTS JokesCategories (
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     category VARCHAR(150) NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS CarambarJokes (
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     joke VARCHAR(255) NOT NULL,
--     answer VARCHAR(255),
--     category_id INTEGER,
--     FOREIGN KEY (category_id) REFERENCES jokesCategories(id) ON DELETE SET NULL
-- );

-- INSERT INTO JokesCategories (category)
-- VALUES ("story"),
-- ("question"),
-- ("charade");

-- INSERT INTO CarambarJokes (joke, answer, category_id)
-- VALUES ("Quelle est la femelle du hamster ?", "L’Amsterdam.", 2),
--     ("Que dit un oignon quand il se cogne ?", "Aïe !", 2),
--     ("Quel est l'animal le plus heureux ?", "Le hibou, parce que sa femme est chouette.", 2),
--     ("Pourquoi le football c'est rigolo ?", "Parce que Thierry en rit.", 2),
--     ("Quel est le sport le plus fruité ?", "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.", 2),
--     ("Que se fait un Schtroumpf quand il tombe ?", "Un Bleu.", 2),
--     ("Quel est le comble pour un marin ?", "Avoir le nez qui coule.", 2),
--     ("Qu'est ce que les enfants usent le plus à l'école ?", "Le professeur.", 2),
--     ("Quel est le sport le plus silencieux ?", "Le para-chuuuut.", 2),
--     ("Quel est le comble pour un joueur de bowling ?", "C’est de perdre la boule.", 2);

-- SELECT * FROM CarambarJokes INNER JOIN JokesCategories ON CarambarJokes.category_id = JokesCategories.id

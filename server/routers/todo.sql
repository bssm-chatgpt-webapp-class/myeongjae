CREATE TABLE todo (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    todo TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    authorId INT NOT NULL
)

INSERT INTO todo("todo1", true)
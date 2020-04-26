CREATE TABLE tasks
(
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (100),
    "completed" BOOLEAN DEFAULT FALSE,
    "added" DATE DEFAULT NOW(),
    "due" DATE,
    "done" DATE,
    "category" VARCHAR (25) Default 'General'
);


INSERT INTO "tasks"
    ("description", "added", "category")
VALUES
    ('build TODO app, basemode', NOW(), 'Prime Homework');

INSERT INTO "tasks"
    ("description", "added", "category")
VALUES
    ('build TODO app, stretchmode', NOW(), 'Prime Homework');
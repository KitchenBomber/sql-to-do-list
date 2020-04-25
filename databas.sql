CREATE TABLE tasks
(
    "id" SERIAL PRIMARY KEY,
    "task_description" VARCHAR (100),
    "task_completed" BOOLEAN DEFAULT FALSE,
    "date_added" DATE DEFAULT NOW(),
    "date_due" DATE,
    "date_completed" DATE,
    "task_category" VARCHAR (25) Default 'General'
);



INSERT INTO "tasks"
    ("task_description", "date_added", "task_category")
VALUES
    ('build TODO app, basemode', NOW(), 'Prime Homework');

INSERT INTO "tasks"
    ("task_description", "date_added", "task_category")
VALUES
    ('build TODO app, stretchmode', NOW(), 'Prime Homework');
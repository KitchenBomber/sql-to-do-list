CREATE TABLE tasks
(
    "id" SERIAL PRIMARY KEY,
    "task_description" VARCHAR (100),
    "task_completed" BOOLEAN DEFAULT FALSE,
    "date_added" DATE DEFAULT NOW(),
    "date_completed" DATE,
    "task_category" VARCHAR (25) Default 'General'
);


SELECT *
FROM "tasks";
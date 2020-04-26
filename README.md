Shared To Do List:

This app will allow multiple users to view a shared to-do list.
<!-- picture of basic list -->
Any user will be able to add items to the list, remove items from the list or mark list items complete.
<!-- picture with icons checked off and some previously shown items no longer present -->



Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

[x] set up file tree
[x] set up file dependencies
    [x]make sure js and jquery are working
[x] create database
    [x] Database Table should have a minimum of task Description and Task Completed, 
    [x] I could also include columns for the date that it was created, the date that it needs to be completed and a category for sorting tasks
[x] server connected
[x] html functionality created
[x] click listener for Add Button
[x] connect to database
[x] create Get Route
    [x] create append to DOM
    [] new buttons need new clickees
[x] create Post Route to add tasks to the database
[x] Create Delete Route to remove tasks from the database
[x] Create Put rout to check off tasks
    [x] include visual representation (maybe a big green checkbox .img)
    [x] needs to be stored in the database so that completed tasks refresh as still completed.
[] maybe add a favicon
[] clear fields with submit
[] put on web





REQs
* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.

## Architecture

- `\docs`: docs folder, all the md files will be here
- `\env`: this folder have some global variables that our project needs
- `\src`:
  - `\app`: folder that contains application itself
    - `\controllers`: manages requests and returns a response
    - `\models`: manages the data of the application
    - `\services`: manages the logic and rules of the application 
    - `\middlewares`: manages functions that runs before controller
    - `\exceptions`: manages the occurrence of exceptions
    - `\validators`: manages parameters passed to controllers
  - `\config`: config files for project like database,
  - `\database`:
    - `\migrations`: files to create, delete, modify tables in database
    - `\seeders`: files to populate table with some values
  - `\utils`: folder that will have codes that will help the programmer to avoid redoing certain tasks
  - `\routes`: refers to how application endpoints will respond to client requests.
  - `app.js`: imports all files to compile project
  - `server.js`: the main file, starts the app.js and server

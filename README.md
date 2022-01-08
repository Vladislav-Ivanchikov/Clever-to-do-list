# Innowise Lab Internship Level 1 Clever to do list

## Task:

https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit#

## How to run the app

In the project directory, you can run:

`npm install`
`npm start`

To open the application follow link in browser "http://localhost:3000"

## Application stack:

1. sass
2. bootstrap
3. axios
4. moment js

## Database snapshot:

I'm using realtime database. When adding a task for a user, a separate branch is created in the database with a user id.
Unique ID is created for each task. Tasks are loaded for each user based on UID. Tasks items consist of several fields:

1. complete - status 'done' for task
2. date - task date
3. title
4. description

Screenshot of the realtime database:
![DB screen](https://files.fm/thumb_show.php?i=7grbuzbs5)

Screenshot of authenticated users:
![Auth screen](https://files.fm/thumb_show.php?i=gq62th6ca)


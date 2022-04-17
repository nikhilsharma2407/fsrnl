*Create a package.json file*
npm init --yes

npm install -g ts-node nodemon

npm i express typescript @types/express @types/node

*Generating tsconfig.json*
npx tsc --init

*cors error*
npm i cors


*mongodb download link*
https://www.mongodb.com/try/download/community

*Start mongodb server*
mongod --dbpath ~/path/to/your/app/data

npm i mongoose

*bcrypt library for hashing passwords*

npm i @types/bcrypt brypt

*Setting up .env*
Important - put the env files in gitignore and **NEVER** commit them or store them over remote repo.

https://www.geeksforgeeks.org/setting-up-environment-variables-in-node-js-in-a-platform-independent-way/
npm i @types/node @types/dotenv dotenv

create a environment.d.ts file (for typescript error check/autocomplete), .env file

*jwt*
npm i jsonwebtoken @types/jsonwebtoken 

*cookie parser*
npm i cookie-parser
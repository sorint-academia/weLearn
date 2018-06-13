# WeLearn-FE
WeLearn-FE is weLearn's frontend. WeLearn is a web application which enable the user to follow some courses and to modify/build/exec online programming exercises.
**WARNING**: It's not recommended to put it in production because it is not ready yet. There are many security and functionality issues.
## Requirements
It requires ```docker```, ```keycloak```, ```npm``` and ```welearn-be```.
## Keycloak setup
* Create a REALM
* Create the role TEACHER
* Add some users.
* Create a client welearn-fe with:
  * Valid Redirect URIs = '*'
  * Web Origins = '*'
## Configuration of the project
There is a configuration file called ```environment.ts``` in ```src/environments```. It should be configured accordingly your needs.
In particular set the correct keycloak url and backend base url.
## Setup (on docker)
```bash
git clone https://github.com/Marconi-weLearn/weLearn.git
cd weLearn
npm install
npm run build-dev --aot
docker build -t welearn-fe:latest .
docker run -dp 8083:8080 --name welearn-fe welearn-fe:latest
```


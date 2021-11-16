# Getting Started

## The Apis

| Service | Development Port | Production |
|----|---|---|
| Angular Dev Server | http://localhost:4200 | TBD |
| Status API | http://localhost:5000 | TBD |


### Angular App

To start it run:
(make sure you run this from the folder at the root of your project, the one with the `angular.json` file in it)

```powershell
ng serve -o
```


### Status API

(Note: Make sure Docker Desktop is running)

```powershell
 docker run -d -p 5000:80 status-api:v2
```

## Building the Container

```powershell
docker build -f .\StatusApi\Dockerfile -t jeffrygonzalez/statusapi:v1 .

```

# Jobs Portal
Jobs Portal is a website which brings together job posters and job seekers. It enable employers to post their jobs and find new talents. It also help employee to find jobs.

## Technologies Used
* Docker
* React
* Redux
* Typescript
* Bootstrap

## Local Development Environment Setup (with Backend Node Service)
Node Service Repository Link: https://github.com/noorsheikh/jobs-portal-service
Node: In order for your node backend to be in sync with the UI portal, please clone the above repo in the same directory where you have the code for the React UI.

First step is to install [Docker Desktop](https://hub.docker.com/?overlay=onboarding) on your local computer.

### Build docker image and launch containers
From terminal go the root directory of project and execute below command.
```
docker-compose build
```
Note: For running container in deteched mode add this flag **-d** at the end of **docker-compose up** like **docker-compose up -d**.

### Launch portal in browser
After spinning the containers use this url [http://localhost:3000/](http://localhost:3000/) to access UI dashboard in browser.

### Stop docker container
In order to stop docker container use below command.
```
docker-compose down
```

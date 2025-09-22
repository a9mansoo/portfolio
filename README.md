# Personal Portfolio Website: Spin up a Modern React Portfolio with Docker & Nginx


## Overview:

1. Update and deploy a project portfolio with this ready to go app.
2. Update info.jsx files to input your own data.


## Features:

1. Career Timeline: Smooth scrolling experience using MUI and Framer Motion to showcase employment history.

2. Project Cards: Display project snippets with preview transitions and skill/chip tags.

3. Responsive Top Bar: Hides/shows dynamically on scroll for a modern UX.

4. Fully Responsive Design: Works across desktop and mobile screens.

## Tech Stack:

1. React + MUI + React Router: Reusable components and client side router.
2. Docker + Nginx Deployment: one line build and serve.


## How to serve:

1. The app can be built and served using Docker Compose.
2. Nginx is preconfigured to serve the React app, including handling client-side routing so all routes work correctly.

See for commands:

```
# Navigate to the docker compose folder

cd docker

docker compose build

docker compose up -d
```

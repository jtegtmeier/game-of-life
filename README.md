# FCC React Exercises - Game of Life

Conway's Game of Life implemented with React and the Redux store.

### Install and Run

- `npm install`
- `npm start`

##### Run Tests

- `npm test`

### Deploy on Heroku

##### Setup local git repository

- `git init`
- `git add .`
- `git commit`

##### Login to Heroku and upload local repository

- `heroku login`
- `heroku create YOUR-APP-NAME-HERE --buildpack https://github.com/mars/create-react-app-buildpack.git`
- `heroku git:remote -a YOUR-APP-NAME-HERE`
- `git push heroku master`

### App Links

- [Build the Game of Life](https://www.freecodecamp.com/challenges/build-the-game-of-life)

### User Stories

- When I first arrive at the game, it will randomly generate a board and start playing.
- I can start and stop the board.
- I can set up the board.
- I can clear the board.
- When I press start, the game will play out.
- Each time the board changes, I can see how many generations have gone by.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

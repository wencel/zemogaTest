# Test Project of admision to Zemoga

The test has been completed in full in ReactJS, by Wencel Santos

## Key aspects

For the creation of the project `create-react-app` was used.

To run the project just pull the repository and install the depedencies with `yarn` or `npm install` and the run the `start` script with `yarn start` or `npm start`.

The whole project was made with functional components, all life cycle methods were invoked with react hooks.

The state was handled with redux, selectors and actions dispacthing was handled with redux hooks.

all the data used was an array of polls, each poll is an object such as the following:

```
{
  id: 1,
  name: "Pope Francis",
  image: "https://storage.googleapis.com/zemogatest/Pope.png",
  category: "Politics",
  description:
    "He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
  likes: 34,
  dislikes: 12,
  current: true,
  startDate: "04/15/20",
  endDate: "05/15/20",
}
```

All data in the screen is handled through state, including remaining days (from the start and end dates of the polls).

Routing was handled with `react-router-dom`

An atomic design aproach was taken for the architecture of the project

Styling was made with `styled-components`

The poll reducer has an initial state hardcoded in the file for when the application is loaded for the first time, however if the data is changed by user interactions, the new data is persisted in the browser with `redux-persist` in the localStorage object.

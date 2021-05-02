# File classifier web app

## Backend

## Frontend

### Main packages

1. React w/ hooks
2. Redux + Sagas w/ axios
3. Material UI
4. Storybook

### 1. Requirements

1. `npm -v`  => 6.13.7
2. `node -v`  => 12.13.0
3. Styling should follow: `CamelCase` for `.js` components, files and folders, `kebab-case` for `utility` files.

### 2. Project structure

This projects consists in a monorepo separated in three main categories:

#### WebTheme

All the `theme` related stuff goes here. In other words, color palette, font characteristics, among others should be in this directory.

#### WebUI

All the `shareable` UI components aka `"dummy components"` should go here that `receives` most (or all) of their data from `props`. For example, components like  buttons, forms, input, modals, among others should be in this directory.

#### WebApp

Unlike the other directories, all the view related components go here in the following structure:

```bash=
> WebApp
    > Admin (/admin)
        > ComponentView (/admin/component-view)
        •
        •
        •
    > Containers (/)
        > ComponentView (/component-view)
        •
        •
        •
    > modals
        > ComponentName
        •
        •
        •
```

Routes are added in the following file: `frontend/src/routes.index.js`

#### Redux + Sagas

All the store and sagas related files are in the `store` directory.

1. `actions`: add action type for `dispatch` purposes; separate by related actions.
3. `reducers`: create reducers to handle `store` information; separate by entity.
4. `apis`: here goes the methods that are called using `axios` to fetch information on the `api`.
5. `sagas`: here goes the generators that connect `dispatch` with `api` methods.


### 3. Component structure

Most of the components on the `WebApp` directory have the following structure:

```bash=
> ComponentDirectory
    Component.js
    styles.js
    passingProps.js **
    index.js
```

Please notice `**` file, will be explained later.

Inside `index.js` it will look something like this:

```javascript=
// index.js

import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import passingProps from './passingProps';
import Component from './Component';

export default compose(
  withStyles(styles),
  withPassingProps(passingProps),
 )(Component);
```

As you can see, there is a HOC called `withPassingProps` which not only receives its own `props`, but also the component's. The idea behind this, is that in the all the unncessary logic like parsing data, fetching data before the component is mounted, among others is done in the `passingProps` file.


### 4. Run

Make sure to have correct npm and node versions and run `npm install` before running project.

#### Storybook

Renders visual component files ending in `*.stories.js`.

```bash=
npm run storybook
```

#### Frontend project

```bash=
npm start
```

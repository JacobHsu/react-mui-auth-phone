# Create React App example with styled-components

material-ui/examples/[create-react-app-with-styled-components](https://github.com/mui/material-ui/tree/master/examples)

## Debug

> Uncaught TypeError: Cannot destructure property 'setUpRecaptha' 

! `UserAuthContextProvider` 必須注入 App.js

## Passport.js

React Social Login with Passport.js | React oAuth w/ Google, Facebook, Github
[https://www.youtube.com/watch?v=7K9kDrtc4S8](https://www.youtube.com/watch?v=7K9kDrtc4S8)  
[Source Code](https://github.com/safak/youtube/tree/react-social-login)

## submodule

`git submodule add https://github.com/JacobHsu/node-passportjs.git backend/node-passportjs`  
`git submodule update --recursive --remote`

```bash
// 在主模組目錄下解除submodule關係
git submodule deinit backend/node-passportjs
刪除在.gitmodules檔案的與git-sub-module的內容
git rm .gitmodules
git rm --cached backend/node-passportjs
// 這個路徑下的所有檔案刪除
rm -rf .git/modules/ backend/node-passportjs
git commit -m 'remove submodule'
rm -rf backend/node-passportjs
git push
```

## console.cloud.google.com

js-google-api > API和服務 > 網路用戶端   
http://localhost:3000  
https://node-passportjs.vercel.app  

重新導向 URI

http://localhost:5000/auth/google/callback
https://node-passportjs.vercel.app/auth/google/callback  

## How to use

Download the example [or clone the repo](https://github.com/mui/material-ui):

<!-- #default-branch-switch -->

```sh
curl https://codeload.github.com/mui/material-ui/tar.gz/master | tar -xz --strip=2 material-ui-master/examples/create-react-app-with-styled-components
cd create-react-app-with-styled-components
```

Install it and run:

```sh
npm install
npm start
```

## CodeSandbox

<!-- #default-branch-switch -->

Note that CodeSandbox is not supporting react-app-rewired, yet you can [still see the code](https://codesandbox.io/s/github/mui/material-ui/tree/master/examples/create-react-app-with-styled-components).

The following link leverages this demo: https://mui.com/guides/interoperability/#change-the-default-styled-engine with Parcel's alias feature within the `package.json`

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/styled-components-interoperability-w9z9d)

## The idea behind the example

This example demonstrates how you can setup [Create React App](https://github.com/facebookincubator/create-react-app) with [styled-components](https://styled-components.com/) as a style engine for your application.

## What's next?

<!-- #default-branch-switch -->

You now have a working example project.
You can head back to the documentation, continuing browsing it from the [templates](https://mui.com/material-ui/getting-started/templates/) section.

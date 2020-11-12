## intro

### memo

1. Dank Mono, fira code

2. Dom
   - https://wit.nts-corp.com/2019/02/14/5522
   - https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C

   - 돔? https://www.youtube.com/watch?v=H63dVFDuJDM&ab_channel=TheNetNinja


  - virtual dom: react가 쓰는것, createElement해서 만들어낸 div, 근데 얘는 돔은 아니고 객체다. (React.div 뭐이런거)
    - https://stackoverflow.com/questions/21965738/what-is-virtual-dom

   - React dom: https://reactjs.org/docs/react-dom.html 은 진짜 이걸 그린다. dom으로 뭐 비교해서 변한거만 그리는 그런 로직 여기있다. 



3. Tools
   1. npm: https://www.npmjs.com/ npm init -y
   2. prettier: for me for my local environment -> `npm install -D prettier` -> 프리티어가 각 개발자마다 포맷 다르고 난리난걸 잡아주는 역할임. 그냥 보이는거에 집중
   `settings(command + ,)`:check format on save, check require config to actually enable prettier on the project that has prettier configuration -> https://prettier.io/
   3. eslint vs prettier
      - `eslint-config-prettier` this means, 'hey lint, don't worry about formatting, prettier will do that'
      - eslint 익스텐션: eslint 바로 동작함!! `npm install -D eslint eslint-config-prettier`
      - npm run lint
      - npm run format
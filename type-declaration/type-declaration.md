## type declaration (타입 선언)
- 타입선언을 통해 타입스크립트 생태계에서 제3자 라이브러리로 작업하는 방법을 보조할 수 있음.
- .ts로 끝나지 않고, d.ts로 끝나는 파일이 선언 파일.
- d.ts 파일에서는 세부 구현사항이나 실행될 JS 코드와 출력을 찾을 수 없음
- 대신 타입 정보만 찾을 수 있음. (타입을 선언하는 곳)

- axios같은 라이브러리에는 index.d.ts가 기본적으로 포함이 되어있지만, lodash같은 라이브러리는 타입선언이 별도로 없다.
- 따라서 타입선언을 별도로 이식해야 하는데, 타입 선언 파일을 찾기 위해서 npm을 가장 많이 사용한다.
- 개발자 전용 설치로 @types/라이브러리 와 같이 입력하면 되는데, @types는 DefinitelyTyped 라는 프로젝트와 연관이 있다.
```bash
npm install --save-dev @types/lodash
```
-- (타입은 코드의 런타임에는 별 기능이 없으므로 devDependency에 추가한다)
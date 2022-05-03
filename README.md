### already in use port Error

Error: listen EADDRINUSE: address already in use :::5000

## 해결방법

1. 터미널 에서 사용중인 포트 찾기
   `lsof -i TCP:5000`
2. 프로세스의 PID값 제거하기
   kill -9 number

## userEvent.clear()

input이나 textarea에 텍스트를 선택 한 후 제거해 줄때 사용한다 습관적으로 작성해주면 테스트를 할 때 겹치는 현상을 피할 수 있다.
습관적으로 작성해주면 좋은 이유는 만약 현재 소스 코드 보다 위에서 같은 엘리먼트를 위한 userEvent를 사용했다면 clear를 해준 후에 userEvent.type()를 사용하는게 좋다

## 원하는 파일에서만 테스트하기

1. npm test
2. p + filename

## describe

1. 테스트 그룹을 만든다

## toBeintheDocument

- document안에 변수 Element가 있는지 확인해주는 역할을 한다.

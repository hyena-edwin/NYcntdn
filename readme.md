# CSS

* background
  * background-repeat : 배경 화면이 적으면 반복할건지 (바둑판 배열 관련)
  * background-size
    * https://developer.mozilla.org/ko/docs/Web/CSS/background-size
    * cover : 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 또는 가로방향으로 잘라내어 빈 공간이 생기지 않도록 설정합니다.
  * background-position
    * https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
    * x 축 y 축 에 맞게 위치 가능
    * 값의 갯수에 따라서 의미가 다름. (참고 페이지 확인)


* overflow
  * 박스에 컨텐트가 넘어갈 때 처리 설정
  * https://developer.mozilla.org/ko/docs/Web/CSS/overflow


* 어둡게 후 처리 하고 싶을 때
  * `::after 의사 선택자`를 이용해서 overlay 를 입힌다.
    ```css
    body::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    ```
    * 여기에서 content 가 없으면 너비와 높이를 가질 수 없어 보임.

* content 
  * https://developer.mozilla.org/ko/docs/Web/CSS/content
  * 익명의 대체 요소
  * 해당 위치에 설정된 값을 추가함.


* body * { z-index: 1;}
  * body 에 넣으면 어떠한 동작도 하지 않음.
  * body 안에 있는 모든 요소들이 z-index 순위가 높아서 앞으로 올라옴.
  * 즉 배경의 흐름 처리를 하고 나서 실질적인 element 들이 잘 보이지 않는데 z-index 처리로 앞으로 빼낸 상황.


# JS

* setInterval
  * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  * 특정 시간 간격으로 실행하고자 할 때 사용

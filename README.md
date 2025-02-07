# javascript-calculator-precourse

## 기능 목록

1. 사용자의 입력을 받아 문자열을 처리한다다
2. 기본 구분자(쉼표 `,` 또는 콜론 `:`)를 기준으로 숫자를 추출한다.
3. 추출한 숫자들의 합을 계산하여 반환한다.
4. 커스텀 구분자 기능을 지원한다.
   - 문자열 앞부분에 `//구분자\n` 형식이 포함된 경우 해당 구분자를 사용하여 숫자를 분리한다.
5. 입력값이 비어있을 경우 `0`을 반환한다.
6. 입력값이 숫자가 아닌 경우 예외(`IllegalArgumentException`)를 발생시킨다.
7. `@woowacourse/mission-utils`의 `Console.readLineAsync`를 사용하여 입력을 받고, `Console.print`를 사용하여 결과를 출력한다.
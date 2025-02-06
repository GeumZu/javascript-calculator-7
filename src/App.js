import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("")
  }

  async play() {

    try { 
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      
      const trimmedInput = input.trim();
      const result = this.calculate(trimmedInput);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }

  }

  calculate(input) {
    if (!input) return 0;

    let delimiter = /[,:]/;
    const customDelimeterMatch = input.match(/^\/\/(.)\n(.*)/);

    if (customDelimeterMatch) {
      delimiter = new RergExp(customDelimeterMatch[1]);
      input = customDelimeterMatch[2]; 
    }

    const numbers = input.split(delimiter).map(num => {
      const parsed = Number(num);
      if (isNaN(parsed) || parsed < 0 ) {
        throw new Error("IllegalArgumentException: 잘못된 입력값입니다.");
      }
      return parsed;
    });

    return numbers.reduce((sum, num) => sum + num, 0);
    }
}

const app = new App();
app.play();

export default App;

import { somar, subtrair, multiplicar, dividir } from "../src/calculadora.js";

describe("Calculadora", () => {
  test("deve somar dois números corretamente", () => {
    //AAA

    //Arrange(preparar)
    const a = 2;
    const b = 3;

    //Act(executar)
    const resultado = somar(a, b);

    //Assert(verificar)
    expect(resultado).toBe(5);
  });
  test("deve subtrair dois números corretamente", () => {
    //AAA

    //Arrange(preparar)
    const a = 13;
    const b = 3;

    //Act(executar)
    const resultado = subtrair(a, b);

    //Assert(verificar)
    expect(resultado).toBe(10);
  });
  test("deve multiplicar dois números corretamente", () => {
    //AAA

    //Arrange(preparar)
    const a = 4;
    const b = 3;

    //Act(executar)
    const resultado = multiplicar(a, b);

    //Assert(verificar)
    expect(resultado).toBe(12);
  }); 
   test("deve dividir dois números corretamente", () => {
      //AAA
   
      //Arrange(preparar)
      const a = 10;
      const b = 2;
   
      //Act(executar)
      const resultado = dividir(a, b);
   
      //Assert(verificar)
      expect(resultado).toBe(5);
   });
   test("deve retornar erro ao dividir por zero", () => {
      expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida.");
   });
});

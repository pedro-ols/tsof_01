import { somar } from '../src/calculadora.js';

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

   })
});
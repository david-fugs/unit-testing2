const resta = require('./resta');

  test('debería restar dos números correctamente', () => {
    expect(resta(5, 3)).toBe(2);
  });

  test('0 - 0 debe dar 0', () => { 
    expect(resta(0, 0)).toBe(0);
   })

   test('la resta de 2 numeros negativos no se deben sumar', () => { 
    expect(resta(-10,-5 )).toBe(-5);
    })









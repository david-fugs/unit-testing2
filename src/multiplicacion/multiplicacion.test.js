const multiplicacion = require('./multiplicacion');

test('4 * 5 debe ser igual a 20', () => { 
    expect(multiplicacion (4, 5)).toBe(20 );        
});

test('multiplicacion debería lanzar un error si alguno de los argumentos no es un número', () => {
   
    expect(multiplicacion(null,4)).not.toBe(404);
  });

  test('Todo numero multiplicado por 0 es 0', () => { 
    expect(multiplicacion(80,0)).toBe(0);
   })
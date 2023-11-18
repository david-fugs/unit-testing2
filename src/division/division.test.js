const division= require('./division');

test('40 dividido 5 debe ser igual a 8', () => { 
    expect(division(40, 5)).toBe(8);        
});

test('division debería lanzar un error si alguno de los argumentos no es un número', () => {
   
    expect(division(null,4)).not.toBe(404);
  });

  test('Todo numero dividido por 0 es 0', () => { 
    expect(division(80,0)).not.toBe(404);
   })


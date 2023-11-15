const sum = require('./sum');
test('10 + 20 deberia ser 30', () => { 
    expect(sum(10, 20)).toBe(30);        
});

test('debería lanzar un error si alguno de los argumentos no es un número', () => {
   
    expect(sum(2,'2')).toBe('number');
  });
 test('sumar 0 + 0 es igual a 0', () => { 
    expect(sum(0,0)).toBe(0) ;    
 });


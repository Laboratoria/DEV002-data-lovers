import { operaciones } from '../src/data.js';
import data from "../src/data/ghibli/ghibli.js";

describe('test by operaciones', () => {
  it('should by a function', () => {
    expect(typeof operaciones.peliculasOrdenadasPorDirector).toBe('function');
  });

  it('should return array', () => {
    expect(Array.isArray(operaciones.peliculasOrdenadasPorDirector(data.films))).toBe(true)
<<<<<<< HEAD
=======
  });
  describe('test by operaciones', () => {
    it('should by a function', () => {
      expect(typeof operaciones.peliculasOrdenadasPorAno).toBe('function');
    });
  
    it('should return array', () => {
      expect(Array.isArray(operaciones.peliculasOrdenadasPorAno(data.films))).toBe(false)
    });
>>>>>>> d0f3dd2eeb1ad8d51b27e466ee593c926fac8478
  });
});


import { operaciones } from '../src/data.js';
import data from "../src/data/ghibli/ghibli.js";

describe('test by operaciones', () => {
  it('should by a function', () => {
    expect(typeof operaciones.peliculasOrdenadasPorDirector).toBe('function');
  });

  it('should return array', () => {
    expect(Array.isArray(operaciones.peliculasOrdenadasPorDirector(data.films))).toBe(true)
  });
  describe('test by operaciones', () => {
    it('should by a function', () => {
      expect(typeof operaciones.peliculasOrdenadasPorAno).toBe('function');
    });
  
    it('should return array', () => {
      expect(Array.isArray(operaciones.peliculasOrdenadasPorAno(data.films))).toBe(false)
    });
  });
});
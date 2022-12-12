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
  describe('test by operaciones', () => {
    it('should by a function', () => {
      expect(typeof operaciones.llamarProductores).toBe('function');
    });
    it('should return array', () => {
      expect(Array.isArray(operaciones.llamarProductores(data.films))).toBe(true)
    });
});
  describe('test by operaciones', () => {
  it('should by a function', () => {
    expect(typeof operaciones.filtrarPorProductor).toBe('function');
  });
  it('should return array', () => {
    expect(Array.isArray(operaciones.filtrarPorProductor(data.films))).toBe(true)
});
});
describe('test by operaciones', () => {
  it('should by a function', () => {
    expect(typeof operaciones.realizarCalculo).toBe('function');
  });
  it('should return array', () => {
    expect(Array.isArray(operaciones.realizarCalculo(data.films))).toBe(true)
  });
});

});


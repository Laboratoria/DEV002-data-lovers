import { operaciones } from '../src/data.js';
import data from "../src/data/ghibli/ghibli.js";

describe('test by operaciones', () => {
  it('should by a function', () => {
    expect(typeof operaciones.peliculasOrdenadasPorDirector,operaciones.peliculasOrdenadasPorAno).toBe('function');
  });

  it('should return array', () => {
    expect(Array.isArray(operaciones.peliculasOrdenadasPorDirector,operaciones.peliculasOrdenadasPorAno(data.films))).toBe(Boolean)
  });
});
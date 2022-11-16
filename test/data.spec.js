
import { filtrarData, sortData,computeStats } from '../src/data.js';


describe('filtarData', () => {
  it('is a function', () => {
    expect(typeof filtrarData).toBe('function');
  });

  it('returns `150 nombres de pociones`', () => {
    expect(filtrarData(todos)).toBe('');
  });

  it('returns')
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

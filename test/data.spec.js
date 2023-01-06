import { filterBy, filterByS /*sortByA, sortByD, calcular */} from '../src/data.js';


describe('fil', () => {
  it('is a function', () => {
    expect(typeof filterBy).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterBy()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof filterByS).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(filterByS()).toBe('OMG');
  });
});

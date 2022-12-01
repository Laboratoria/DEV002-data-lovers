import { listarPokemon, pokemon } from '../src/main';


describe('Filtro por región', () => {
  it('listarPokemon tipo funcion', () => {
    expect(typeof listarPokemon).toEqual('function');
  });

  it('returns example pokemon', () => {
    expect(pokemon('paola', '1', 'hada', 'img')).toEqual(`<div class="contenedor">
    <div class="pokemon">
      <img src="img" class="imagen" />
      <div>
        <p>paola</p>
        <p>#1</p>
        <p>hada</p>
      </div>
    </div>
  </div>`)
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

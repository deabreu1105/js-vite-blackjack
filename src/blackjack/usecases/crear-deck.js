import _ from 'underscore'


/**
 * Esta función crea un nuevo deck,es esportación independiente
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retornna un nuevo arreglo de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    //! Validando los valores que trae por parametro
    if ( !tiposDeCarta || tiposDeCarta.length == 0) 
        throw new Error('tiposDeCarta es obligatorio y con arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length == 0) 
        throw new Error('tiposEspeciales es obligatorio y con arreglo de string');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}
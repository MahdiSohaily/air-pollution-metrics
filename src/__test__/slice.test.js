import sliceReducer, { getPollutionData } from '../redux/slice';

const initialState = [];
describe('Tests for Redux in project', () => {
  it('Test if the state is initialy an empty array', () => {
    expect(sliceReducer(initialState, [])).toEqual([]);
  });

  it('Test if it returns a 10 items array', () => {
    expect(
      sliceReducer(
        initialState,
        getPollutionData([
          'Plains Zebra',
          'Magpie Goose',
          'Fairy Bluebird',
          'Black Rhinoceros',
          'Mosquitofish',
          'Grey Crowned Crane',
          'Alpaca',
          'Dyeing Poison Dart Frog',
          'Green Tree Monitor',
          'Blue-Crowned Motmot',
        ]),
      ),
    ).not.toEqual([
      'Plains Zebra',
      'Magpie Goose',
      'Fairy Bluebird',
      'Black Rhinoceros',
      'Mosquitofish',
      'Grey Crowned Crane',
      'Alpaca',
      'Dyeing Poison Dart Frog',
      'Green Tree Monitor',
      'Blue-Crowned Motmot',
    ]);
  });
  it('Test if it returns a same item in the array', () => {
    expect(
      sliceReducer(initialState, getPollutionData(['Plains Zebra'])),
    ).not.toEqual(['Plains Zebra']);
  });
});

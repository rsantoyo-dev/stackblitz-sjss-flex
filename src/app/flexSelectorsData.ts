export const flexSelectorsList: Array<{ property: string; options: Array<string> }> = [
  {
    property: 'flexDirection',
    options: ['', 'row', 'row-reverse', 'column', 'column-reverse'],
  },
  { property: 'flexWrap', options: ['', 'nowrap', 'wrap', 'wrap-reverse'] },
  {
    property: 'justifyContent',
    options: [
      '',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ],
  },
  {
    property: 'alignItems',
    options: ['', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
  },
  {
    property: 'alignContent',
    options: [
      '',
      'flex-start',
      'flex-end ',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
    ],
  },
];
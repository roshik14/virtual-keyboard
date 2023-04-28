const keys = [
  [
    {
      enKey: '`',
      enShiftKey: '~',
      ruKey: 'ё',
      ruShiftKey: 'Ё',
      code: 'Backquote',
      isWritable: true,
    },
    {
      enKey: '1',
      enShiftKey: '!',
      ruKey: '1',
      ruShiftKey: '!',
      code: 'Digit1',
      isWritable: true,
    },
    {
      enKey: '2',
      enShiftKey: '@',
      ruKey: '2',
      ruShiftKey: '"',
      code: 'Digit2',
      isWritable: true,
    },
    {
      enKey: '3',
      enShiftKey: '#',
      ruKey: '3',
      ruShiftKey: '№',
      code: 'Digit3',
      isWritable: true,
    },
    {
      enKey: '4',
      enShiftKey: '$',
      ruKey: '4',
      ruShiftKey: ';',
      code: 'Digit4',
      isWritable: true,
    },
    {
      enKey: '5',
      enShiftKey: '%',
      ruKey: '5',
      ruShiftKey: '%',
      code: 'Digit5',
      isWritable: true,
    },
    {
      enKey: '6',
      enShiftKey: '^',
      ruKey: '6',
      ruShiftKey: ':',
      code: 'Digit6',
      isWritable: true,
    },
    {
      enKey: '7',
      enShiftKey: '&',
      ruKey: '7',
      ruShiftKey: '?',
      code: 'Digit7',
      isWritable: true,
    },
    {
      enKey: '8',
      enShiftKey: '*',
      ruKey: '8',
      ruShiftKey: '*',
      code: 'Digit8',
      isWritable: true,
    },
    {
      enKey: '9',
      enShiftKey: '(',
      ruKey: '9',
      ruShiftKey: '(',
      code: 'Digit9',
      isWritable: true,
    },
    {
      enKey: '0',
      enShiftKey: ')',
      ruKey: '0',
      ruShiftKey: ')',
      code: 'Digit0',
      isWritable: true,
    },
    {
      enKey: '-',
      enShiftKey: '_',
      ruKey: '-',
      ruShiftKey: '_',
      code: 'Minus',
      isWritable: true,
    },
    {
      enKey: '=',
      enShiftKey: '+',
      ruKey: '=',
      ruShiftKey: '+',
      code: 'Equal',
      isWritable: true,
    },
    {
      enKey: 'Backspace',
      enShiftKey: 'Backspace',
      ruKey: 'Backspace',
      ruShiftKey: 'Backspace',
      code: 'Backspace',
      isWritable: false,
    },
  ],
  [
    {
      enKey: 'Tab',
      enShiftKey: 'Tab',
      ruKey: 'Tab',
      ruShiftKey: 'Tab',
      code: 'Tab',
      isWritable: false,
    },
    {
      enKey: 'q',
      enShiftKey: 'Q',
      ruKey: 'й',
      ruShiftKey: 'Й',
      code: 'KeyQ',
      isWritable: true,
    },
    {
      enKey: 'w',
      enShiftKey: 'W',
      ruKey: 'ц',
      ruShiftKey: 'Ц',
      code: 'KeyW',
      isWritable: true,
    },
    {
      enKey: 'e',
      enShiftKey: 'E',
      ruKey: 'у',
      ruShiftKey: 'У',
      code: 'KeyE',
      isWritable: true,
    },
    {
      enKey: 'r',
      enShiftKey: 'R',
      ruKey: 'к',
      ruShiftKey: 'К',
      code: 'KeyR',
      isWritable: true,
    },
    {
      enKey: 't',
      enShiftKey: 'T',
      ruKey: 'е',
      ruShiftKey: 'Е',
      code: 'KeyT',
      isWritable: true,
    },
    {
      enKey: 'y',
      enShiftKey: 'Y',
      ruKey: 'н',
      ruShiftKey: 'Н',
      code: 'KeyY',
      isWritable: true,
    },
    {
      enKey: 'u',
      enShiftKey: 'U',
      ruKey: 'г',
      ruShiftKey: 'Г',
      code: 'KeyU',
      isWritable: true,
    },
    {
      enKey: 'i',
      enShiftKey: 'I',
      ruKey: 'ш',
      ruShiftKey: 'Ш',
      code: 'KeyI',
      isWritable: true,
    },
    {
      enKey: 'o',
      enShiftKey: 'O',
      ruKey: 'щ',
      ruShiftKey: 'Щ',
      code: 'KeyO',
      isWritable: true,
    },
    {
      enKey: 'p',
      enShiftKey: 'P',
      ruKey: 'з',
      ruShiftKey: 'З',
      code: 'KeyP',
      isWritable: true,
    },
    {
      enKey: '[',
      enShiftKey: '{',
      ruKey: 'х',
      ruShiftKey: 'Х',
      code: 'BracketLeft',
      isWritable: true,
    },
    {
      enKey: ']',
      enShiftKey: '}',
      ruKey: 'ъ',
      ruShiftKey: 'Ъ',
      code: 'BracketRight',
      isWritable: true,
    },
    {
      enKey: '\\',
      enShiftKey: '|',
      ruKey: '\\',
      ruShiftKey: '/',
      code: 'Backslash',
      isWritable: true,
    },
    {
      enKey: 'Delete',
      enShiftKey: 'Delete',
      ruKey: 'Delete',
      ruShiftKey: 'Delete',
      code: 'Delete',
      isWritable: false,
    },
  ],
  [
    {
      enKey: 'CapsLock',
      enShiftKey: 'CapsLock',
      ruKey: 'CapsLock',
      ruShiftKey: 'CapsLock',
      code: 'CapsLock',
      isWritable: false,
    },
    {
      enKey: 'a',
      enShiftKey: 'A',
      ruKey: 'ф',
      ruShiftKey: 'Ф',
      code: 'KeyA',
      isWritable: true,
    },
    {
      enKey: 's',
      enShiftKey: 'S',
      ruKey: 'ы',
      ruShiftKey: 'Ы',
      code: 'KeyS',
      isWritable: true,
    },
    {
      enKey: 'd',
      enShiftKey: 'D',
      ruKey: 'В',
      ruShiftKey: 'В',
      code: 'KeyD',
      isWritable: true,
    },
    {
      enKey: 'f',
      enShiftKey: 'F',
      ruKey: 'а',
      ruShiftKey: 'А',
      code: 'KeyF',
      isWritable: true,
    },
    {
      enKey: 'g',
      enShiftKey: 'G',
      ruKey: 'п',
      ruShiftKey: 'П',
      code: 'KeyG',
      isWritable: true,
    },
    {
      enKey: 'h',
      enShiftKey: 'H',
      ruKey: 'р',
      ruShiftKey: 'Р',
      code: 'KeyH',
      isWritable: true,
    },
    {
      enKey: 'j',
      enShiftKey: 'J',
      ruKey: 'о',
      ruShiftKey: 'О',
      code: 'KeyJ',
      isWritable: true,
    },
    {
      enKey: 'k',
      enShiftKey: 'K',
      ruKey: 'л',
      ruShiftKey: 'Л',
      code: 'KeyK',
      isWritable: true,
    },
    {
      enKey: 'l',
      enShiftKey: 'L',
      ruKey: 'д',
      ruShiftKey: 'Д',
      code: 'KeyL',
      isWritable: true,
    },
    {
      enKey: ':',
      enShiftKey: ';',
      ruKey: 'ж',
      ruShiftKey: 'Ж',
      code: 'Semicolon',
      isWritable: true,
    },
    {
      enKey: "'",
      enShiftKey: '"',
      ruKey: 'э',
      ruShiftKey: 'Э',
      code: 'Quote',
      isWritable: true,
    },
    {
      enKey: 'Enter',
      enShiftKey: 'Enter',
      ruKey: 'Enter',
      ruShiftKey: 'Enter',
      code: 'Enter',
      isWritable: true,
    },
  ],
  [
    {
      enKey: 'Shift',
      enShiftKey: 'Shift',
      ruKey: 'Shift',
      ruShiftKey: 'Shift',
      code: 'ShiftLeft',
      isWritable: false,
    },
    {
      enKey: 'z',
      enShiftKey: 'Z',
      ruKey: 'я',
      ruShiftKey: 'Я',
      code: 'KeyZ',
      isWritable: true,
    },
    {
      enKey: 'x',
      enShiftKey: 'X',
      ruKey: 'ч',
      ruShiftKey: 'Ч',
      code: 'KeyX',
      isWritable: true,
    },
    {
      enKey: 'c',
      enShiftKey: 'C',
      ruKey: 'с',
      ruShiftKey: 'С',
      code: 'KeyC',
      isWritable: true,
    },
    {
      enKey: 'v',
      enShiftKey: 'V',
      ruKey: 'м',
      ruShiftKey: 'М',
      code: 'KeyV',
      isWritable: true,
    },
    {
      enKey: 'b',
      enShiftKey: 'B',
      ruKey: 'и',
      ruShiftKey: 'И',
      code: 'KeyB',
      isWritable: true,
    },
    {
      enKey: 'n',
      enShiftKey: 'N',
      ruKey: 'т',
      ruShiftKey: 'Т',
      code: 'KeyN',
      isWritable: true,
    },
    {
      enKey: 'm',
      enShiftKey: 'M',
      ruKey: 'ь',
      ruShiftKey: 'Ь',
      code: 'KeyM',
      isWritable: true,
    },
    {
      enKey: ',',
      enShiftKey: '<',
      ruKey: 'б',
      ruShiftKey: 'Б',
      code: 'Comma',
      isWritable: true,
    },
    {
      enKey: '.',
      enShiftKey: '>',
      ruKey: 'ю',
      ruShiftKey: 'Ю',
      code: 'Period',
      isWritable: true,
    },
    {
      enKey: '↑',
      enShiftKey: '↑',
      ruKey: '↑',
      ruShiftKey: '↑',
      code: 'ArrowUp',
      isWritable: false,
    },
    {
      enKey: '/',
      enShiftKey: '?',
      ruKey: '.',
      ruShiftKey: ',',
      code: 'Slash',
      isWritable: true,
    },
    {
      enKey: 'Shift',
      enShiftKey: 'Shift',
      ruKey: 'Shift',
      ruShiftKey: 'Shift',
      code: 'ShiftRight',
      isWritable: false,
    },
  ],
  [
    {
      enKey: 'Ctrl',
      enShiftKey: 'Ctrl',
      ruKey: 'Ctrl',
      ruShiftKey: 'Ctrl',
      code: 'ControlLeft',
      isWritable: false,
    },
    {
      enKey: 'Win',
      enShiftKey: 'Win',
      ruKey: 'Win',
      ruShiftKey: 'Win',
      code: 'MetaLeft',
      isWritable: false,
    },
    {
      enKey: 'Alt',
      enShiftKey: 'Alt',
      ruKey: 'Alt',
      ruShiftKey: 'Alt',
      code: 'AltLeft',
      isWritable: false,
    },
    {
      enKey: ' ',
      enShiftKey: ' ',
      ruKey: ' ',
      ruShiftKey: ' ',
      code: 'Space',
      isWritable: true,
    },
    {
      enKey: '←',
      enShiftKey: '←',
      ruKey: '←',
      ruShiftKey: '←',
      code: 'ArrowLeft',
      isWritable: false,
    },
    {
      enKey: '↓',
      enShiftKey: '↓',
      ruKey: '↓',
      ruShiftKey: '↓',
      code: 'ArrowDown',
      isWritable: false,
    },
    {
      enKey: '→',
      enShiftKey: '→',
      ruKey: '→',
      ruShiftKey: '→',
      code: 'ArrowRight',
      isWritable: false,
    },
    {
      enKey: 'Alt',
      enShiftKey: 'Alt',
      ruKey: 'Alt',
      ruShiftKey: 'Alt',
      code: 'AltRight',
      isWritable: false,
    },
    {
      enKey: 'Ctrl',
      enShiftKey: 'Ctrl',
      ruKey: 'Ctrl',
      ruShiftKey: 'Ctrl',
      code: 'ControlRight',
      isWritable: false,
    },
  ],
];

export default keys;

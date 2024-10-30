import Field from './field.js';
import GamePlay from './play.js';

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();
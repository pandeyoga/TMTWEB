import * as migration_20261031_111217_initial from './20261031_111217_initial';

export const migrations = [
  {
    up: migration_20261031_111217_initial.up,
    down: migration_20261031_111217_initial.down,
    name: '20261031_111217_initial'
  },
];

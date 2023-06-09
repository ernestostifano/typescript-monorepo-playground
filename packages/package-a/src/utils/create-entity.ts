import type {IEntity} from '../defines/types.js';

function createEntity(): IEntity {
    return {
        propA: '',
        propB: 0,
        propC: false
    };
}

export {createEntity};

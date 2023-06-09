import {createEntity, sum} from '@scope/package-b';

const entity = createEntity();

const result = sum(entity.propB, 1);

export {result};

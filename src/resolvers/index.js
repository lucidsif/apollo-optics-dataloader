import { merge } from 'lodash';
import { rootResolver } from './root';
import { starshipResolver } from './starship';
import { characterResolver } from './character';

export const SumResolver = merge(rootResolver, starshipResolver, characterResolver);

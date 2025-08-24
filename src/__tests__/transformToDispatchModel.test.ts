import { describe, it, expect } from 'vitest';
import { transformToDispatchModel } from '../utils/transformToDispatchModel';
import { mockFormDataValid } from './mocks/mockFormData';

describe('transformToDispatchModel', () => {
  it('File of FileList convert to string', async () => {
    const transformed = await transformToDispatchModel(mockFormDataValid);

    expect(transformed.upload).toString();
  });
});

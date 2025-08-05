import { vi, describe, it, expect } from 'vitest';
import { getDescription } from '../src/utils/getDescription';

describe('getDescription', () => {
  const mal_id = '12345';

  it('returns description if fetch is successful', async () => {
    const mockData = { title: 'Naruto', synopsis: 'Ninja story' };
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockData }),
      } as Response)
    );

    const result = await getDescription(mal_id);
    expect(result).toEqual({ data: mockData });
  });

  it('returns error description if fetch is successful', async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      } as Response)
    );

    const result = await getDescription(mal_id);
    expect(result?.data).toEqual(null);
    expect(result?.error).toEqual(new Error('Status: 404'));
  });
});

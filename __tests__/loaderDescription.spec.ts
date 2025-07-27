import { describe, it, expect, vi } from 'vitest';

vi.mock('../src/utils/getDescription', () => ({
  getDescription: vi.fn().mockResolvedValue({
    data: {
      titles: [{ title: 'Naruto', type: 'Default' }],
      synopsis: 'Some synopsis',
      source: 'Some source',
      duration: '24 min',
      images: { webp: { image_url: 'https://example.com/image.webp' } }
    }
  })
}));

import { loaderDescription } from '../src/utils/loaderDescriptions';

describe('loaderDescription', () => {
  it('returns description', async () => {
    const arg = { request: new Request('http://localhost'), params: { mal_id: '12345' }, context: {} };

    const result = (await loaderDescription(arg)) as {
      description: Promise<{ data: { titles: { title: string }[] } }>;
    };

    const resolved = await result.description;

    expect(resolved.data.titles[0].title).toBe('Naruto');
  });
});

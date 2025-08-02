import { describe, it, expect, vi } from 'vitest';
import { mockCard } from './mocks/mocks';
import { loaderDescription } from '../src/utils/loaderDescriptions';

vi.mock('../src/utils/getDescription', () => ({
  getDescription: vi.fn().mockResolvedValue({
    data: mockCard
  })
}));

describe('loaderDescription', () => {
  it('returns description', async () => {
    const arg = { request: new Request('http://localhost'), params: { mal_id: '12345' }, context: {} };

    const result = (await loaderDescription(arg)) as {
      description: Promise<{ data: { titles: { title: string }[] } }>;
    };

    const resolved = await result.description;

    expect(resolved.data.titles[0].title).toBe(mockCard.titles[0].title);
  });
});

import { describe, expect, test } from 'vitest';
import { API_URL } from '../src/utils/constants';

describe('API constants', () => {
  test('API_URL should match expected URL', () => {
    expect(API_URL).toBe('https://api.pokemontcg.io/v2/cards');
  });
});

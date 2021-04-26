import maxLength from './maxLength';

test('maxLength validation test', () => {
    expect(maxLength(20, 'LTTwentyCharacter')).toBe(true);
    expect(maxLength(20, 'EqualTwentyCharacter')).toBe(true);
    expect(maxLength(20, 'Great>TwentyCharacter')).toBe(false);
    expect(maxLength(0, ' ')).toBe(false);
    expect(maxLength(0, '')).toBe(true);
    expect(maxLength(-1, 'A')).toBe(false);
    expect(maxLength(-1, '')).toBe(false);
    expect(maxLength(1, '')).toBe(true);
    expect(maxLength(1, ' ')).toBe(true);
});
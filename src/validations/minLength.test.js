import minLength from './minLength';

test('minLength validation test', () => {
    expect(minLength(10, 'TestLTTen')).toBe(false);
    expect(minLength(10, 'TestEQ=Ten')).toBe(true);
    expect(minLength(10, 'Test GT Ten')).toBe(true);
    expect(minLength(0, ' ')).toBe(true);
    expect(minLength(0, '')).toBe(true);
    expect(minLength(-1, 'A')).toBe(true);
    expect(minLength(-1, '')).toBe(true);
    expect(minLength(1, '')).toBe(false);
    expect(minLength(1, ' ')).toBe(true);
    expect(minLength(2, '#')).toBe(false);
  });
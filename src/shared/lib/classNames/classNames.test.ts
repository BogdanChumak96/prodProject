import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2'
    );
  });

  test('with additional params and mods', () => {
    expect(
      classNames('someClass', { hovered: true }, ['class1', 'class2'])
    ).toBe('someClass class1 class2 hovered');
  });
});

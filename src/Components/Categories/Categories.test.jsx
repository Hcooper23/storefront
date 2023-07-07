import categoriesReducer, { selectCategory, resetCategory } from '../../store/categories';

describe('categoriesReducer', () => {
  test('selectCategory action', () => {
    const initialState = null;
    const category = { id: 1, name: 'Category 1' };
    const action = selectCategory(category);
    const newState = categoriesReducer(initialState, action);
    expect(newState).toEqual(category);
  });

  test('resetCategory action', () => {
    const initialState = { id: 1, name: 'Category 1' };
    const action = resetCategory();
    const newState = categoriesReducer(initialState, action);
    expect(newState).toBeNull();
  });
});

export const oPlay = (choice) => ({
  type: 'O_PLAY',
  choice
});

export const xPlay = (choice) => ({
  type: 'X_PLAY',
  choice
});

export const reset = () => ({
  type: 'RESET'
});
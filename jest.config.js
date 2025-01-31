module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  fakeTimers: {
    enableGlobally: true,
    now: new Date('2022-09-01T09:00:00.000+00:00').getTime(),
  },
  testPathIgnorePatterns: ['/node_modules/', '.tmp', '.cache'],
  testEnvironment: 'node',
  testTimeout: 30_000,
  verbose: true,
};

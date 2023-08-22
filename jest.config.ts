module.exports = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
     },
    moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts?$': 'ts-jest'
    },
    testMatch: [
        '**/*.test.ts',
        '**/*.test.js',
    ],
}
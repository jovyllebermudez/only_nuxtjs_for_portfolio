module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "vue"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(js)$": "babel-jest",
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(nuxt3|unenv))"],
  globals: {
    'ts-jest': {
      babelConfig: true,
      esModuleInterop: true,
    },
  },
  testMatch: ['<rootDir>/test/**/*.spec.(js|ts)'],
};
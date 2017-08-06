module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
    "jest/globals": true
  },
  extends: 'standard',
  plugins: [
    "flowtype",
    "jest"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true
  },
  extends: 'standard',
  plugins: [
    "flowtype"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
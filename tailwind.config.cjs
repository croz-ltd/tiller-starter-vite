const { preset, color } = require('@tiller-ds/theme');

module.exports = {
  presets: [preset],
  theme: {
    extend: {
      colors: {
        primary: color("violet")
      }
    }
  }
};

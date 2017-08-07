const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'lib');

const config = {
  entry: {
    withStyles: './src/withStyles.js',
    PoltrTheme: './src/PoltrTheme.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/,
      },
    ],
  },
};

module.exports = config;

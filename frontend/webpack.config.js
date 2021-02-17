const path = require('path');
const webpack = require('webpack');
module.exports = {
  // Where Webpack looks to load your JavaScript
  entry: {
    main: path.resolve(__dirname, 'src/'),
  },
  mode: 'development',
  // Where Webpack spits out the results (the myapp static folder)
  output: {
    path: path.resolve(__dirname, '../backend/TurnersRedesign/static/build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    // Don't output new files if there is an error
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  // Where find modules that can be imported (eg. React)
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};

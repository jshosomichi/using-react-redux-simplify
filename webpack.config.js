module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.ts']
  },
  output: {
    path: __dirname + "/assets/js",
    filename: '[name].js',
    publicPath: './js/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: (/\.ts$|\.tsx$/),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react"]
            }
          },
          {loader: "ts-loader"}
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx']
  }
};


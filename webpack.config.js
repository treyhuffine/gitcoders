module.exports = {
  entry: {
    app: ["./public/javascripts/main.jsx"]
  },
  output: {
    path: __dirname,
    filename: "public/build/bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    path: __dirname
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

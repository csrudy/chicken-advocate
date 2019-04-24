const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src/store/index.tsx",
  devServer: {
    contentBase: path.resolve(__dirname, "./client/src/static/"),
    publicPath: "/build/",
    hot: true
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/src/static/")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
<<<<<<< HEAD
      { test: /\.tsx?$/,
      use: [{
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }]
    },
=======
      { test: /\.tsx?$/, 
        use: [{
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        }],
      },
>>>>>>> 66799748638ae312e93631656d668706891cde70

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};

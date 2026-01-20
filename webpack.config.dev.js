const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "react_sample.js"),
  output: {
    filename: "js/react_sample.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new DashboardPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
      watch: true,
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
    compress: true,
    client: {
      overlay: true,
      progress: true,
    },
  },
};

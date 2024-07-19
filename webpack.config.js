const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // use to create dist folder
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // use to create css file instead of inline style
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    about: path.resolve(__dirname, "src/pages/about/index.js"),
    contact: path.resolve(__dirname, "src/pages/contact/index.js"),
  },
  output: {
    // create bulid file
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // whatever object key added to index.js value in entry object, by that name new bundle file will get created in dist folder // [conenthash] use to add random num to file e.g. bundle.7asdyas7a7sdda67.js, it uses for caching purposes
    clean: true, // it will stop creating multiple bundle files
    assetModuleFilename: "[name][ext]", // if you dont provide this it will change assets name to random string
  },
  // devtool: "source-map", // it use for debugging, source map provide map from your dist code
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 7394,
    open: true, // after npm run dev it will automatically open browser and run
    hot: true, // to hot reloading
    compress: true, // to enable gzip compression
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // ise to run code with older browsers
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    //To optimize loading times for your MPA
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // creates dist folder with index.html file
      title: "Webpack Demo App",
      filename: "index.html",
      template: "src/main.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      // creates dist folder with about.html file
      title: "About",
      filename: "about.html",
      template: "src/pages/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      // creates dist folder with contact.html file
      title: "Contact",
      filename: "contact.html",
      template: "src/pages/contact/contact.html",
      chunks: ["contact"],
    }),
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(), // it will open your code base analyzer
  ],
};

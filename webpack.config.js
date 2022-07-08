const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  target: "web",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/build/',
  },
  // ...add the babel-loader and preset
  module: {
    rules: [
      {
        test: /\.(ts|tsx|gif)$/,

        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      //manually added
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],

  },
  // ...add resolve to .jsx extension
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },

  // ...
}
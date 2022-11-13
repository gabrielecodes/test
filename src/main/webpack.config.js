//@ts-check

'use strict';

const path = require('path');


//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

/** @type WebpackConfig */
const extensionConfig = {
  entry: path.join(__dirname, "./main.tsx"),  
  output: {
    path: path.join(__dirname, '../../dist/main'),
    filename: 'main.js',
    clean: true
  },
  resolve: {    
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, '../../tsconfig.json')
          }
        },         
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,                  
        use: {
          loader: 'babel-loader',
          options: {              
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          }            
        },               
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./styles"),
        use: [
          'style-loader',          
          'css-loader',
          'postcss-loader'
        ]
      },
    ]
  }, 
  devtool: 'inline-source-map',
};


module.exports = [ extensionConfig ];
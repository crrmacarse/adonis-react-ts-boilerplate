import { join } from 'path';
import {
  entry, output, moduleResolver, rules, plugins,
} from './common';

const devServer = () => ({
  hot: true,
  contentBase: join(process.cwd(), '/public'),
  writeToDisk: true,
  historyApiFallback: true,
  compress: true,
  port: 4444,
  overlay: {
    errors: true,
    warnings: true,
  },
});

export default {
  mode: 'development',
  devtool: 'source-map',
  entry,
  output,
  resolve: moduleResolver,
  module: {
    rules: [
      ...rules,
      {
        test: /\.(scss|css)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins,
  devServer: devServer(),
};

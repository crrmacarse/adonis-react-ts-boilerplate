import CompressionPlugin from 'compression-webpack-plugin';
import BrotliPlugin from 'brotli-webpack-plugin';
import {
  entry, output, moduleResolver, rules, plugins,
} from './common';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry,
  output,
  resolve: moduleResolver,
  module: {
    rules: [
      ...rules,
      {
        test: /\.(scss|css)$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    ...plugins,
    new CompressionPlugin(),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

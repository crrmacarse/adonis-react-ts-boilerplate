import { join } from 'path';
import { rules, moduleResolver, plugins } from './common';

export default {
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  entry: join(process.cwd(), '/resources/react/server'),
  output: {
    filename: 'server.js',
    path: join(process.cwd(), '/public/ssr'),
    chunkFilename: '[name].[hash].bundle.js',
    library: 'ssrlib', // ??
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    publicPath: '/ssr/',
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.(scss|css)$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    ...moduleResolver,
  },
  plugins,
};

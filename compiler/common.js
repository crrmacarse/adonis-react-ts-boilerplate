import { join, resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const entry = join(process.cwd(), '/resources/react/index.tsx');

export const output = {
  path: join(process.cwd(), '/public/dist'),
  filename: 'bundle.js',
  chunkFilename: '[name].[hash].bundle.js',
  publicPath: '/dist/',
};

export const moduleResolver = {
  modules: [
    'node_modules',
    resolve(__dirname, '..', 'resources/react/'),
  ],
  extensions: ['.ts', '.tsx', '.js'],
  alias: {
    assets: resolve(__dirname, '..', 'resources/assets/'),
  },
};

export const rules = [
  {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: 'eslint-loader',
  },
  {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
      },
    ],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|ico|pdf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[contentHash].[hash].[ext]',
          outputPath: 'assets',
          publicPath: 'assets',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 80,
            enabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  },
];

export const plugins = [
  new CleanWebpackPlugin(),
];

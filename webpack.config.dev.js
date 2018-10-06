import path from 'path';

export default {
  debug: true,
  //Compilation speed vs verboseness.
  devtools: 'inline-source-map',
  //Webpack will display all files it's bundling.
  //might make it true as it's noisy.
  noInfo: false,
  //Can put in a directory for hotreloading here.
  //Or for where TS builds JS files.
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  //Can point this to node or electron instead
  //of you're delivering an app in node.
  target: 'web',
  //No physical files made, actually served from
  //memory.
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins : [],
  //Need to look up how to handle JS with TS
  module: {
    loaders: [
      //{test:/\.js$/, exclude: /node_modules/, loaders: ['babel']}
      {test:/\.css$/, loaders: ['style','css']}
    ]
  }
}

/**
 * Project Configuration.
 */

import * as EnvVars from './utils/envVars';

const values = {
  // The configuration values that should be exposed to our client bundle.
  // This value gets passed through the /app/utils/objects/filterWithRules
  // util to create a filter object that can be serialised and included
  // with our client bundle.
  clientConfigFilter: {
    serviceWorker: {
      enabled: true,
    },
    polyfillIO: true,
    htmlPage: true,
  },

  host: EnvVars.string('HOST', '0.0.0.0'),
  port: EnvVars.number('PORT', 3000),
  clientDevServerPort: EnvVars.number('CLIENT_DEV_PORT', 4000),
  disableSSR: false,
  browserCacheMaxAge: '365d',

  polyfillIO: {
    enabled: true,
    url: '//cdn.polyfill.io/v2/polyfill.min.js',

    features: ['default', 'es6'],
  },

  htmlPage: {
    titleTemplate: '🥑 - %s',
    defaultTitle: 'React Avocado Starter',
    description: 'A simple yet powerful starter kit',
  },

  cspExtensions: {
    childSrc: [],
    connectSrc: [],
    defaultSrc: [],
    fontSrc: ['fonts.googleapis.com/css', 'fonts.gstatic.com'],
    imgSrc: [],
    mediaSrc: [],
    manifestSrc: [],
    objectSrc: [],
    scriptSrc: ['cdn.polyfill.io'],
    styleSrc: ['fonts.googleapis.com/css'],
  },
  publicAssetsPath: './static',
  buildOutputPath: './build',
  includeSourceMapsForOptimisedClientBundle: false,
  bundleSrcTypes: ['js', 'jsx', 'json'],
  bundleAssetsFileName: 'assets.json',
  // node_modules are not included in any bundles that target "node" as a
  // runtime (e.g.. the server bundle) as including them often breaks builds
  // due to thinks like require statements containing expressions..
  // However. some of the modules contain files need to be processed by
  // one of our Webpack loaders (e.g. CSS). Add any file types to the list
  // below to allow them to be processed by Webpack.
  nodeExternalsFileTypeWhitelist: [
    /\.(eot|woff|woff2|ttf|otf)$/,
    /\.(svg|png|jpg|jpeg|gif|ico)$/,
    /\.(mp4|mp3|ogg|swf|webp)$/,
    /\.(css|scss|sass|sss|less)$/,
  ],
  serviceWorker: {
    enabled: true,
    fileName: 'sw.js',
    includePublicAssets: ['./**/*'],
    offlinePageFileName: 'offline.html',
  },

  bundles: {
    client: {
      srcEntryFile: './client/index.js',
      srcPaths: ['./client', './app', './config'],

      outputPath: './build/client',
      webPath: '/client/',
      devVendorDLL: {
        enabled: true,
        include: [
          'react',
          'react-dom',
          'react-helmet',
          'react-router-dom',
          'redux',
          'react-redux',
          'redux-thunk',
        ],

        name: '__dev_vendor_dll__',
      },
    },

    server: {
      srcEntryFile: './server/index.js',
      srcPaths: ['./server', './app', './config'],
      outputPath: './build/server',
    },
  },

  additionalNodeBundles: {
    // NOTE: The webpack configuration and build scripts have been built so
    // that you can add arbitrary additional node bundle configurations here.
    //
    // A common requirement for larger projects is to add additional "node"
    // target bundles (e.g an APi server endpoint). Therefore flexibility has been
    // baked into our webpack config factory to allow for this.
    //
    // Simply define additional configurations similar to below.  The development
    // server will manage starting them up for you.  The only requirement is that
    // within the entry for each bundle you create and return the "express"
    // listener.
    /*
    apiServer: {
      srcEntryFile: './api/index.js',
      srcPaths: [
        './api',
        './app',
        './config',
      ],
      outputPath: './build/api',
    }
    */
  },
  plugins: {
    // This plugin allows you to provide final adjustments your babel
    // configurations for each bundle before they get processed.
    //
    // This function will be called once for each for your bundles.  It will be
    // provided the current webpack config, as well as the buildOptions which
    // detail which bundle and mode is being targetted for the current function run.
    babelConfig: (babelConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example
      /*
      if (target === 'server' && mode === 'development') {
        babelConfig.presets.push('foo');
      }
     */

      return babelConfig;
    },

    // This plugin allows you to provide final adjustments your webpack
    // configurations for each bundle before they get processed.
    //
    // I would recommend looking at the "webpack-merge" module to help you with
    // merging modifications to each config.
    //
    // This function will be called once for each for your bundles.  It will be
    // provided the current webpack config, as well as the buildOptions which
    // detail which bundle and mode is being targetted for the current function run.
    webpackConfig: (webpackConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example:
      /*
      if (target === 'server' && mode === 'development') {
        webpackConfig.plugins.push(new MyCoolWebpackPlugin());
      }
      */

      // Debugging/Logging Example:
      /*
      if (target === 'server') {
        console.log(JSON.stringify(webpackConfig, null, 4));
      }
      */

      return webpackConfig;
    },
  },
};

// This protects us from accidentally including this configuration in our
// client bundle.
if (process.env.BUILD_FLAG_IS_CLIENT === 'true') {
  throw new Error(
    "You shouldn't be importing the `<projectroot>/config/values.js` directly into code that will be included in your 'client' bundle as the configuration object will be sent to user's browsers. This could be a security risk! Instead, use the `config` helper function located at `<projectroot>/config/index.js`.",
  );
}

export default values;

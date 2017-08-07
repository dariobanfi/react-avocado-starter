/**
 * We only enable the service worker for non-development environments.
 */

import config from '../config';

if (process.env.BUILD_FLAG_IS_DEV === 'false') {
  if (config('serviceWorker.enabled')) {
    // eslint-disable-next-line global-require
    const OfflinePluginRuntime = require('offline-plugin/runtime');
    OfflinePluginRuntime.install({
      onUpdating: () => undefined,
      onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
      onUpdated: () => window.location.reload(),
      onUpdateFailed: () => undefined
    });
  }
}

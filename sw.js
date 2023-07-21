'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","assets/index-ced38c1c.js", "assets/index-27e6e4ac.css"]);

toolbox.router.get('/assets/icon-ac5ff188.webp', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
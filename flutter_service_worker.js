'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9ce68efc9a2374f627b7c83501646431",
"assets/AssetManifest.bin.json": "adbb0ea3f4f58d4e2ce4acca0ebeffef",
"assets/AssetManifest.json": "abc23a89fc51a7600dc4ad38419f38ca",
"assets/assets/products/banner/banner_1.png": "ad52f1e1b5b5a7df70d6114571ff6a77",
"assets/assets/products/banner/banner_2.png": "cfc6814cf6dfab987e5548e49f0bdca0",
"assets/assets/products/banner/banner_3.png": "03f6455189e4af0f73b00cdf87e16e92",
"assets/assets/products/banner/banner_4.png": "c034c0cbda742568b1729704bd74da1c",
"assets/assets/products/headphone/headphone1.jpeg": "e74f6b68b8c590db15f471e8dcc84404",
"assets/assets/products/headphone/headphone10.jpeg": "601757f09da5f7699945a7a27f261b6c",
"assets/assets/products/headphone/headphone11.jpeg": "2d0a39b769fc57d4beca4387e09ef3e8",
"assets/assets/products/headphone/headphone12.jpeg": "3714c06f82db89c0a3ca6b14e7c9723a",
"assets/assets/products/headphone/headphone2.jpeg": "931cd8ff6b0c37be3f163824a7b58ac8",
"assets/assets/products/headphone/headphone3.jpeg": "d037cbafc12c642b8b321f52ef252f3a",
"assets/assets/products/headphone/headphone4.jpeg": "22a73c8f8d0f5d6ead61331e512aee44",
"assets/assets/products/headphone/headphone5.jpeg": "3c3374b820307048f3209c3881b53ce4",
"assets/assets/products/headphone/headphone6.jpeg": "1362b2135de272cba2574a94ebde42da",
"assets/assets/products/headphone/headphone7.jpeg": "4b2964e589c930f70e1f25ca59a65fa8",
"assets/assets/products/headphone/headphone8.jpeg": "7efb1df3311ac8296fd88fb16f8995b6",
"assets/assets/products/iPhone/iphone1.jpeg": "857f47e3693becffeaaac880048227a2",
"assets/assets/products/iPhone/iphone2.jpeg": "93859c440a5e6bbf68fde5c8dbae8bd5",
"assets/assets/products/iPhone/iphone3.jpeg": "26b3f2aca58c235f85536e79fa27b73a",
"assets/assets/products/iPhone/iphone4.jpeg": "326dd7e5ed17ea850526999e1bb390ce",
"assets/assets/products/sumsung/samsung1.jpeg": "c3779840eb77f69f2f1e470a603fbc5d",
"assets/assets/products/sumsung/samsung2.jpeg": "e65cc5a429d8ae4251d408ace7f00335",
"assets/assets/products/sumsung/samsung3.jpeg": "67f2e2a6fe487ce49f6df27511de3cb9",
"assets/assets/products/sumsung/samsung4.jpeg": "c57e79a66d9df618ee980e5d33924949",
"assets/assets/products/users/user-1.png": "8442d16d036356b52333b968182e1376",
"assets/assets/products/users/user-2.png": "ec7c8490818b6dc8f57c63b8067717b3",
"assets/assets/products/users/user-3.png": "4ccad0abf14781d68ebb337509c71abd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1208f2ebe5dd794c30074269e8605bec",
"assets/NOTICES": "77f6bc77d4d06d3f00105a25d015331c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "33dcffa470bcd2190a2a6075493b68dd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cf0718f8afa020d49b00031d83a37e2",
"/": "9cf0718f8afa020d49b00031d83a37e2",
"main.dart.js": "03705dec8ab621de75c5ab0551c047e4",
"manifest.json": "8291c2d281da79f51f31670dc2199658",
"version.json": "766c4d0fa16462454f1affe72edde389"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

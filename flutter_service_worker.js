'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cf084ef933d634bbab5576d25f650ff3",
"assets/AssetManifest.bin.json": "ab45ddb8bfaf787f6465c87eb145c58e",
"assets/AssetManifest.json": "c3f7a5a3541311d3ced43b72b7d4f34c",
"assets/assets/data/contacts_en.json": "cdc73d35613fd77c760c1b07d126346e",
"assets/assets/data/contacts_hu.json": "0dcc55dbcb5b66ece710a1613e5f611f",
"assets/assets/data/law_docs.json": "4eb8f074f8995057abf8bbaf7862dec3",
"assets/assets/data/prices_en.json": "b0dcacce73026ffa6cdcec899ecb964d",
"assets/assets/data/prices_hu.json": "1bb1de0600ed15b0cdba9bc8bb2c2287",
"assets/assets/images/aphrodites.webp": "f02d9c250fca9cf9767c3036ad8f0944",
"assets/assets/images/certificates.webp": "e6b5ddb53068d75a6fbcea04a7edd430",
"assets/assets/images/contact_2.webp": "0aa85ef6b54f923d2fc158df130d415d",
"assets/assets/images/content_bg_big.webp": "b63f781ed715b8958c509bbd05e0dcaa",
"assets/assets/images/cosmetical_process.webp": "889aab9ecf48159fd39ea0a03bce268d",
"assets/assets/images/guti_eniko.webp": "69aec3e16f2dc94c19ca9b15a9e1b5c8",
"assets/assets/images/koczka_zoe_3.webp": "2872c73081410ab7930cea72c6f6cedd",
"assets/assets/images/services_2_bg.webp": "1f31be66fccbb8ffb16fa9538abc717f",
"assets/assets/images/skin_problems.webp": "bb61078e714d6ebef7f638087f5839dc",
"assets/assets/images/steril_process.webp": "07b9c44fcc75bb94673c0daedf556415",
"assets/assets/images/taxes_4_bg.webp": "53f70ae4eb9e84e1e8a104ac89dfc143",
"assets/assets/images/zenia_logo_no_bg.webp": "1efc4e3ae40133099492ae25d5ba78c7",
"assets/assets/images/zenia_salon.webp": "b45365ad045135d6e15dd19f69256a31",
"assets/assets/images/zenia_salon_1.webp": "74695510784af9f261cc307290244518",
"assets/assets/images/zenia_salon_2.webp": "1a36af95ecd31dd7c281fc1757059913",
"assets/assets/images/zenia_salon_3.webp": "dee9c9a152210e3376a13b55ae9a93e3",
"assets/assets/images/zenia_salon_4.webp": "49d90ab6e60cd2b9ebe29a8daa6397cf",
"assets/assets/images/zenia_salon_6.webp": "f099ef7c4144b86e12d7cf5af72d3e74",
"assets/assets/translations/en.json": "2cf14ebee51bc377182b48a3070f53a9",
"assets/assets/translations/hu.json": "970abb05319ecd0bac3ea74acfdbdf57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "543dd41eed52c14e96cbde4137044de9",
"assets/NOTICES": "00b75ce73ca12cb45f39749f6fd21390",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "23e7ba7a307c16cbc59249dc143f7ee7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "078ad667cee06aba08a60efe714213db",
"icons/Icon-192.png": "87e350ab30ddc2486ed9efce8cbac386",
"icons/Icon-512.png": "c5d2b564255b63efcfa5be25a986a1a2",
"icons/Icon-maskable-192.png": "87e350ab30ddc2486ed9efce8cbac386",
"icons/Icon-maskable-512.png": "c5d2b564255b63efcfa5be25a986a1a2",
"icons/olds/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/olds/favicon_2.png": "1fbd7987e61b17e9fd3d1c568a090517",
"icons/olds/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/olds/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/olds/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/olds/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24f3e3c7f5859f5fef83b1fdd32e5de2",
"/": "24f3e3c7f5859f5fef83b1fdd32e5de2",
"main.dart.js": "c7ad2b2705f89113d19b9d16df4b803e",
"main.dart.mjs": "d1fcd622e120be6054cf18940bc90488",
"main.dart.wasm": "3d262f3713464b5a8ea8bb0caaaed162",
"manifest.json": "1698fc131e238e3f2df8048fdc6eafe0",
"version.json": "71b8c1fb50c44010cd7ed79639b3a1f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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

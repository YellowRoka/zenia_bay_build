'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8ad7c18646a031b36b97194f0e81fb30",
"assets/AssetManifest.bin.json": "c057dbf148f316bc12f672a0618bfdf6",
"assets/AssetManifest.json": "88cbc84ce91cc61bca853f1d016f2595",
"assets/assets/data/contacts_en.json": "123646e111b882747a59517f23dfe65f",
"assets/assets/data/contacts_hu.json": "c885ac65fceb364ce21e02f42e1e704c",
"assets/assets/data/law_docs.json": "b71b19f04f5c7c6697560644c1b45ef0",
"assets/assets/data/prices_en.json": "4d5d5a775a8191733c633b2f5355c23e",
"assets/assets/data/prices_hu.json": "ad70f198caa71f897fb4722db7535019",
"assets/assets/images/aphrodites.jpg": "c2d1561aef01f9bafec0bd73f5dc2709",
"assets/assets/images/certificates.jpg": "61ae7980e27cfe16f3f2dbb5c4729d61",
"assets/assets/images/contact_2.jpg": "993c2963af343ec54a4b595063c2ec6a",
"assets/assets/images/content_bg_big.jpg": "69cdfc9339613845ce40767b8197eaa5",
"assets/assets/images/cosmetical_process.jpg": "64996c3ea2cc66cc9bb011650c982bf1",
"assets/assets/images/guti_eniko.jpg": "430dfe796ef7e2e240c88f09a178fb22",
"assets/assets/images/services_2_bg.jpg": "5879eae170abcd52e36f51e5912c21c1",
"assets/assets/images/skin_problems.jpg": "e8f03def6d910a9da154915e55835128",
"assets/assets/images/steril_process.jpg": "f2bc23c77a4285f06dcd0af60c3bf911",
"assets/assets/images/taxes_4_bg.jpg": "4c88af646ec50eddc6e393a49a4be5eb",
"assets/assets/images/zenia_logo_no_bg.png": "1fbd7987e61b17e9fd3d1c568a090517",
"assets/assets/images/zenia_salon.jpg": "9df5a04d7cbdb6c69c3659e17268585a",
"assets/assets/images/zenia_salon_1.jpg": "6a7fd51b1ca8771daab4886d1403a9e8",
"assets/assets/images/zenia_salon_2.jpg": "304265238a27cba3f30963395a8cc400",
"assets/assets/images/zenia_salon_3.jpg": "60149f4ff67f3b8daa966c84e59e30ca",
"assets/assets/images/zenia_salon_4.jpg": "3e1c89f64b54a92e9a0c6eaf8b28a0fe",
"assets/assets/images/zenia_salon_6.jpg": "3e6cf04003fe677e38387e8018089367",
"assets/assets/translations/en.json": "5e3b89939d03477bc69045834ca56beb",
"assets/assets/translations/hu.json": "f98e554c708e2c6fadd9dab746ee91ba",
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
"flutter_bootstrap.js": "55862920b108268153ddd1edaa749c7d",
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
"index.html": "bd399d18637fe21881027c3069e780e4",
"/": "bd399d18637fe21881027c3069e780e4",
"main.dart.js": "09fd7a23cc52d0bde6a1e868c198f713",
"main.dart.mjs": "d1fcd622e120be6054cf18940bc90488",
"main.dart.wasm": "30adc06f5746a856008554d4406149d6",
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

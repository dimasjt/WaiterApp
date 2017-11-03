(function() {
  "use strict"

  var PREFIX = "waiterapp-staging"

  self.addEventListener("install", function(event) {
    self.skipWaiting()
    // event.waitUntil(
    //   caches.open(PREFIX).then(function(cache) {
    //     return cache.addAll([
    //       "/",
    //       "assets/*",
    //       "packs/*",
    //     ])
    //   })
    // )
  })

  // self.addEventListener("activate", function(event) {
  //   event.waitUntil(
  //     caches.keys().then(function(keys) {
  //       return Promise.all(
  //         keys.map(function(key) {
  //           if (key != PREFIX) {
  //             return caches.delete(key)
  //           }
  //         })
  //       )
  //     })
  //   )
  // })
})()

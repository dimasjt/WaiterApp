(function() {
  "use strict"

  var PREFIX = "waiterapp-staging"
  var FILES = [
  ]

  self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(PREFIX).then(function(cache) {
        return cache.addAll(FILES)
      }).catch(function(error) {
        console.log("install error", error)
      })
    )
  })

  self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(keys) {
        return Promise.all(
          keys.map(function(key) {
            if (key !== PREFIX) {
              return caches.delete(key)
            }
          })
        )
      }).catch(function(error) {
        console.log("activate", error)
      })
    )
  })

  self.addEventListener("fetch", function(event) {
    console.log("fetch")
    if (event.request.mode === "navigate") {
      console.log("Handling fetch event for", event.request.url)
      console.log(event.request)
      event.respondWith(
        fetch(event.request).catch(function(exception) {
          // The `catch` is only triggered if `fetch()` throws an exception,
          // which most likely happens due to the server being unreachable.
          console.error(
            "Fetch failed; returning offline page instead.",
            exception
          )
          return caches.open(PREFIX).then(function(cache) {
            return cache.match("/")
          })
        })
      )
    } else {
      // It’s not a request for an HTML document, but rather for a CSS or SVG
      // file or whatever…
      event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request)
        })
      )
    }
  })
})()

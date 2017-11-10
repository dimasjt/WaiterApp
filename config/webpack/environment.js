const { environment } = require("@rails/webpacker")

let entries

if (process.env.NODE_ENV === "development") {
  entries = [
    "react-hot-loader/patch",
    "./app/javascript/packs/index.dev.js",
  ]
} else {
  entries = "./app/javascript/packs/index.js"
}

const webpackConfig = Object.assign({}, environment.toWebpackConfig(), {
  entry: {
    application: [
      "babel-polyfill",
    ].concat(entries),
  },
})

module.exports = webpackConfig

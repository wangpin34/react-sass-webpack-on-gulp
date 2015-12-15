module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: "./app/bundle.js",
        sourceMapFilename:"[file].map"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

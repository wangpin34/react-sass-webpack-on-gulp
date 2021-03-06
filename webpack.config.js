module.exports = {
    watch:true,
    devtool: 'source-map',
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: "./app/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

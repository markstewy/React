module.exports = {
    entry: "./main.js",
    output: {
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        // Here we are defining our loader for js files. We are going to use babel
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    }
};

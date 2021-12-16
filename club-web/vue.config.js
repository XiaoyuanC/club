module.exports = {
    //Service start address
    devServer: {
        port: 80,
        proxy: 'http://localhost:8888'
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = ''
                return args
            });
    },
}

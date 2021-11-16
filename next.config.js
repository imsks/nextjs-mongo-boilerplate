module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            "/": { page: "/" },
        };
    },
    env: {
        ENV: process.env.ENV,
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
    }
};
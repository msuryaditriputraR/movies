const plugins = {
    autoprefixer: {},
    'rucksack-css': {}
};

if (process.env.NODE_ENV === 'production') {
    plugins.cssnano = {};
}

module.exports = {
    plugins
};

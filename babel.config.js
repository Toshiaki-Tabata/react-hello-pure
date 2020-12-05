module.exports = function (api) {
    api.cache(true);
    const presets = [
        ['@babel/preset-env',
            { 'targets': { 'esmodules': true } }
        ],
        ["@babel/preset-react",
    {}]];
    const plugins = ["@babel/plugin-syntax-dynamic-import"];
    return {
      presets,
      plugins
    };
}

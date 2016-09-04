export default function () {
  return {
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      let provided;

      for (let plugin of opts.plugins) {
        if (plugin[0].manipulateOptions === manipulateOptions) {
          provided = plugin[1];
          break;
        }
      }

      for (let parserPlugin of provided.plugins || []) {
        parserOpts.plugins.push(parserPlugin);
      }
      Object.assign(parserOpts, provided, {
        plugins: parserOpts.plugins
      });
    }
  };
}

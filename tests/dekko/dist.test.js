const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('antd-with-locales.js')
  .hasFile('antd-with-locales.min.js')
  .hasFile('antd.less')
  .hasFile('antd.dark.less')
  .hasFile('antd.compact.less')
  .hasFile('dark-theme.js');

$('dist/@wannaby')
  .isDirectory()
  .hasFile('wanna-ant-uploader.css')
  .hasFile('wanna-ant-uploader.min.css')
  .hasFile('wanna-ant-uploader.js')
  .hasFile('wanna-ant-uploader.min.js')
  .hasFile('wanna-ant-uploader.dark.css')
  .hasFile('wanna-ant-uploader.compact.css')

// eslint-disable-next-line no-console
console.log(chalk.green('✨ `dist` directory is valid.'));

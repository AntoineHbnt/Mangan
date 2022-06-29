const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@typography': 'src/asset/Typography',
    '@atoms' : 'src/components/UI/atoms',
    '@molecules' : 'src/components/UI/molecules',
    '@organisms' : 'src/components/UI/organisms',
    '@pages' : 'src/pages',
    '@templates' : 'src/templates' , 
    '@stitches-config' : 'src/stitches.config',
    '@asset': 'src/asset'
  })(config);

  return config;
};
import { app } from '@routers';
import { config } from '@config';
// import tsConfig from '../tsconfig.json';
// import { register } from 'tsconfig-paths';
//
// const baseUrl = '../';
// register({
//   baseUrl,
//   paths: tsConfig.compilerOptions.paths,
// });

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});

import {CrashItApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {CrashItApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new CrashItApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

/**
 * Helper for resolving environment specific configuration files.
*/

import appRootDir from 'app-root-dir';
import colors from 'colors/safe';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import ifElse from '../../app/utils/logic/ifElse';
import removeNil from '../../app/utils/arrays/removeNil';

// EXPORTED HELPERS

/**
 * Gets a string environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {String} defaultVal - The default value to use.
 *
 * @return {String} The value.
 */
export function string(name, defaultVal) {
  return process.env[name] || defaultVal;
}

/**
 * Gets a number environment variable by the given name.
 *
 * @param  {String} name - The name of the environment variable.
 * @param  {number} defaultVal - The default value to use.
 *
 * @return {number} The value.
 */
export function number(name, defaultVal) {
  return process.env[name] ? parseInt(process.env[name], 10) : defaultVal;
}

export function bool(name, defaultVal) {
  return process.env[name] ? process.env[name] === 'true' || process.env[name] === '1' : defaultVal;
}

function registerEnvFile() {
  const DEPLOYMENT = process.env.DEPLOYMENT;
  const envFile = '.env';

  // This is the order in which we will try to resolve an environment configuration
  // file.
  const envFileResolutionOrder = removeNil([
    // Is there an environment config file at the app root?
    // This always takes preference.
    path.resolve(appRootDir.get(), envFile),
    // Is there an environment config file at the app root for our target
    // environment name?
    ifElse(DEPLOYMENT)(path.resolve(appRootDir.get(), `${envFile}.${DEPLOYMENT}`))
  ]);

  const envFilePath = envFileResolutionOrder.find(filePath => fs.existsSync(filePath));

  if (envFilePath) {
    // eslint-disable-next-line no-console
    console.log(colors.bgBlue.white(`==> Registering environment variables from: ${envFilePath}`));
    dotenv.config({ path: envFilePath });
  }
}

// Add here runtime validation for the environment file to avoid misconfigurations
function validateEnvFile() {
  // Validate DEPLOYMENT_PATH
  const deploymentPath = string('DEPLOYMENT_PATH', '');
  const isValidDeploymentPath =
    deploymentPath === '' ||
    (deploymentPath.charAt(0) === '/' &&
      deploymentPath.charAt(deploymentPath.length - 1) !== '/');

  if (!isValidDeploymentPath) {
    throw new Error(
      'Deployment path must start with a slash and end without one: e.g. /something'
    );
  }
  // VALIDATE DEPLOYMENT
  const deployment = string('DEPLOYMENT', '');
  if (
    deployment !== '' &&
    deployment !== 'production' &&
    deployment !== 'staging' &&
    deployment !== 'development'
  ) {
    throw new Error(
      'Trying to configure an unknow deployment value, allowed ones are ["production", "staging", "development"]'
    );
  }
}

registerEnvFile();

validateEnvFile();

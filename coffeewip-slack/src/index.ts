/**
 * Wrapper CoffeeWIP Slack Library
 *
 * @description Wrapper class for define Tools.
 */

/** Import main dependencies */
import https from 'https';

/** Import Configuration Base */
import API from './config/api';

/**
 * @class IntentClassFactory
 *
 * @description Create classes dynamically to the target intent. Typescript reflection
 *
 * @author First and Last Name | Github User
 */
class Slack {
  // Init data configuracion.
  token: string;

  /**
   * @function constructor
   *
   * @description Class constructor for set main instance with configuration.
   *
   * @author Jose J. Pérez Rivas | JoseJPR
   *
   * @param {string} token - Token of Slack Applications for can connecto via API.
   */
  constructor(token: string) {
    this.token = token;
  }

  /**
   * @function usersList
   *
   * @description Get all users profiles.
   *
   * @author Jose J. Pérez Rivas | JoseJPR
   *
   * @returns {Promise<string>}
   *
   * @example usersList();
   */
  usersList = async (): Promise<string> => {
    try {
      return await this.request({
        hostname: API.hostname,
        method: 'GET',
        path: API.path.usersList,
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * @function request
   *
   * @description Asynchronously requests into promise.
   *
   * @author Jose J. Pérez Rivas | JoseJPR
   *
   * @param {object} options - Options Object with necessary configuration for the request,
   * @param {object} [content] - Optional Content Object.
   *
   * @returns {Promise<string>}
   */
  private request = async (options: object, content?: object): Promise<string> => new Promise(
    (resolve, reject) => {
      let data: string = '';
      const req = https.request({
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
        ...options,
      }, (res: any) => {
        res.on('data', (result: string) => { data += result; });
        res.on('end', () => resolve(data));
      });
      req.on('timeout', () => {
        reject(new Error('timeout'));
      });
      req.on('error', (error: object) => reject(error));
      if (content) req.write(content);
      req.end();
    },
  );
}

export default Slack;

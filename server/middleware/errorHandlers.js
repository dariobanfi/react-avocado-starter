/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const errorHandlersMiddleware = [
  function notFoundMiddlware(req, res, next) {
    res.status(404).send('Sorry, that resource was not found.');
  },

  /**
   * 500 errors middleware.
   *
   * NOTE: You must provide specify all 4 parameters on this callback function
   * even if they aren't used, otherwise it won't be used.
   */
  function unexpectedErrorMiddleware(err, req, res, next) {
    if (err) {
      console.log(err);
      console.log(err.stack);
    }
    res.status(500).send('Sorry, an unexpected error occurred.');
  }
];

export default errorHandlersMiddleware;

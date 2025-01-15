//@ts-check

let { Worker, SharedWorker } = globalThis;

Worker = class extends Worker {
  /**
   * @param {string|URL} scriptURL
   * @param {WorkerOptions} [options]
   */
  constructor(scriptURL, options) {
    super(scriptURL, { ...options, type: 'module' });
  }
}

// ⚠️ some platform is not there yet with this lovely primitive
if (SharedWorker) SharedWorker = class extends SharedWorker {
  /**
   * @param {string|URL} scriptURL
   * @param {string | WorkerOptions} [options]
   */
  constructor(scriptURL, options) {
    if (typeof options === 'string')
      options = { name: options };
    super(scriptURL, { ...options, type: 'module' });
  }
}

export { Worker, SharedWorker };

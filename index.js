//@ts-check

let { Worker, SharedWorker } = globalThis;

Worker = class extends Worker {
  /**
   * @param {string|URL} scriptURL
   * @param {WorkerOptions} [options]
   */
  constructor(scriptURL, options) {
    super(scriptURL, { type: 'module', ...options });
  }
}

// ⚠️ some platform is not there yet with this lovely primitive
if (SharedWorker) SharedWorker = class extends SharedWorker {
  /**
   * @param {string|URL} scriptURL
   * @param {string|WorkerOptions} [options]
   */
  constructor(scriptURL, options) {
    if (typeof options === 'string')
      options = { name: options };
    super(scriptURL, { type: 'module', ...options });
  }
}

export { Worker, SharedWorker };

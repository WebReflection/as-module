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
   * @param {string | WorkerOptions} [name_or_options]
   */
  constructor(scriptURL, name_or_options) {
    if (typeof name_or_options === 'string')
      name_or_options = { name: name_or_options };
    super(scriptURL, { ...name_or_options, type: 'module' });
  }
}

export { Worker, SharedWorker };

# as-module

<sup>**Social Media Photo by [Vlado Paunovic](https://unsplash.com/@vlado) on [Unsplash](https://unsplash.com/)**</sup>

A module that exports primitives that will bootstrap as module.

```js
import { Worker, SharedWorker } from 'as-module';

// no need for extra options
// if provided, these will be forwarded
new Worker('./worker.js');
// worker.js
// import anything from 'anywhere';

// optional name, no need for extra options
// if provided, these will be forwarded
new SharedWorker('./shared.js');
// shared.js
// import anything from 'anywhere';
```

All instances will bootstrap with `{ type: 'module' }` ability so that we can stop doing the awkward dance in every modern project based on workers' modules.

## How to contribute?

If there are native APIs that require a `{ type: 'module' }` somewhere while initializing, please just point me at those to be provided via this module too, thank you 🙏

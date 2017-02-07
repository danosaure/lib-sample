# Sample lib

To install:

    npm install git+https://github.com/danosaure/lib-sample.git

## Usage:

Put this in your express server:

    const libSample = require('lib-sample');
    ...
    app.use('/somePrefix', libSample.router);

Also just check the [lib-sample-usage](https://github.com/danosaure/lib-sample-usage) repo.

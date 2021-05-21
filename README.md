# csv-magic
Small nodejs package to easily turn csv into arrays using promises

# Quickstart
```
const csvHandler = require('@theflyingpan/csv-magic')({columns: true});

csvHandler.toArray('./example.csv')
.then(data => console.log(data))
.catch(err => console.log(err));
```

# Note
This package uses csv-parse, the options are the same as in [their doc](https://csv.js.org/parse/options/)

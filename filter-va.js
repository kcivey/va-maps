#!/usr/bin/env node
var fs = require('fs'),
    data = JSON.parse(fs.readFileSync(process.argv[2]));

data.features = data.features.filter(function (feature) {
    return feature.properties.STATEFP == '51';
});

process.stdout.write(JSON.stringify(data));

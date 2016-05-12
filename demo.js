#!/usr/bin/env node

var cli = require('./cli'),
    _ = require('underscore'),
    pj = require('prettyjson'),
    options = require('./options'),
    base = require('./base'),
    createOutput = require('./outputs'),
    collections = require('./collect');


var Collections = [];

cli.withStdinLines(function(lines, newline) {
    lines.sort(!options.n ? null : function(a, b) {
        return parseInt(a) > parseInt(b);
    });
    if (options.r) lines.reverse();
    /*
    if (options.collections.split(',').length > 0)
        var Collections = options.collections.split(',');
    else
        var Collections = [options.collections];
    var CC = _.contains(_.keys(collections), Collections);
    console.log('clll', Collections, CC);
    process.exit();
    */
    var Nodes = lines.filter(function(l) {
        return l && l.length > 1 && l.split(' ').length == 4;
    }).map(base.lineFilter).filter(function(node) {
        return node.type == options.type;
    }).slice(0, options.limit);
    base.Connect(Nodes[0]);
    createOutput[options.output](Nodes);
});

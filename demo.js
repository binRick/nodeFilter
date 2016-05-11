#!/usr/bin/env node

var cli = require('./cli'),
    _ = require('underscore'),
    pj = require('prettyjson'),
    options = require('./options'),
    base = require('./base'),
    createOutput = require('./outputs');



cli.withStdinLines(function(lines, newline) {
    lines.sort(!options.n ? null : function(a, b) {
        return parseInt(a) > parseInt(b);
    });
    if (options.r) lines.reverse();
    var Nodes = lines.filter(function(l) {
        return l && l.length > 1 && l.split(' ').length == 4;
    }).map(base.lineFilter).filter(function(node) {
        return node.type == options.type;
    }).slice(0,options.limit);
    createOutput[options.output](Nodes);
});

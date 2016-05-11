#!/usr/bin/env node

var cli = require('./cli'),
    _ = require('underscore'),
    pj = require('prettyjson'),
    options = require('./options');

var lineFilter = function(line) {
    var t = line.split(' ');
    var L = {
        node: t[0],
        ip: t[3],
        type: t[2],
        id: t[1],
    };
    return L;
};

var createOutput = require('./outputs');



cli.withStdinLines(function(lines, newline) {
    lines.sort(!options.n ? null : function(a, b) {
        return parseInt(a) > parseInt(b);
    });
    if (options.r) lines.reverse();
    var Nodes = lines.filter(function(l) {
        return l && l.length > 1 && l.split(' ').length == 4;
    }).map(lineFilter).filter(function(node) {
        return node.type == options.type;
    });
    createOutput[options.output](Nodes);
    //   console.log(pj.render(Nodes));
    //    this.output(lines.join(newline));
});

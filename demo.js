#!/usr/bin/env node

var cli = require('./cli'),
    _ = require('underscore'),
    pj = require('prettyjson'),
    //   options = cli.parse();

    options = cli.parse({
        action: ['a', 'An action to perform', 'action', 'list'],
        type: ['t', 'Node Type', 'string', 'openvz'],
        node: ['n', 'Node', 'string', 'all'],
        work: [false, 'What kind of work to do', 'string', 'sleep'],
    });

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
    console.log(pj.render(Nodes));
    console.log(options);
    //    this.output(lines.join(newline));
});

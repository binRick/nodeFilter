var pj = require('prettyjson');

module.exports = {
    debug: function(Nodes) {
        console.log(pj.render(Nodes));
    },
    ip: function(Nodes) {
        var o = Nodes.map(function(n) {
            return n.ip;
        }).join('\n');
        console.log(o);
    },
    node: function(Nodes) {
        var o = Nodes.map(function(n) {
            return n.node;
        }).join('\n');
        console.log(o);
    },
};

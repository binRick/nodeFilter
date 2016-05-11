module.exports = {
    debug: function(Nodes) {
        console.log(pj.render(Nodes));
        console.log(options);
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

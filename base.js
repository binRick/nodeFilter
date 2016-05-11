module.exports = {

    lineFilter: function(line) {
        var t = line.split(' ');
        var L = {
            node: t[0].toLowerCase(),
            ip: t[3],
            type: t[2],
            id: t[1],
        };
        return L;
    },
};

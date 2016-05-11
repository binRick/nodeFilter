var Client = require('ssh2').Client;



module.exports = {
    Connect: function(Node) {
        var conn = new Client();
        conn.on('ready', function() {
            console.log('Client :: ready');
            conn.exec('uptime', function(err, stream) {
                if (err) throw err;
                stream.on('close', function(code, signal) {
                    console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                    conn.end();
                }).on('data', function(data) {
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                });
            });
        }).connect({
            host: Node.ip,
            port: Node.port || 22,
            username: Node.user || 'root',
            privateKey: Node.privateKey || readFileSync('process.env.privateKey') || require('fs').readFileSync('/root/.ssh/id_rsa'),
        });

    },
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

var cli = require('./cli');

module.exports = cli.parse({
                            output: ['o', 'Output format', 'string', 'debug'],
                            type: ['t', 'Node Type', 'string', 'openvz'],
                            node: ['n', 'Node', 'string', 'all'],
                            work: [false, 'What kind of work to do', 'string', 'sleep'],
                        });



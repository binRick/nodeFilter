var cli = require('./cli');

module.exports = cli.parse({
    output: ['o', 'Output format', 'string', 'debug'],
    type: ['t', 'Node Type', 'string', 'openvz'],
    node: ['n', 'Node', 'string', 'all'],
    work: ['w', 'What kind of work to do', 'string', 'none'],
    filter: ['f', 'Apply Node Filter', 'string', 'up'],
    limit: ['l', 'Node Limit', 'int', 3],
});

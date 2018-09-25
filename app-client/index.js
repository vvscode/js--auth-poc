const COMMANDS = {
  fetchJWT: require('./commands/fetchJWT'),
  requestToApiGateway: require('./commands/requestToApiGateway'),
};

let [_interpreter, _script, command, ...params] = process.argv;

if (!command) {
  console.log(`pass command (${Object.keys(COMMANDS).join('|')})`);
} else if (!(command in COMMANDS)) {
  console.log(`Unknown command "${command}"`);
} else {
  console.log(`
command: ${command}
params: ${params}
`);
  COMMANDS[command](...params);
}

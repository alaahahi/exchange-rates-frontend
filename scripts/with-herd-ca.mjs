import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const candidates = [
  join(homedir(), '.config/herd/config/valet/CA/LaravelValetCASelfSigned.crt'),
  join(homedir(), '.config/herd/config/valet/CA/LaravelValetCASelfSigned.pem'),
];

for (const path of candidates) {
  if (existsSync(path)) {
    process.env.NODE_EXTRA_CA_CERTS = path;
    break;
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/with-herd-ca.mjs <command> [...args]');
  process.exit(1);
}

const child = spawn(args.join(' '), {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});

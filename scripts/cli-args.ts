// Supports `--flag value` and `--flag=value`; everything else is a positional.

export interface ParsedArgs {
  positionals: string[];
  flags: Map<string, string>;
}

export function parseArgs(argv: string[]): ParsedArgs {
  const positionals: string[] = [];
  const flags = new Map<string, string>();
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) {
      positionals.push(arg);
      continue;
    }
    const eq = arg.indexOf('=');
    if (eq !== -1) {
      flags.set(arg.slice(2, eq), arg.slice(eq + 1));
    } else {
      i += 1;
      flags.set(arg.slice(2), argv[i] ?? '');
    }
  }
  return { positionals, flags };
}

export function numberFlag(flags: Map<string, string>, name: string, fallback: number): number {
  const raw = flags.get(name);
  if (raw === undefined) return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    throw new Error(`--${name} must be a number, got "${raw}"`);
  }
  return value;
}

import { parse } from '@babel/parser';
import { readFileSync } from 'fs';
const f = process.argv[2];
const code = readFileSync(f,'utf8');
try { parse(code,{sourceType:'module',plugins:['jsx']}); console.log('OK'); }
catch(e){ console.log(e.message); if(e.loc){ const lines=code.split('\n'); const L=e.loc.line; for(let i=Math.max(1,L-4);i<=Math.min(lines.length,L+1);i++){ console.log((i===L?'>> ':'   ')+i+': '+lines[i-1]); } } }

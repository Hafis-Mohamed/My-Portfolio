import { parse } from '@babel/parser';
import { readFileSync } from 'fs';
const code = readFileSync(process.argv[2],'utf8');
const ast = parse(code,{sourceType:'module',plugins:['jsx'],errorRecovery:true});
const errs = ast.errors || [];
console.log('errors:', errs.length);
for (const e of errs.slice(0,6)) console.log(' -', e.reasonCode || e.code, 'at', e.loc?.line+':'+e.loc?.column, '|', e.message.split('\n')[0]);

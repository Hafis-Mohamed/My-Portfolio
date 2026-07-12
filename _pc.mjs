import { parse } from '@babel/parser';
import { readFileSync, readdirSync } from 'fs';
const files = [ ...readdirSync('components').map(f=>'components/'+f), 'app/page.jsx','app/layout.jsx' ].filter(f=>f.endsWith('.jsx'));
let bad=0;
for (const f of files){ try{ parse(readFileSync(f,'utf8'),{sourceType:'module',plugins:['jsx']}); console.log('OK   ',f);}catch(e){bad++;console.log('FAIL ',f,'->',e.message);} }
console.log(bad===0?'\nALL FILES PARSE CLEANLY':`\n${bad} FAILED`);

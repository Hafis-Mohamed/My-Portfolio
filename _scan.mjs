import { readFileSync } from 'fs';
const src = readFileSync(process.argv[2],'utf8');
let i=0, n=src.length, line=1, col=0;
const stack=[];
let state='code'; // code, sq, dq, tpl, line, block
const tplStack=[]; // for ${} nesting inside template
function adv(){ if(src[i]==='\n'){line++;col=0;} else col++; i++; }
while(i<n){
  const c=src[i], c2=src[i+1];
  if(state==='code'){
    if(c==='/'&&c2==='/'){state='line';adv();adv();continue;}
    if(c==='/'&&c2==='*'){state='block';adv();adv();continue;}
    if(c==="'"){state='sq';adv();continue;}
    if(c==='"'){state='dq';adv();continue;}
    if(c==='`'){state='tpl';adv();continue;}
    if(c==='{'){stack.push({line,col});adv();continue;}
    if(c==='}'){ if(stack.length===0){console.log('EXTRA } at',line+':'+col);} else stack.pop(); adv();continue;}
    adv();continue;
  }
  if(state==='line'){ if(c==='\n'){state='code';} adv(); continue; }
  if(state==='block'){ if(c==='*'&&c2==='/'){state='code';adv();adv();continue;} adv(); continue; }
  if(state==='sq'){ if(c==='\\'){adv();adv();continue;} if(c==="'"){state='code';} adv(); continue; }
  if(state==='dq'){ if(c==='\\'){adv();adv();continue;} if(c==='"'){state='code';} adv(); continue; }
  if(state==='tpl'){
    if(c==='\\'){adv();adv();continue;}
    if(c==='`'){state='code';adv();continue;}
    if(c==='$'&&c2==='{'){ tplStack.push(stack.length); stack.push({line,col,tpl:true}); state='code'; adv();adv(); continue; }
    adv(); continue;
  }
}
console.log('unclosed { remaining:', stack.length);
for(const s of stack) console.log('  opened at', s.line+':'+s.col, s.tpl?'(template)':'');

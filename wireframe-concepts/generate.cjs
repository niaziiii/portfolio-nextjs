const fs = require('node:fs');
const path = require('node:path');

// The images are deliberately self-contained: they can be reviewed independently
// and later exported at any size without relying on the portfolio's styles.
const out = __dirname;
const C = { bg:'#0b1321', surface:'#121f30', raised:'#19293d', border:'#2b3e53', text:'#edf4fb', muted:'#9aafc3', faint:'#6f859b', cyan:'#68d9e5', blue:'#76aaff', mint:'#7de3b6', gold:'#f6c47a', violet:'#b7a5ff', rose:'#fb9ba9' };
const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const rect = (x,y,w,h,fill=C.surface,stroke=C.border,rad=12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x,y,s,size=15,color=C.text,weight=400,extra='') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" ${extra}>${esc(s)}</text>`;
const line = (x1,y1,x2,y2,color=C.border,width=1,extra='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const circle = (x,y,r,fill,stroke='none') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}"/>`;
const label = (x,y,s) => text(x,y,s.toUpperCase(),11,C.faint,700,'letter-spacing="1.5"');
const pill = (x,y,w,s,color=C.cyan) => rect(x,y,w,27,'#192d3c',color,13)+text(x+w/2,y+18,s,12,color,700,'text-anchor="middle"');
const button = (x,y,w,s,color=C.cyan) => rect(x,y,w,38,color,color,8)+text(x+w/2,y+25,s,13,'#102232',750,'text-anchor="middle"');
const panelTitle = (x,y,title,subtitle='') => text(x,y,title,17,C.text,700)+(subtitle?text(x,y+22,subtitle,12,C.muted):'');
const bar = (x,y,w,amount,color=C.cyan) => rect(x,y,w,7,'#293a4c','#293a4c',4)+rect(x,y,w*amount,7,color,color,4);
const grid = (x,y,w,h) => `<path d="M ${x} ${y} h ${w} v ${h} h -${w} Z" fill="url(#grid)" opacity=".42"/>`;
const heading = (title,subtitle,accent,tag) => text(206,111,title,28,C.text,750)+text(207,138,subtitle,14,C.muted)+(tag?pill(1040,92,125,tag,accent):'');
function shell(title, subtitle, nav, active, accent, content, tag='CONCEPT') {
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750" role="img" aria-label="${esc(title)} interface concept"><defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="#385064" stroke-width="1"/></pattern><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#111f30"/><stop offset="1" stop-color="#0a1321"/></linearGradient></defs><rect width="1200" height="750" fill="url(#bg)"/><g font-family="Segoe UI, Arial, sans-serif">`;
  s += `<rect width="1200" height="64" fill="#101c2c"/>${line(0,64,1200,64,'#2b3e53')}`;
  s += rect(24,18,28,28,'#203a48',accent,8)+text(38,37,'S',15,accent,800,'text-anchor="middle"')+text(62,39,'SECURITY LAB',15,C.text,800,'letter-spacing="1.2"');
  s += text(238,39,'LEARNING EXPERIENCES',11,C.faint,700,'letter-spacing="1.2"')+text(1030,39,'PRACTICE MODE',11,C.muted,700,'letter-spacing="1"')+circle(1168,32,15,'#24374b')+text(1168,36,'S',11,C.muted,700,'text-anchor="middle"');
  s += `<rect x="0" y="65" width="174" height="685" fill="#101b2a"/>${line(174,65,174,750,'#27394c')}`+label(24,101,'Workspace');
  nav.forEach((n,i)=>{let y=120+i*45;if(i===active)s+=rect(14,y-6,145,36,'#20364a','#2d4a5d',8)+rect(15,y,3,23,accent,accent,2);s+=text(29,y+17,String(i+1).padStart(2,'0'),11,i===active?accent:C.faint,700)+text(57,y+17,n,13,i===active?C.text:C.muted,i===active?700:500)});
  s += rect(16,629,142,86,'#172739','#2a4053',10)+label(30,651,'Learning mode')+text(30,676,'Explore freely',13,C.text,650)+text(30,695,'Fictional scenario',11,C.muted);
  s += heading(title,subtitle,accent,tag)+content+`</g></svg>`;
  return s;
}

const assembly = (()=>{
  let s=rect(206,170,376,379)+panelTitle(228,200,'Instruction editor','Step through the program one instruction at a time')+pill(474,181,84,'x86 MODE',C.cyan);
  s+=line(207,226,581,226); const rows=[['01','MOV  EAX, 20h'],['02','MOV  EBX, 30h'],['03','ADD  EAX, EBX'],['04','PUSH EAX'],['05','NOP']];
  rows.forEach((row,i)=>{const y=257+i*43;if(i===2)s+=rect(220,y-22,346,36,'#1d3b4b','#315f6b',6);s+=text(235,y,row[0],13,C.faint,600)+text(280,y,row[1],16,i===2?C.cyan:C.text,600,'font-family="Consolas, monospace"');if(i===2)s+=text(547,y,'▶',11,C.cyan,700,'text-anchor="end"')});
  s+=line(207,464,581,464)+button(228,486,108,'▶  Run',C.cyan)+rect(345,486,95,38,'#233448','#3c5268',8)+text(392,511,'Step →',13,C.text,700,'text-anchor="middle"')+text(455,511,'Reset',13,C.muted,600);
  s+=rect(598,170,259,379)+panelTitle(619,200,'Registers','Live processor state')+line(599,226,856,226);
  [['EAX','00000050'],['EBX','00000030'],['ECX','00000000'],['EDX','00000000'],['ESP','00001000']].forEach((v,i)=>{let y=261+i*48;s+=text(619,y,v[0],14,C.muted,700,'font-family="Consolas, monospace"')+rect(677,y-23,157,34,i===0?'#1b3c49':'#1b2b3d',i===0?'#397682':'#304457',6)+text(690,y,v[1],14,i===0?C.cyan:C.text,600,'font-family="Consolas, monospace"')});
  s+=rect(873,170,291,379)+panelTitle(894,200,'Memory','Address and value')+line(874,226,1163,226)+label(894,252,'Address')+label(1054,252,'Value');
  [['0x0000','00 00 00 00'],['0x0004','20 00 00 00'],['0x0008','30 00 00 00'],['0x000C','50 00 00 00'],['0x0010','00 00 00 00']].forEach((v,i)=>{let y=282+i*43;s+=text(894,y,v[0],13,C.muted,500,'font-family="Consolas, monospace"')+text(1054,y,v[1],13,i===3?C.cyan:C.text,500,'font-family="Consolas, monospace"')+line(894,y+15,1143,y+15,'#25394c')});
  s+=rect(206,565,958,137)+panelTitle(228,594,'Processor flags','Signals update as each instruction is executed');
  [['ZERO','0'],['CARRY','0'],['SIGN','0'],['OVERFLOW','0']].forEach((v,i)=>{let x=228+i*180;s+=rect(x,625,158,53,'#1a2a3b','#304558',7)+text(x+14,646,v[0],10,C.muted,700,'letter-spacing="1"')+text(x+14,667,v[1],17,C.text,700)});
  s+=text(1000,652,'CURRENT STEP',11,C.faint,700,'letter-spacing="1"')+text(1000,675,'03 / 05',20,C.cyan,700);
  return shell('Assembly emulator','Explore how instructions change registers, memory and flags.',['Overview','Editor','Registers','Memory'],1,C.cyan,s,'LIVE STATE');
})();

const network = (()=>{
 let s=rect(206,170,958,327)+panelTitle(228,201,'Network topology','Trace the packet from the public edge to the data zone')+pill(1024,182,118,'4 ZONES',C.mint)+grid(225,222,920,245);
 const nodes=[['01','Internet','Public traffic'],['02','Edge firewall','Traffic rules'],['03','Web zone','HTTPS service'],['04','App zone','Private service'],['05','Data zone','Restricted']];
 nodes.forEach((n,i)=>{let x=235+i*180;if(i<4)s+=line(x+135,339,x+180,339,i<2?C.mint:'#496376',3,'stroke-dasharray="6 6"');s+=rect(x,278,135,125,'#1b2b3c',i===1?C.mint:'#385168',10)+circle(x+25,305,13,'#284555')+text(x+25,309,n[0],10,C.mint,700,'text-anchor="middle"')+text(x+14,348,n[1],15,C.text,700)+text(x+14,371,n[2],11,C.muted)});
 s+=text(242,457,'PACKET FLOW',10,C.faint,700,'letter-spacing="1.2"')+text(345,457,'Internet  →  Firewall  →  Web  →  App',13,C.mint,650);
 s+=rect(206,513,603,189)+panelTitle(228,544,'Firewall rules','Define which traffic is allowed between zones')+line(207,565,808,565);
 [['SOURCE','DESTINATION','PORT','ACTION'],['Internet','Web zone','443','ALLOW'],['Web zone','App zone','8443','ALLOW'],['Internet','Data zone','Any','DENY']].forEach((row,i)=>{let y=586+i*27;[228,379,540,656].forEach((x,j)=>s+=text(x,y,row[j],i?12:10,i===0?C.faint:(j===3?(i===3?C.rose:C.mint):C.text),i===0?700:600))});
 s+=rect(825,513,339,189)+panelTitle(846,544,'Configuration checks','Validate the route before submitting')+text(846,589,'✓  Public web access',13,C.mint,650)+text(846,617,'✓  Private app connection',13,C.mint,650)+text(846,645,'○  Data zone isolation',13,C.muted,600)+button(1003,652,135,'Validate rules',C.mint);
 return shell('Secure network architecture','Build a segmented network and follow the packet flow.',['Scenario','Topology','Firewall rules','Validation'],1,C.mint,s,'BUILDER');
})();

const stride = (()=>{
 let s=rect(206,170,958,210)+panelTitle(228,201,'Map the system','Identify entry points, processes and data stores')+pill(1010,182,132,'STRIDE MODEL',C.violet);
 let blocks=[['01','Visitor','Entry point'],['02','Sign-in service','Process'],['03','Account store','Data store']];blocks.forEach((v,i)=>{let x=240+i*302;if(i<2)s+=line(x+238,294,x+302,294,C.violet,2,'stroke-dasharray="7 5"');s+=rect(x,252,238,91,'#1b2c40','#41546e',9)+circle(x+28,281,12,'#342f56')+text(x+28,285,v[0],10,C.violet,700,'text-anchor="middle"')+text(x+50,282,v[1],15,C.text,700)+text(x+50,307,v[2],12,C.muted)});
 s+=text(207,418,'Identify possible threats',19,C.text,700)+text(207,442,'Select a category to explore a sample threat and mitigation.',13,C.muted);
 const cards=[['S','Spoofing','Impersonating a user'],['T','Tampering','Changing a request'],['R','Repudiation','Denying an action'],['I','Information disclosure','Exposing private data'],['D','Denial of service','Interrupting access'],['E','Elevation of privilege','Gaining extra access']];
 cards.forEach((v,i)=>{let x=206+(i%3)*324,y=465+Math.floor(i/3)*119;s+=rect(x,y,310,104,i===0?'#262844':'#152338',i===0?C.violet:'#304358',10)+rect(x+15,y+17,36,36,'#373153','#675d97',8)+text(x+33,y+41,v[0],17,C.violet,800,'text-anchor="middle"')+text(x+64,y+36,v[1],15,C.text,700)+text(x+64,y+61,v[2],12,C.muted)+text(x+64,y+84,i===0?'VIEWING EXAMPLE  →':'EXPLORE CATEGORY  →',10,i===0?C.violet:C.faint,700,'letter-spacing=".5"')});
 return shell('Threat modeling','Examine a sample system through the STRIDE framework.',['System map','Threats','Risk rating','Mitigations'],1,C.violet,s,'FRAMEWORK');
})();

const soc = (()=>{
 let s='';[['OPEN ALERTS','08','+ 3 today',C.cyan],['HIGH PRIORITY','03','Requires review',C.rose],['INVESTIGATING','02','In progress',C.gold]].forEach((v,i)=>{let x=206+i*324;s+=rect(x,170,310,101)+label(x+18,195,v[0])+text(x+18,233,v[1],29,C.text,750)+circle(x+238,207,17,'#213d4a')+text(x+238,212,'↗',16,v[3],700,'text-anchor="middle"')+text(x+86,231,v[2],12,v[3],600)});
 s+=rect(206,287,591,415)+panelTitle(228,320,'Alert queue','Select an event to inspect its evidence')+pill(687,302,90,'8 OPEN',C.cyan)+line(207,347,796,347)+label(228,372,'Alert')+label(493,372,'Source')+label(673,372,'Priority');
 const rows=[['Unusual sign-in','10.0.2.18','HIGH'],['Repeated requests','10.0.3.42','MEDIUM'],['New administrator token','10.0.1.27','MEDIUM'],['Blocked connection','10.0.2.55','LOW']];
 rows.forEach((v,i)=>{let y=405+i*67;if(i===0)s+=rect(219,y-21,563,54,'#1d3547','#345b6b',7);s+=circle(239,y-3,5,i===0?C.rose:C.blue)+text(253,y+1,v[0],14,C.text,650)+text(493,y+1,v[1],13,C.muted,500,'font-family="Consolas, monospace"')+text(673,y+1,v[2],11,i===0?C.rose:C.gold,700)+line(228,y+32,775,y+32,'#273a4d')});
 s+=rect(813,287,351,415)+panelTitle(835,320,'Alert details','Unusual sign-in activity')+pill(1040,301,101,'HIGH',C.rose)+line(814,347,1163,347)+label(835,378,'Source address')+text(835,405,'10.0.2.18',20,C.cyan,700,'font-family="Consolas, monospace"')+label(835,445,'Event timeline');
 [['09:18','Multiple sign-in failures'],['09:21','Successful sign-in'],['09:24','New session created']].forEach((v,i)=>{let y=478+i*44;s+=circle(844,y-5,4,i===0?C.rose:C.cyan)+text(862,y,v[0],12,C.muted,600)+text(918,y,v[1],12,C.text,600)});
 s+=button(835,630,150,'Inspect evidence',C.cyan)+text(1004,655,'Mark for review',12,C.muted,650);
 return shell('Security operations desk','Investigate alerts and identify the activity that needs attention.',['Alert queue','Investigations','Evidence','Playbooks'],0,C.cyan,s,'SOC SIM');
})();

const redteam = (()=>{
 let s=rect(206,170,958,135)+panelTitle(228,200,'Engagement progress','Follow an approved assessment from planning to reporting');
 const phases=[['01','Scope'],['02','Recon'],['03','Test'],['04','Report']];phases.forEach((v,i)=>{let x=248+i*220;if(i<3)s+=line(x+105,248,x+198,248,i===0?C.rose:'#40536a',3);s+=circle(x,248,20,i===0?'#553849':'#213449',i===0?C.rose:'#40536a')+text(x,253,v[0],12,i===0?C.rose:C.muted,700,'text-anchor="middle"')+text(x+32,253,v[1],13,C.text,650)});
 s+=rect(206,321,402,381)+panelTitle(228,352,'Engagement brief','A fictional assessment with agreed boundaries')+pill(464,334,122,'APPROVED',C.rose)+line(207,377,607,377)+label(228,409,'Objective')+text(228,435,'Assess a public-facing service',16,C.text,700)+text(228,460,'Identify weaknesses and document their impact.',12,C.muted)+label(228,502,'In scope')+pill(228,518,111,'Web app',C.rose)+pill(348,518,118,'Public API',C.rose)+label(228,587,'Rules of engagement')+text(228,613,'✓  Work within the agreed window',13,C.muted,600)+text(228,638,'✓  Record evidence for the report',13,C.muted,600)+text(228,663,'✓  Stop if service stability is affected',13,C.muted,600);
 s+=rect(624,321,540,381)+panelTitle(646,352,'Choose your next step','Start with a safe, scoped activity')+line(625,377,1163,377);
 [['A','Review the public footprint','Gather information available to everyone.'],['B','Inspect an exposed service','Confirm what is reachable within scope.'],['C','Document the findings','Record evidence and business impact.']].forEach((v,i)=>{let y=396+i*76;s+=rect(644,y,499,63,i===0?'#3a2d3f':'#1a2a3c',i===0?C.rose:'#33485b',8)+circle(670,y+31,15,i===0?'#5a3a4a':'#293b4c')+text(670,y+36,v[0],12,i===0?C.rose:C.muted,700,'text-anchor="middle"')+text(695,y+25,v[1],14,C.text,700)+text(695,y+45,v[2],12,C.muted)});
 s+=button(645,646,148,'Continue phase',C.rose)+text(816,671,'Step 1 of 4',12,C.muted,600);
 return shell('Red team engagement','Work through the phases of a controlled security assessment.',['Brief','Planning','Execution','Report'],1,C.rose,s,'SCENARIO');
})();

const risk = (()=>{
 let s=rect(206,170,397,338)+panelTitle(228,201,'Scenario inputs','Estimate the potential cost of a security incident')+line(207,226,602,226);
 [['Asset value','$50,000'],['Exposure factor','40%'],['Annual occurrence rate','0.25'],['Safeguard cost','$2,000']].forEach((v,i)=>{let y=261+i*52;s+=text(228,y,v[0],13,C.muted,600)+rect(426,y-23,154,34,'#1b2b3d','#344a5d',6)+text(444,y,v[1],14,C.text,700)});
 s+=rect(619,170,545,338)+panelTitle(642,201,'Annual loss estimate','Compare the cost of risk with the proposed safeguard')+pill(1007,182,134,'CALCULATED',C.gold)+line(620,226,1163,226);
 s+=label(642,266,'Expected annual loss')+text(642,313,'$5,000',40,C.text,800)+text(642,341,'before applying a safeguard',13,C.muted)+label(642,390,'Annual risk exposure')+bar(642,410,453,.72,C.gold)+text(642,447,'Estimated loss',12,C.muted)+text(1095,447,'$5,000',13,C.gold,700,'text-anchor="end"');
 s+=rect(206,524,958,178)+panelTitle(228,556,'Make the decision','Compare the options using the estimated annual loss');
 [['A','Implement safeguard','$2,000 control cost'],['B','Accept the risk','$5,000 expected loss'],['C','Compare options','Review the trade-off']].forEach((v,i)=>{let x=228+i*302;s+=rect(x,590,286,91,i===0?'#3a342c':'#1b2a3b',i===0?C.gold:'#34495d',8)+circle(x+23,615,12,i===0?'#5c4a31':'#2b3d50')+text(x+23,619,v[0],10,i===0?C.gold:C.muted,700,'text-anchor="middle"')+text(x+45,617,v[1],14,C.text,700)+text(x+45,645,v[2],12,C.muted)});
 return shell('Risk management','Use a simple scenario to weigh expected loss and control cost.',['Scenario','Calculate','Decision','Results'],1,C.gold,s,'RISK EXERCISE');
})();

const threat = (()=>{
 let s=rect(206,170,958,92)+label(228,198,'Campaign progress')+text(228,230,'Round 02 of 05',18,C.text,700)+bar(445,214,535,.4,C.blue)+pill(1016,200,125,'240 POINTS',C.blue);
 s+=rect(206,278,958,188)+panelTitle(228,310,'The scenario','Read the observed activity and decide what to inspect next')+pill(1020,291,122,'ROUND 02',C.blue);
 s+=rect(228,341,914,92,'#1a2c41','#344a61',9)+circle(257,371,15,'#263f5c')+text(257,376,'!',16,C.blue,800,'text-anchor="middle"')+text(283,370,'A new scheduled task appears after an unexpected attachment is opened.',15,C.text,650)+text(283,400,'Choose the next step for this fictional investigation.',13,C.muted);
 s+=text(207,507,'Choose a response',19,C.text,700)+text(207,532,'Select one option to continue the exercise.',13,C.muted);
 [['A','Review task details','Inspect the command and account.'],['B','Isolate the endpoint','Limit potential follow-on activity.'],['C','Close the alert','End the review without further action.']].forEach((v,i)=>{let x=206+i*324;s+=rect(x,552,310,150,i===0?'#1c3651':'#152338',i===0?C.blue:'#304459',10)+circle(x+28,583,15,i===0?'#315579':'#263a50')+text(x+28,588,v[0],12,i===0?C.blue:C.muted,800,'text-anchor="middle"')+text(x+52,588,v[1],15,C.text,700)+text(x+20,622,v[2],12,C.muted)+text(x+20,674,i===0?'SELECTED  ✓':'SELECT OPTION  →',10,i===0?C.blue:C.faint,700,'letter-spacing=".6"')});
 return shell('Threat emulation challenge','Follow a fictional intrusion and respond at each stage.',['Campaign','Initial access','Discovery','Review'],2,C.blue,s,'SCENARIO');
})();

const vuln = (()=>{
 let s=rect(206,170,958,225)+panelTitle(228,201,'Application map','Explore the routes in a fictional practice application')+pill(1000,182,142,'PRACTICE APP',C.gold)+grid(227,223,914,151);
 [['01','Sign in','Entry point'],['02','Profile','User data'],['03','Records','Protected data']].forEach((v,i)=>{let x=245+i*297;if(i<2)s+=line(x+228,298,x+297,298,C.gold,2,'stroke-dasharray="6 5"');s+=rect(x,255,228,88,'#1c2b3c','#405166',8)+circle(x+27,284,13,'#4b4032')+text(x+27,288,v[0],10,C.gold,700,'text-anchor="middle"')+text(x+50,284,v[1],15,C.text,700)+text(x+50,309,v[2],12,C.muted)});
 s+=rect(206,411,428,291)+panelTitle(228,442,'Findings','Select a finding to view its evidence')+pill(515,424,96,'3 ITEMS',C.gold)+line(207,466,633,466);
 [['Input validation gap','MEDIUM'],['Weak session handling','MEDIUM'],['Exposed sample record','LOW']].forEach((v,i)=>{let y=490+i*58;if(i===0)s+=rect(220,y-12,400,47,'#383428','#6f5e3c',7);s+=circle(239,y+10,5,i===0?C.gold:C.faint)+text(253,y+15,v[0],13,C.text,650)+text(596,y+15,v[1],10,i===0?C.gold:C.muted,700,'text-anchor="end"')});
 s+=rect(650,411,514,291)+panelTitle(672,442,'Finding detail','Input validation gap')+pill(1031,424,111,'MEDIUM',C.gold)+line(651,466,1163,466)+label(672,495,'What was observed')+text(672,520,'A sample form accepts unexpected input.',14,C.text,600)+text(672,545,'The exercise demonstrates why validation matters.',12,C.muted)+label(672,588,'Suggested mitigation')+text(672,613,'Validate input on the server and handle errors safely.',13,C.text,600)+button(672,645,132,'View evidence',C.gold);
 return shell('Vulnerability walkthrough','Explore a fictional application and review example findings.',['Application map','Input review','Findings','Recommendations'],2,C.gold,s,'PRACTICE');
})();

const files = {'assembly-emulator.svg':assembly,'network-architecture.svg':network,'threat-modeling.svg':stride,'soc-alert-triage.svg':soc,'red-team-engagement.svg':redteam,'risk-management.svg':risk,'threat-emulation.svg':threat,'vulnerability-walkthrough.svg':vuln};
for (const [name, svg] of Object.entries(files)) fs.writeFileSync(path.join(out, name), svg, 'utf8');
console.log(`Created ${Object.keys(files).length} concept images in ${out}`);

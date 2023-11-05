
const os = require('os');

let platform = os.platform();
let osType = os.type();
let release = os.release();
let architecture = os.arch();

// console.log('Platform:', os.platform());
// console.log('OS Type:', os.type());
// console.log('Release:', os.release());
// console.log('Architecture:', os.arch());

let totalMemory = os.totalmem();
// console.log('Total Memory (bytes):', totalMemory);
// totalMemory /= 1024;
// console.log(`Total Memory (KB): ${totalMemory}`);
// totalMemory /= 1024;
// console.log(`Total Memory (MB): ${totalMemory}`);
// totalMemory /= 1024;
// console.log(`Total Memory (GB): ${totalMemory}`);

let freeMemory = os.freemem();
// console.log('Free Memory (bytes):', freeMemory);
// freeMemory /= 1024;
// console.log(`Free Memory (KB): ${freeMemory}`);
// freeMemory /= 1024;
// console.log(`Free Memory (MB): ${freeMemory}`);
// freeMemory /= 1024;
// console.log(`Free Memory (GB): ${freeMemory}`);


let cpus = os.cpus();

// console.log('CPUs:', cpus);


// console.log('Number of CPUs:', os.cpus().length);
// console.log('Home Directory:', os.homedir());

let homedir = os.homedir();
let hostname = os.hostname(); 
let networkInterfaces = os.networkInterfaces();

// console.log('Temp Directory:', os.tmpdir());
// console.log('Network Interfaces:', os.networkInterfaces());


// console.log('Endianness:', os.endianness());
// console.log('Load Average:', os.loadavg());
// //get uptime in hours, minutes, seconds
// let uptime = os.uptime();
// let hours = Math.floor(uptime / 3600);
// uptime %= 3600;
// let minutes = Math.floor(uptime / 60);
// let seconds = uptime % 60;
// console.log(`Server Uptime: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
console.log('User Info:', os.userInfo());

module.exports = { platform, osType, release, architecture, totalMemory, freeMemory, cpus, homedir, hostname, networkInterfaces };
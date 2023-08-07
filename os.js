const os = require('os')

 const getOsName = () => os.type()

 const getFreeMemoryPercentage = () =>{
 return os.freemem()/os.totalmem()
} 

const getUptimeInMinutes = () => Math.round(os.uptime() / 60) 


console.log("osName",getOsName())
console.log("free",getFreeMemoryPercentage())
console.log("uptime",getUptimeInMinutes())
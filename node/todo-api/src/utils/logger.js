import winston, { format } from "winston";

// export function info(text){
// console.log(`[${newDate().toISOString()}]  [INFO] ${text}\n`);
// }

// export function error(text,err){
// if (err) {
      // console.log(`[${newDate().toISOString()}]  [ERROR] ${text}\n ${err.toString}`);  
    // }
// console.log(`[${newDate().toISOString()}]  [INFO] ${text}\n`);
// }

// export function debug(text,params){
// console.log(`[${newDate().toISOString()}]  [INFO] ${text}\n ${JSON.stringify(params)}\n`);
// }

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export default logger;

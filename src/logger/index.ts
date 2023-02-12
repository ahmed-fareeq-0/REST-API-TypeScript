import  Logger  from "pino";
import dayjs from "dayjs";

const log = Logger({
    transport: {
        target: 'pino-pretty'
      },
    timestamamb: () => `,"time":${dayjs().format()}`
})

export default log
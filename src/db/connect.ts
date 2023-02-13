import mongoose from "mongoose"
import config from "config"
import log from "../logger"

// type conn = {
//     useNewUrlParser: boolean,
//         useUnifiedTopology: boolean,
// }

function connect() {
    const dbURI = config.get("dbURI") as string;
    return mongoose.connect(dbURI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }).then(() => {
        log.info("connected")
    }).catch((err) => {
        log.error(err)
    })
}

export default connect
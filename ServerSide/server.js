const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const { platform, osType, release, architecture, totalMemory, freeMemory, cpus, homedir, hostname, networkInterfaces,getDiskSpaceInfo, userInfo } = require("./osInfo.js")

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "..", "Static")));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get("/", async (req, res) => {
    var template = {
        platform: platform,
        osType: osType,
        release: release,
        architecture: architecture,
        totalMemory: totalMemory,
        freeMemory: freeMemory,
        cpus: cpus,
        homedir : homedir,
        hostname : hostname,
        networkInterfaces : networkInterfaces,
        diskInfo : await getDiskSpaceInfo(),
        userInfo : userInfo
    }
    res.render(path.join(__dirname, "..", "ClientSide", "index.ejs"),template)
})
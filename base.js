var fs = require('fs');

// function to encode file data to base64 encoded string
exports.base64Encode = function (file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    const base64 =  Buffer.from(bitmap).toString('base64');
    return base64;
}

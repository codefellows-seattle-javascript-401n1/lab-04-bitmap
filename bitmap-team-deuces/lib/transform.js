'use strict';

module.exports = function(colorTable, callback) {
  let prevIndex = 0;
  const increment = 4;

  if (!Buffer.isBuffer(colorTable)) {
    return callback(new Error('no buffer provided'));
  }

  for (let i = increment; i < colorTable.length + 1; i += increment){
    const buf = colorTable.slice(prevIndex, i);
    for (var g =0; g < buf.length; g++){
      buf[g] = 255 - buf[g]; //use readUInt8
    }
    prevIndex = i;
  }
  callback(null, colorTable);
};

const path = require('path');
const util = require('util');

const storageFileUpload = async (file) => {
  const fileName = file.name;
  const size = file.data.length;
  const extension = path.extname(fileName);
  const allowedExtensions = /png|jpg/;
  if (!allowedExtensions.test(extension)) throw 'Unsupported extension!';
  if (size > 5000000) throw 'File must be less than 5MB!';
  const md5 = file.md5;
  const URL = '/photo' + md5 + extension;
  await util.promisify(file.mv)('./public' + URL);
  return URL;
};

module.exports = storageFileUpload;

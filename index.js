const fs = require('fs');
const request = require('request');

/**
 * 
 * @param {string} token ESOUI access token
 * @param {number} addonId ESOUI addon ID number
 * @param {string | number} version Version of addon being published
 * @param {string} description Text to display on the main page
 * @param {string} changelog Text to display in the changelog
 * @param {string | number} compatibility Game version supported. Use comma separated list for multiple compatibilities
 * @param {string} updatefile Optional: Location of the update file
 * 
 */
function updateEsoui(token, addonId, version, description, changelog, compatibility, updatefile) {
  const formData = {
    id: addonId,
    version: version,
    description: description,
    changelog: changelog,
    compatible: compatibility
  };

  if (updatefile) {
    console.log(`Attaching ${updatefile}`);
    formData.updatefile = fs.createReadStream(updatefile);
  } else {
    console.log('No update file provided');
  }

  return new Promise((resolve, reject) => request.post({ headers: { 'x-api-token': token }, url: 'https://api.esoui.com/addons/update', formData: formData },
    (error, httpResponse, body) => {
      if (error) {
        reject(error);
      }
      
      if (httpResponse.statusCode - 200 > 100) {
        reject(httpResponse.statusMessage);
      } 

      console.log(`esoui-publish success.\n${body}`);
      resolve(body);
    }));
}

module.exports = updateEsoui;
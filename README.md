# esoui-publish
A simple node utility that will publish addons to [ESOUI](https://www.esoui.com/community.php). You need an access token. They can be generated [here on ESOUI](https://www.esoui.com/downloads/filecpl.php?action=apitokens). Tokens are like passwords. Make sure to keep them secure.

`npm install esoui-publish`

```javascript
const esouiPublish = require('esoui-publish');
const token = 'Your token'; //https://www.esoui.com/downloads/filecpl.php?action=apitokens
const addonId = 0; // This is the id of the addon you want to update.
const version = '1.0.0'; // The version of your addon
const description = 'This is the text that will show on your main page';
const changelog = 'This is the text that will show on your changelog';
const compatibility = '4.3'; // The game version your addon supports.
const updateFile = './my-addon.zip'; // Optional: Location of the upload package
esouiPublish(token, addonId, version, description, changelog, compatibility, updateFile);
```
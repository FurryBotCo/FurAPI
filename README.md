This module is a combination of multiple apis, namely:<br>
<br>
https://npmjs.org/packages/furrybotapi<br>
https://npmjs.org/packages/e6api<br>
https://npmjs.org/packages/e9api<br>
https://npmjs.org/packages/foxapi<br>
https://npmjs.org/packages/sheriapi (not made yet)<br>
https://npmjs.org/packages/inkbunnyapi (not made yet)<br>
https://npmjs.org/packages/chewybotapi (not made yet)<br>
<br>
go to them for their separate documentation, the apis can be used as follows:
```js
const FurAPI = require("furapi");

// FurryBotAPI: FurAPI.FurryBotAPI
// E6API: FurAPI.E6API
// E9API: FurAPI.E9API
// FoxAPI: FurAPI.FoxAPI
// SheriAPI: FurAPI.SheriAPI
// InkBunnyAPI: FurAPI.InkBunnyAPI
// ChewyBotAPI: FurAPI.ChewyBotAPI

// or
const { FurryBotAPI, E6API, E9API, FoxAPI, SheriAPI, InkBunnyAPI, ChewyBotAPI } = require("furapi");
```

This module includes typings, so yes, it can be used in typescript.
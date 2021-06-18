# NekoLife

Nekolife is a wrapper around [nekos.life](https://nekos.life/) API.


## Base Url
```http
  https://nekos.life/api/v2
```

## Installation
```sh
## Npm
npm install nekolife

# Yarn
yarn add nekolife
```

### Example

```js
const { Neko } = require("nekolife");
const neko = new Neko();

/**
 * Example Sfw
 */
neko.sfw("hug").then(x => {
    console.log(x); // Returns a URL
});

neko.sfw("waifu").then(x => {
    console.log(x); // Returns a URL
});
/**
 * Example Nsfw
 */
neko.nsfw("hentai").then(x => {
    console.log(x); // Returns a URL
});

neko.nsfw("neko").then(x => {
    console.log(x); // Returns a URL
});

/**
 * Example Text
 */
neko.text("8ball", { url: true }).then(x => {
    console.log(x) // Returns a URL
});

neko.text("OwOify", { text: "I love OwO"}).then(x => {
    console.log(`8ball (Got no ball) : ${x}`); // Returns a Text
});

neko.text("spoiler", { text: "Hey I'm very pog"}).then(x => {
    console.log(x); // Returns a Text
});

neko.text("8ball").then(x => {
    console.log(x); // Returns a Text
});

neko.text("catText").then(x => {
    console.log(x); // Returns a Emoticon
})
```

## Documentation

There are no docs for this package but we sure going to bring something for reference.

## Support

You can join my discord server:
```https
https://discord.gg/WZqgSgGCAx
```

import { sfw, nsfw, text } from "../endpoint.json";
import { get as fetch } from "superagent";

export default interface Neko {

    sfw(type: "smug"): Promise<string>;
    sfw(type: "baka"): Promise<string>;
    sfw(type: "slap"): Promise<string>;
    sfw(type: "poke"): Promise<string>;
    sfw(type: "pat"): Promise<string>;
    sfw(type: "hug"): Promise<string>;
    sfw(type: "neko"): Promise<string>;
    sfw(type: "nekoGif"): Promise<string>;
    sfw(type: "meow"): Promise<string>;
    sfw(type: "lizard"): Promise<string>;
    sfw(type: "kiss"): Promise<string>;
    sfw(type: "foxGirl"): Promise<string>;
    sfw(type: "feed"): Promise<string>;
    sfw(type: "cuddle"): Promise<string>;
    sfw(type: "kemonomimi"): Promise<string>;
    sfw(type: "holo"): Promise<string>;
    sfw(type: "woof"): Promise<string>;
    sfw(type: "wallpaper"): Promise<string>;
    sfw(type: "goose"): Promise<string>;
    sfw(type: "gecg"): Promise<string>;
    sfw(type: "avatar"): Promise<string>;
    sfw(type: "waifu"): Promise<string>;
    sfw(type: "why"): Promise<string>;
    sfw(type: "fact"): Promise<string>;

    nsfw(type: "randomHentaiGif"): Promise<string>;
    nsfw(type: "pussy"): Promise<string>;
    nsfw(type: "nekoGif"): Promise<string>;
    nsfw(type: "neko"): Promise<string>;
    nsfw(type: "lesbian"): Promise<string>;
    nsfw(type: "kuni"): Promise<string>;
    nsfw(type: "cumsluts"): Promise<string>;
    nsfw(type: "kuni"): Promise<string>;
    nsfw(type: "cumsluts"): Promise<string>;
    nsfw(type: "classic"): Promise<string>;
    nsfw(type: "boobs"): Promise<string>;
    nsfw(type: "bK"): Promise<string>;
    nsfw(type: "anal"): Promise<string>;
    nsfw(type: "avatar"): Promise<string>;
    nsfw(type: "yuri"): Promise<string>;
    nsfw(type: "trap"): Promise<string>;
    nsfw(type: "tits"): Promise<string>;
    nsfw(type: "girlSoloGif"): Promise<string>;
    nsfw(type: "girlSolo"): Promise<string>;
    nsfw(type: "pussyWankGif"): Promise<string>;
    nsfw(type: "pussyArt"): Promise<string>;
    nsfw(type: "kemononimi"): Promise<string>;
    nsfw(type: "kitsune"): Promise<string>;
    nsfw(type: "keta"): Promise<string>;
    nsfw(type: "holo"): Promise<string>;
    nsfw(type: "holoEro"): Promise<string>;
    nsfw(type: "hentai"): Promise<string>;
    nsfw(type: "futanari"): Promise<string>;
    nsfw(type: "femdom"): Promise<string>;
    nsfw(type: "feetGif"): Promise<string>;
    nsfw(type: "eroFeet"): Promise<string>;
    nsfw(type: "feet"): Promise<string>;
    nsfw(type: "ero"): Promise<string>;
    nsfw(type: "eroKitsune"): Promise<string>;
    nsfw(type: "eroKemonomimi"): Promise<string>;
    nsfw(type: "eroNeko"): Promise<string>;
    nsfw(type: "eroYuri"): Promise<string>;
    nsfw(type: "cumArts"): Promise<string>;
    nsfw(type: "blowJob"): Promise<string>;
    nsfw(type: "spank"): Promise<string>;
    nsfw(type: "gasm"): Promise<string>;


    text(type: "OwOify", query: { text: string }): Promise<string>;
    text(type: "8ball", query: { url: boolean }): Promise<string>;
    text(type: "catText", query: { text: string }): Promise<string>;
    text(type: "spoiler", query: { text: string }): Promise<string>;
};

export default class Neko {

    private url: string;
    private fetch;

    public constructor() {

        this.url = "https://nekos.life/api/v2";
        this.fetch = fetch;
    };
    /**
     * @param {String} type
     */
    public async sfw(type: string): Promise<string> {

        try {
            const { body } = await fetch(this.url + sfw[type]);

            return body.url;

        } catch (e) {
            throw new ReferenceError("Failed to fetch API. It could be the site is down or the provided value or endpoint is wrong.");
        };
    };

    public async nsfw(type: string) {

        try {
            const { body } = await fetch(this.url + nsfw[type]);

            return body.url;

        } catch (e) {
            throw new ReferenceError("Failed to fetch API. It could be the site is down or the provided value or endpoint is wrong.");
        };
    };

    public async text(type: string, query: Record<string, unknown>): Promise<string> {

        if (type === "OwOify") {

            let txt;

            if (query) {

                if (query.text) {
                    txt = query.text;
                } else {
                    txt = undefined;
                };
            };

            if (txt === undefined) {
                txt = "You forgot to give a text";
            };

            try {

                const { body } = await fetch(this.url + text[type] + `${txt}`);

                return body.owo;

            } catch (e) {
                throw new ReferenceError(`Failed to fetch API. It could be the site is down or the provided value or endpoint is wrong.`);
            };
        };

        if (type === "8ball") {
            try {

                const { body } = await fetch(this.url + text[type]);

                if (query !== undefined) {

                    if (query.url === true) {
                        return body.url;
                    };
                };

                return body.response;

            } catch (e) {
                throw new ReferenceError(`Failed to fetch API. It could be the site is down or the provided value or endpoint is wrong.`);
            };
        };

        if (type === "catText") {
            try {

                const { body } = await fetch(this.url + text[type]);

                return body.cat;

            } catch (e) {
                throw new ReferenceError(`Failed to fetch API. It could be the site is down or the provided value or endpoint is wrong.`);
            };
        };

        if (type === "spoiler") {

            let txt;

            if (query) {

                if (query.text) {
                    txt = query.text;
                } else {
                    txt = undefined;
                };
            };

            if (txt === undefined) {
                txt = "You forgot to give a text";
            };

            try {

                const { body } = await fetch(this.url + text[type] + `${txt}`);

                return body.owo;

            } catch (e) {
                throw new ReferenceError(`Failed to fetch API. It could be the site is down or the provided value or endpoint is wrong.`);
            };
        };
    };
};


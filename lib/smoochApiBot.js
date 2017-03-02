'use strict';

const Bot = require('./bot');

class SmoochApiBot extends Bot {
    constructor(options) {
        super(options);

        this.name = options.name;
        this.avatarUrl = options.avatarUrl;
    }

    send(content) {
        const api = this.store.getApi();
        const message = Object.assign(content, {
            role: 'appMaker',
            name: this.name,
            avatarUrl: this.avatarUrl
        });
        return api.appUsers.sendMessage(this.userId, message);
    }

    say(text, actions) {
        const api = this.store.getApi();
        let message = Object.assign({
            text,
            actions: actions,
            role: 'appMaker'
        }, {
            name: this.name,
            avatarUrl: this.avatarUrl
        });
        return api.appUsers.sendMessage(this.userId, message);
    }
}

module.exports = SmoochApiBot;

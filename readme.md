# build team invite scraper

A scraper of build team invites for use on the main Discord bot. You probably won't find this script very useful, but it's open-sourced because open source is cool.

## Installation and Usage

**Only use this script if entirely necessary. Check [`data.yml`](data.yml) for the result as executed on March 1st, 2021.**

    $ git clone BuildTheEarth/build-team-invite-scraper
    $ node build-team-invite-scraper/src/index.js

After scraping the list, you'll probably need to do some [manual clean-up](https://github.com/BuildTheEarht/build-team-invite-scraper/commit/dc548cd0) because team owners are apparently very bad at consistently naming their teams :).

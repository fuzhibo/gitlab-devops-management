import * as needle from 'needle';

// The module 'requests' implementation a HTTP request operator class
export namespace HttpClient {
    export class Requests {

        constructor() {
            console.log("Requests initialize...");
        }

        // do some implementation
        public get(url: string, options: any = undefined) {
            console.log("Begin to do GET request for " + url + " ...");
            var resp = needle('get', url, options);
            return resp;
        }

        public post() {
            console.log("Begin to do POST request...");
        }

        public put() {
            console.log("Begin to do PUT request...");
        }

        public delete() {
            console.log("Begin to do DELETE request...");
        }
    }
}

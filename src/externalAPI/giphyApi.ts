import { apiBase } from '../serviceFramework/apiBase';
import { Status } from '../interface/Status';
const axios = require('axios');

export class giphyApi extends apiBase {

    constructor() {
        super();
    }

    public async geGiphy(giphyName: string): Promise<any> {
        try {
            if (!giphyName) return this.error(Status.FAILED, 'giphyName is NULL');
            const url = `http://api.giphy.com/v1/gifs/search?q=${giphyName}&api_key=G2je51B0zF37otjuxl9yqBhIgtoGrGPW&limit=1`;
            console.log(url)
            const result = await axios.get(url)
                .then(function (response) {
                    // handle success
                    return response['data'];
                })
                .catch(function (error) {
                    // handle error
                    throw error;
                });

            return this.sucess(result);
        } catch (ex) {
            throw ex.message;
        }

    }
}

import { apiBase } from '../serviceFramework/apiBase';
import { Status } from '../interface/Status';

const axios = require('axios');

export class giphyApi extends apiBase {

    constructor() {
        super();
    }

    public async getGiphyUrl(giphyName: string): Promise<any> {
        try {
            if (!giphyName) return this.error(Status.FAILED, 'giphyName is NULL');
            const url = `${process.env.GIPHY_API}${giphyName}&api_key=${process.env.GIPHY_API_KEY}&limit=1`;
            const result = await axios.get(url)
                .then(response => response['data'])
                .catch(error => { throw error; });

            return this.sucess(result);
        } catch (ex) {
            const isFailed = ex.message.search('failed');
            if (isFailed > -1) return this.error(Status.FAILED, 'sorry, api giphy service is not available ');
            return this.criticalError(ex.message);
        }

    }
}

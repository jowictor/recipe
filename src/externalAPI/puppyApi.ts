import { apiBase } from '../serviceFramework/apiBase';
import { Status } from '../interface/Status';
const axios = require('axios');

export class puppyApi extends apiBase {

    constructor() {
        super();
    }

    public async getRecipesList(ingredientList: string[]): Promise<any> {
        try {
            if (!ingredientList) return this.error(Status.FAILED, 'ingredientList is NULL');

            const url = `http://www.recipepuppy.com/api/?i=${ingredientList}`;
            const result = await axios.get(url)
                .then(response => response['data'])
                .catch(error => { throw error; });

            return this.sucess(result);
        } catch (ex) {
            const isFailed = ex.message.search('failed');
            if (isFailed > -1) return this.error(Status.FAILED, 'sorry, recipepuppy service is not available ');
            return this.criticalError(ex.message);
        }

    }
}

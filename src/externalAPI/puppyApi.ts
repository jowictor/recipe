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

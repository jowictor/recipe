import { apiBase } from '../serviceFramework/apiBase';
const axios = require('axios');

export class puppyApi extends apiBase {

    constructor() {
        super();
    }

    public async getRecipesList(ingredientList: Array<String>): Promise<any> {
        try {
            if (!ingredientList) throw this.error(400, 'ingredientList is NULL');
            if (ingredientList.length < 3) throw this.error(400, 'ingredientList parameters is missing');
            const url = `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`
            const result = await axios.get(url)
                .then(function (response) {
                    // handle success
                    return response['data'];
                })
                .catch(function (error) {
                    // handle error
                    throw error;
                })

            return result;
        } catch (ex) {
            throw ex.message;
        }

    }
}

import { apiBase } from '../serviceFramework/apiBase';


export class recipeService extends apiBase {
   
    constructor() {
        super();
    }

    public async getRecipeList(): Promise<any> {
        try {
           

        } catch (ex) {
            console.log(`exception to getRecipeList : ${ex}`)
            throw this.criticalError(ex.message);
        }
    }
}


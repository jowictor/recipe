import { apiBase } from '../serviceFramework/apiBase';
import { puppyApi } from '../externalAPI/puppyApi';
import { returnModel } from '../model/returnModel';
import { Status } from '../interface/Status';

export class recipeService extends apiBase {

    constructor() {
        super();
    }

    public async getRecipeList(recipeList: string[]): Promise<any> {
        try {
            if (!recipeList) return this.error(Status.FAILED, 'recipeList params in getRecipeList is null');
            const puppyService = new puppyApi();
            const result: returnModel = await puppyService.getRecipesList(recipeList);
            if (!result || result.$status != Status.SUCCESS) return this.error(result.$status, result.$message);
            return this.sucess(result);
        } catch (ex) {
            console.log(`exception to getRecipeList : ${ex}`);
            throw this.criticalError(ex.message);
        }
    }
}

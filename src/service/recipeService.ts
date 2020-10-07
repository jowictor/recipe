import { apiBase } from '../serviceFramework/apiBase';
import { puppyApi } from '../externalAPI/puppyApi';
import { giphyApi } from '../externalAPI/giphyApi';
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

            const recipeContent = result.$data['results'];
            const recipes = [];

            for (const recipeItem of recipeContent) {
                const giphyContent: returnModel = await this.getGiphyUrl(recipeItem['title']);
                const giphyUrl = (giphyContent && giphyContent.$data) ? giphyContent.$data['data'][0]['url'] : null;
                const ingredientList = recipeItem['ingredients'].split(',').map(item => item.trim());

                recipes.push({
                    title: recipeItem['title'],
                    ingredients: ingredientList.sort((a, b) => a.localeCompare(b)),
                    link: recipeItem['href'],
                    gif: giphyUrl
                });
            }

            return this.sucess({ keywords: recipeList, recipes });
        } catch (ex) {
            console.log(`exception to getRecipeList : ${ex}`);
            throw this.criticalError(ex.message);
        }
    }

    public async getGiphyUrl(giphyName: string): Promise<any> {
        try {
            if (!giphyName) return this.error(Status.FAILED, 'giphyName is null');

            const giphyService = new giphyApi();
            const result: returnModel = await giphyService.getGiphyUrl(giphyName);
            if (!result || result.$status != Status.SUCCESS) return this.error(result.$status, result.$message);
            return this.sucess(result.$data);
        } catch (ex) {
            console.log(`exception to getGiphy : ${ex}`);
            throw this.criticalError(ex.message);
        }
    }
}

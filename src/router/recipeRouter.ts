import { Router, Request, Response } from 'express';
import { recipeService } from '../service/recipeService';
import { IReturnServiceFramework } from '../interface/IReturnServiceFramework';

export class recipeRouter {
    public router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    public async getRecipesListPublic(req: Request, res: Response) {
        try {

            const reqParams = Object.keys(req.params).map(paramsItem => req.params[paramsItem]).filter(item => item);
            const repository = new recipeService();
            const result: IReturnServiceFramework = await repository.getRecipeList(reqParams);
            res.send(result);

        } catch (ex) {
            res.send(ex);
        }
    }

    public init() {
        this.router.get('/:ingredient_1/:ingredient_2?/:ingredient_3?', this.getRecipesListPublic);
    }
}

const recipeRouterObj = new recipeRouter();
recipeRouterObj.init();

export default recipeRouterObj.router;

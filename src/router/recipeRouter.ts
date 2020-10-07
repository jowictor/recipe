import { Router, Request, Response, NextFunction } from 'express';
import { recipeService } from '../service/recipeService';
import { IReturnServiceFramework } from '../interface/IReturnServiceFramework';

export class recipeRouter {
    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }

    public async getRecipesListPublic(req: Request, res: Response) {
        try {
            const repository = new recipeService();
            const result: IReturnServiceFramework = await repository.getRecipeList();
            res.send(result);

        } catch (ex) {
            res.send(ex);
        }
    }

    init() {
        this.router.get('/recipes/:teste', this.getRecipesListPublic);

    }
}

const recipeRouterObj = new recipeRouter();
recipeRouterObj.init();


export default recipeRouterObj.router;
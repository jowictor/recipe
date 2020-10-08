import { assert } from 'chai';
import { recipeService } from '../src/service/recipeService';
import { Status } from '../src/interface/Status';
require('dotenv').config({ path: 'config/.env' });
const recipeServ = new recipeService();

describe('Recipe Service tests', async () => {

    it('Test recipepuppy ', async () => {

        assert(recipeServ);
        const rc = await recipeServ.getRecipeList(['onions', 'garlic', 'omelet']);
        const recipeContent = rc.$data;
        assert.equal(rc.$status, Status.SUCCESS);

        assert.equal(rc.$message, 'Success');
        assert.isObject(recipeContent);
        assert.isArray(recipeContent.keywords);
        assert.operator(recipeContent.keywords.length, '>', '0');
        assert.isArray(recipeContent.recipes);
        assert.operator(recipeContent.recipes.length, '>', '0');
        assert.operator(Object.keys(recipeContent.recipes[0]).length, '==', '4');

    });
});

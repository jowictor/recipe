import { IReturnServiceFramework } from '../interface/IReturnServiceFramework';
import { returnModel } from '../model/returnModel';


export class apiBase {
    private apiBaseResult: returnModel;

    constructor() {
        this.apiBaseResult = new returnModel();
    }

    public sucess(content: any): IReturnServiceFramework {

        this.apiBaseResult.$message = 'Success'
        this.apiBaseResult.$data = content;
        this.apiBaseResult.$status = 200;

        return this.apiBaseResult
    }

    public error(statusCode: Number, msg: string): IReturnServiceFramework {

        this.apiBaseResult.$message = msg;
        this.apiBaseResult.$data = null;
        this.apiBaseResult.$status = statusCode;
        return this.apiBaseResult
    }

    public criticalError(error: any): IReturnServiceFramework {
        this.apiBaseResult.$message = 'Internal Server Error';
        this.apiBaseResult.$data = error;
        this.apiBaseResult.$status = 500;
        return this.apiBaseResult
    }

}
import { IReturnServiceFramework } from '../interface/IReturnServiceFramework';
import { returnModel } from '../model/returnModel';
import { Status } from '../interface/Status';

export class apiBase {
    private apiBaseResult: returnModel;

    constructor() {
        this.apiBaseResult = new returnModel();
    }

    public sucess(content: any): IReturnServiceFramework {

        this.apiBaseResult.$message = 'Success';
        this.apiBaseResult.$data = content;
        this.apiBaseResult.$status = Status.SUCCESS;

        return this.apiBaseResult;
    }

    public error(statusCode: number, msg: string): IReturnServiceFramework {

        this.apiBaseResult.$message = msg;
        this.apiBaseResult.$data = null;
        this.apiBaseResult.$status = statusCode;
        return this.apiBaseResult;
    }

    public criticalError(error: any): IReturnServiceFramework {

        this.apiBaseResult.$message = 'Internal Server Error';
        this.apiBaseResult.$data = error;
        this.apiBaseResult.$status = Status.SERVER_ERROR;
        return this.apiBaseResult;
    }

}

export class returnModel {
    private message: string;
    private status: Number;
    private data: Object;

    constructor(){
        this.message = null;
        this.status = null;
        this.data = null;
    }

    public get $message(): string {
        return this.message;
    }
    public set $message(value: string) {
        this.message = value;
    }
    public get $status(): Number {
        return this.status;
    }
    public set $status(value: Number) {
        this.status = value;
    }
    public get $data(): Object {
        return this.data;
    }
    public set $data(value: Object) {
        this.data = value;
    }  
}
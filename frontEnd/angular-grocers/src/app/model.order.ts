export class Order{

    public user_id:string;
    public date_Ordered:Date;
    public date_Delivered:Date;
    public status:string;
    public number_Items:Number


    constructor(user_id:string, date_Ordered:Date, date_Delivered:Date, status:string, number_Items:Number){
        this.user_id = user_id;
        this.date_Ordered = date_Ordered;
        this.date_Delivered = date_Delivered;
        this.status = status;
        this.number_Items = number_Items; 

    }
}

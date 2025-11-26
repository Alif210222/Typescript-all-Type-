

class BankAccount{
    readonly userId:number;
    public userName: string;
    private userBalance : number;     //* Access modifire use kore  property modify kore fellam 
//*  private userBalance : number;

    constructor(userId:number, 
        userName:string,
        userBalance:number,
    ){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance:number){
        this.userBalance = this.userBalance + balance;
    }
}  

const alifBhaiAccount = new BankAccount(222,"Alif",30)

 alifBhaiAccount.addBalance(100)

 console.log(alifBhaiAccount)
import { Fertilizer } from "./Fertilizer";

export class AgroInvest
    {
          id! :      string;
          seasonName! :   string;
          investAmount! : string;
          productSpend!:    string;
          profitAmount!: string;
          lossAmount!: string;
          fertilizerId!: string;
          pesticideId!:string;
          userId!: string;
          cropId!: string;
          fertilizer!:Fertilizer

          constructor() {}
    }
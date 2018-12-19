export class auditprogram{
	constructor(
 		public ID: number,
    public BEGIN: any,
    public END: any,
    public OBJECTIVES: string,
    public SCOPE: string,
    public RESPONSABILITIES: string,
    public APPROVED: string,
    public RESOURCES: string,
    public OBSERVATION: string,
    public ENABLE: string,
    public IS_DELETE: string,
		public CREATED_AT: any,
		public UPDATED_AT: any,
		public CREATED_BY	: number,
		public UPDATED_BY: number){}
}

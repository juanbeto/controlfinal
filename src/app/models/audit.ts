export class audit{
	constructor(
    public ID: number,
    public ID_PROGRAM: number,
    public NAME: string,
    public OBJECTIVE: string,
    public ID_USER_MANAGER: number,
    public ID_USER_RESPONSIBLE: number,
    public DATE_BEGIN: any,
    public DATE_END: any,
    public SCOPE: string,
    public NAME_PROCESS: string,
    public CRITERIA: string,
    public OBSERVATIONS: string,
    public APPROVED: string,
    public GLOBAL: string,
    public NUMERALS: string,
    public MECI: string,
    public CLOSED: string,
		public CREATED_AT: any,
		public UPDATED_AT: any,
		public CREATED_BY	: number,
		public UPDATED_BY: number,
		public users: any
	){}
}

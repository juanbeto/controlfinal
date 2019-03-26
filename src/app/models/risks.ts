export class risks{
	constructor(
		public ID: number,
	 		public CODE: string,
	 		public ID_PROCESS: number,
			public ID_PERIOD: number,
	 		public NAME: string,
	 		public DESCRIPTION: string,
	 		public EFFECTS: string,
	 		public CAUSES: string,
	 		public CLASSIFICATION: number,
	 		public OBJECT: string,
	 		public FACTOR: string,
	 		public FACTORVULNERABILITY: string,
	 		public PROBABILITY: string,
	 		public CREATEBY: number,
	 		public CREATEDATE: any
){}
}

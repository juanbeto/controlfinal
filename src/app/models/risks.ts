export class risks{
	constructor(
 		public id: number,
 		public code: string,
 		public id_process: number,
 		public id_period: number,
 		public name: string,
 		public description: string,
 		public effects: string,
 		public causes: string,
 		public classification: number,
 		public object: string,
 		public factor: string,
 		public factorvulnerability: string,
 		public probability: string,
 		public createby: number,
 		public createdate: any){}
}

export class CabecaPage {
    private id: number;
    private service: string;
    private entrance: Date;
    private interviewed: string;
    private interviewer: string;
    private avaliation_date: Date;
    private created_at: Date;
    private updated_at: Date;
    private gerontologist: number;

    constructor (data: any = {}){
        this.service = data.service;
        this.entrance = data.entrance;
        this.interviewed = data.interviewed; 
        this.interviewer = data.interviewer; 
        this.avaliation_date = data.avaliation_date;
        this.created_at = data.created_at; 
        this.updated_at = data.updated_at; 
        this.gerontologist = data.gerontologist;
    }

    getId(){ return this.id;}
    getService(){ return this.service};
    getEntrance(){ return this.entrance};
    getInterviewed(){ return this.interviewed};
    getInterviewer(){ return this.interviewer};
    getAvaliation_date(){ return this.avaliation_date};
    getCreated_at(){ return this.created_at};
    getUpdate_at(){ return this.updated_at};
    getGerontologist(){ return this.gerontologist};

    setId(data: number){ this.id=data; } 
    setService(data: string){ this.service=data; }
    setEntrance(data: Date){ this.entrance=data ; }
    setInterviewed(data: string){ this.interviewed=data; }
    setInterviewer(data: string){ this.interviewer=data; }
    setAvaliation_date(data: Date){ this.avaliation_date=data; }
    setCreated_at(data: Date){ this.created_at=data; }
    setUpdate_at(data: Date){ this.updated_at=data; }
    setGerontologist(data: number){ this.gerontologist=data; }
}
export class FinalAnalise {
    private id : number;
    private created_at : Date; 
    private updated_at : Date;
    private dm3_unmet_demands : string;
    private gerontologist_assessment : string;
    private demands_problems : string;
    private goals : string;  
    private actions_organization : string;

    constructor (data: any = {}){
        this.id = data.id;
        this.created_at = data.created_at; 
        this.updated_at = data.updated_at; 
        this.dm3_unmet_demands = data.dm3_unmet_demands;  
        this.gerontologist_assessment = data.gerontologist_assessment; 
        this.demands_problems = data.demands_problems;
        this.goals = data.goals;
        this.actions_organization = data.actions_organization; 
    }

    getId() {return this.id;}
    getCreated_at(){ return this.created_at;}
    getUpdate_at(){ return this.updated_at;}
    getDm3_unmet_demands(){ return this.dm3_unmet_demands;} 
    getGerontologist_assessment(){ return this.gerontologist_assessment;}  
    getDemands_problems(){ return this.demands_problems;}   
    getGoals(){ return this.goals;}    
    getActions_organization(){ return this.actions_organization;}    
    
    setId(id : number){ this.id = id;}
    setCreated_at(created_at: Date){ this.created_at = created_at;}
    setUpdate_at(updated_at: Date){ this.updated_at = updated_at;}
    setDm3_unmet_demands(dm3_unmet_demands : string){ this.dm3_unmet_demands = dm3_unmet_demands;} 
    setGerontologist_assessment(gerontologist_assessment: string){ this.gerontologist_assessment = gerontologist_assessment;}  
    setDemands_problems(demands_problems : string){ this.demands_problems = demands_problems;}   
    setGoals(goals: string){ this.goals = goals;}    
    setActions_organization(actions_organization: string){ this.actions_organization = actions_organization;}   
}
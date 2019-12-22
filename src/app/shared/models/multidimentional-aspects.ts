export class Falls {
    private id: number;
    private q87_falls_last_year: string;
    private q87_amount_falls_last_year: number;
    private q88_fractures_due_to_falls: string;
    private q88_fractures_due_to_falls_list: string;
    private q89_fractures_list: string;
    private q90_strength_mmii: string;
    private q91_equilibrium: string;
    private q92_older_than75: string;
    private q93_female: string;
    private q94_cognitive_alterations: string;
    private q95_av_ds_commitment: string;
    private q96_visual_deficit: string;
    private q97_domestic_risks: string;
    private q98_behavior_risk: string;
    private q99_inactivity: string;
    private q100_prior_ave: string;
    private q101_psychotropic_medications_use: string;
    private q102_has_diseases: string;
    private need_investigation_falls: string;

    constructor(data: any = {}) {
      this.id = data.id;
      this.q87_falls_last_year = data.q87_falls_last_year;
      this.q87_amount_falls_last_year = data.q87_amount_falls_last_year;
      this.q88_fractures_due_to_falls = data.q88_fractures_due_to_falls;
      this.q88_fractures_due_to_falls_list = data.q88_fractures_due_to_falls_list;
      this.q89_fractures_list = data.q89_fractures_list;
      this.q90_strength_mmii = data.q90_strength_mmii;
      this.q91_equilibrium = data.q91_equilibrium;
      this.q92_older_than75 = data.q92_older_than75;
      this.q93_female = data.q93_female;
      this.q94_cognitive_alterations = data.q94_cognitive_alterations;
      this.q95_av_ds_commitment = data.q95_av_ds_commitment;
      this.q96_visual_deficit = data.q96_visual_deficit;
      this.q97_domestic_risks = data.q97_domestic_risks;
      this.q98_behavior_risk = data.q98_behavior_risk;
      this.q99_inactivity = data.q99_inactivity;
      this.q100_prior_ave = data.q100_prior_ave;
      this.q101_psychotropic_medications_use = data.q101_psychotropic_medications_use;
      this.q102_has_diseases = data.q102_has_diseases;
      this.need_investigation_falls = data.need_investigation_falls;
    }

    getId() { return this.id; }
    getQ87A() { return this.q87_falls_last_year; }
    getQ87B() { return this.q87_amount_falls_last_year; }
    getQ88A() { return this.q88_fractures_due_to_falls; }
    getQ88B() { return this.q88_fractures_due_to_falls_list; }
    getQ89() { return this.q89_fractures_list; }
    getQ90() { return this.q90_strength_mmii; }
    getQ91() { return this.q91_equilibrium; }
    getQ92() { return this.q92_older_than75; }
    getQ93() { return this.q93_female; }
    getQ94() { return this.q94_cognitive_alterations; }
    getQ95() { return this.q95_av_ds_commitment; }
    getQ96() { return this.q96_visual_deficit; }
    getQ97() { return this.q97_domestic_risks; }
    getQ98() { return this.q98_behavior_risk; }
    getQ99() { return this.q99_inactivity; }
    getQ100() { return this.q100_prior_ave; }
    getQ101() { return this.q101_psychotropic_medications_use; }
    getQ102() { return this.q102_has_diseases; }
    getNeedInvestigation() { return this.need_investigation_falls; }
}

export class MultidisciplinaryDomain {
    private id: number;

    private falls: number;

    private falls_instance: Falls;

    private comments_multi: string;

    constructor(data: any = {}, falls_instance?: Falls) {
      this.id = data.id;

      this.falls = data.falls;

      this.falls_instance = falls_instance;

      this.comments_multi = data.string;
    }

    getId() { return this.id; }

    get fallsInstance() { return this.falls_instance; }
    set fallsInstance(falls_instance: Falls) { this.falls_instance = falls_instance; }

    get comments() { return this.comments_multi; }
    set comments(comments: string) { this.comments_multi = comments; }
}

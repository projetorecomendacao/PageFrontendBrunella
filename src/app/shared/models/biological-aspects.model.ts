export class SensoryDeficit {
  private id: number;
  private q15_vision_problems: string;
  private q16_hearing_problems: string;
  private q17_taste_problems: string;
  private q18_senses_problems: string;
  private q19_interaction_problems: string;
  private need_investigation_sensory: string;
  private max_score_sensory: number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q15_vision_problems = data.q15_vision_problems;
    this.q16_hearing_problems = data.q16_hearing_problems;
    this.q17_taste_problems = data.q17_taste_problems;
    this.q18_senses_problems = data.q18_senses_problems;
    this.q19_interaction_problems = data.q19_interaction_problems;
    this.need_investigation_sensory = data.need_investigation_sensory;
  }

  getId() { return this.id; }
  getQ15() { return this.q15_vision_problems; }
  getQ16() { return this.q16_hearing_problems; }
  getQ17() { return this.q17_taste_problems; }
  getQ18() { return this.q18_senses_problems; }
  getQ19() { return this.q19_interaction_problems; }
  getNeedInvestigation() { return this.need_investigation_sensory; }
}


export class FunctionalDisability {
  private id: number;
  private q20_to_shop: string;
  private q21_use_transport: string;
  private q22_to_cook: string;
  private q23UseTelephone: string;
  private q24_dress_up: string;
  private q25TakeShower: string;
  private need_investigation_functional: string;
  private max_score_functional: number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q20_to_shop = data.q20_to_shop;
    this.q21_use_transport = data.q21_use_transport;
    this.q22_to_cook = data.q22_to_cook;
    this.q23UseTelephone = data.q23UseTelephone;
    this.q24_dress_up = data.q24_dress_up;
    this.q25TakeShower = data.q25TakeShower;
    this.need_investigation_functional = data.need_investigation_functional;
  }

  getId() { return this.id; }
  getQ20() { return this.q20_to_shop; }
  getQ21() { return this.q21_use_transport; }
  getQ22() { return this.q22_to_cook; }
  getQ23() { return this.q23UseTelephone; }
  getQ24() { return this.q24_dress_up; }
  getQ25() { return this.q25TakeShower; }
  getNeedInvestigation() { return this.need_investigation_functional; }
}


export class Malnutrition {
  private id: number;
  private d26_yourself_malnourished: string;
  private d27_chewing_mouth_problems: string;
  private d28_less3_meal_daily: string;
  private d29_decreases_amount_food: string;
  private d30_lost_weight_no_reason: string;
  private d31_stress_illness_hospitalization: string;
  private q32_bmi_less22: string;
  private need_investigation_malnutrition: string;
  private max_score_malnutrition: number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.d26_yourself_malnourished = data.d26_yourself_malnourished;
    this.d27_chewing_mouth_problems = data.d27_chewing_mouth_problems;
    this.d28_less3_meal_daily = data.d28_less3_meal_daily;
    this.d29_decreases_amount_food = data.d29_decreases_amount_food;
    this.d30_lost_weight_no_reason = data.d30_lost_weight_no_reason;
    this.d31_stress_illness_hospitalization = data.d31_stress_illness_hospitalization;
    this.q32_bmi_less22 = data.q32_bmi_less22;
    this.need_investigation_malnutrition = data.need_investigation_malnutrition;
  }

  getId() { return this.id; }
  getQ26() { return this.d26_yourself_malnourished; }
  getQ27() { return this.d27_chewing_mouth_problems; }
  getQ28() { return this.d28_less3_meal_daily; }
  getQ29() { return this.d29_decreases_amount_food; }
  getQ30() { return this.d30_lost_weight_no_reason; }
  getQ31() { return this.d31_stress_illness_hospitalization; }
  getQ32() { return this.q32_bmi_less22; }
  getNeedInvestigation() { return this.need_investigation_malnutrition; }
}


export class CardiovascularFactors {
  private id: number;
  private q33_dcv_familiar_history: string;
  private q34_hypertension: string;
  private q34_hypertension_unknow: string;
  private q35_uncontrolled_diabetes: string;
  private q35_unknown_value_glycemia: string;
  private q36_cholesterol: string;
  private q36_unknown_value_ct_hdl: string;
  private q37_smoker: string;
  private q38_practice_150_minutes_exercises: string;
  private q39_healthy_eating: string;
  private q40_alcohol_Ingested_last_week: string;
  private q40_alcohol_Ingested_last_week_amount: string;
  private q41_bmi_obesity: string;
  private need_investigation_cardio: string;
  private max_score_cardio: number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q33_dcv_familiar_history = data.q33_dcv_familiar_history;
    this.q34_hypertension = data.q34_hypertension;
    this.q34_hypertension_unknow = data.q34_hypertension_unknow;
    this.q35_uncontrolled_diabetes = data.q35_uncontrolled_diabetes;
    this.q35_unknown_value_glycemia = data.q35_unknown_value_glycemia;
    this.q36_cholesterol = data.q36_cholesterol;
    this.q36_unknown_value_ct_hdl = data.q36_unknown_value_ct_hdl;
    this.q37_smoker = data.q37_smoker;
    this.q38_practice_150_minutes_exercises = data.q38_practice_150_minutes_exercises;
    this.q39_healthy_eating = data.q39_healthy_eating;
    this.q40_alcohol_Ingested_last_week = data.q40_alcohol_Ingested_last_week;
    this.q40_alcohol_Ingested_last_week_amount = data.q40_alcohol_Ingested_last_week_amount;
    this.q41_bmi_obesity = data.q41_bmi_obesity;
    this.need_investigation_cardio = data.need_investigation_cardio;
  }

  getId() { return this.id; }
  getQ33() { return this.q33_dcv_familiar_history; }
  getQ34A() { return this.q34_hypertension; }
  getQ34B() { return this.q34_hypertension_unknow; }
  getQ35A() { return this.q35_uncontrolled_diabetes; }
  getQ35B() { return this.q35_unknown_value_glycemia; }
  getQ36A() { return this.q36_cholesterol; }
  getQ36B() { return this.q36_unknown_value_ct_hdl; }
  getQ37() { return this.q37_smoker; }
  getQ38() { return this.q38_practice_150_minutes_exercises; }
  getQ39() { return this.q39_healthy_eating; }
  getQ40A() { return this.q40_alcohol_Ingested_last_week; }
  getQ40B() { return this.q40_alcohol_Ingested_last_week_amount; }
  getQ41() { return this.q41_bmi_obesity; }
  getNeedInvestigation() { return this.need_investigation_cardio; }
}


export class MisuseMedications {
  private id: number;
  private q42_diseases_last_5_years_a: string;
  private q42_diseases_last_5_years_b: string;
  private q42_diseases_last_5_years_c: string;
  private q42_diseases_last_5_years_d: string;
  private q42_diseases_last_5_years_e: string;
  private q42_diseases_last_5_years_f: string;
  private q42_diseases_last_5_years_g: string;
  private q42_diseases_last_5_years_h: string;
  private q42_diseases_last_5_years_i: string;
  private q42_diseases_last_5_years_j: string;
  private q42_diseases_last_5_years_k: string;
  private q42_diseases_last_5_years_l: string;
  private q43_health_problems_a: string;
  private q43_health_problems_b: string;
  private q43_health_problems_c: string;
  private q43_health_problems_d: string;
  private q43_health_problems_e: string;
  private q43_health_problems_f: string;
  private q43_health_problems_g: string;
  private q43_health_problems_h: string;
  private q44_amount_diagnostics: number;
  private q45_medicines: string;
  private q46_medicines_increase: string;
  private q47_know_medicines: string;
  private q48_medications_prescribed: string;
  private q49_medicine_medical_advice: string;
  private q50_already_stopped_medicines: string;
  private q51_self_medication: string;
  private q52_inappropriate_medication: string;
  private q53_risk_adverse_reaction: string;
  private need_investigation_misuse: string;
  private max_score_misuse: number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q42_diseases_last_5_years_a = data.q42_diseases_last_5_years_a;
    this.q42_diseases_last_5_years_b = data.q42_diseases_last_5_years_b;
    this.q42_diseases_last_5_years_c = data.q42_diseases_last_5_years_c;
    this.q42_diseases_last_5_years_d = data.q42_diseases_last_5_years_d;
    this.q42_diseases_last_5_years_e = data.q42_diseases_last_5_years_e;
    this.q42_diseases_last_5_years_f = data.q42_diseases_last_5_years_f;
    this.q42_diseases_last_5_years_g = data.q42_diseases_last_5_years_g;
    this.q42_diseases_last_5_years_h = data.q42_diseases_last_5_years_h;
    this.q42_diseases_last_5_years_i = data.q42_diseases_last_5_years_i;
    this.q42_diseases_last_5_years_j = data.q42_diseases_last_5_years_j;
    this.q42_diseases_last_5_years_k = data.q42_diseases_last_5_years_k;
    this.q42_diseases_last_5_years_l = data.q42_diseases_last_5_years_l;
    this.q43_health_problems_a = data.q43_health_problems_a;
    this.q43_health_problems_b = data.q43_health_problems_b;
    this.q43_health_problems_c = data.q43_health_problems_c;
    this.q43_health_problems_d = data.q43_health_problems_d;
    this.q43_health_problems_e = data.q43_health_problems_e;
    this.q43_health_problems_f = data.q43_health_problems_f;
    this.q43_health_problems_g = data.q43_health_problems_g;
    this.q43_health_problems_h = data.q43_health_problems_h;
    this.q44_amount_diagnostics = data.q44_amount_diagnostics;
    this.q45_medicines = data.q45_medicines;
    this.q46_medicines_increase = data.q46_medicines_increase;
    this.q47_know_medicines = data.q47_know_medicines;
    this.q48_medications_prescribed = data.q48_medications_prescribed;
    this.q49_medicine_medical_advice = data.q49_medicine_medical_advice;
    this.q50_already_stopped_medicines = data.q50_already_stopped_medicines;
    this.q51_self_medication = data.q51_self_medication;
    this.q52_inappropriate_medication = data.q52_inappropriate_medication;
    this.q53_risk_adverse_reaction = data.q53_risk_adverse_reaction;
    this.need_investigation_misuse = data.need_investigation_misuse;
  }

  getId() { return this.id; }
  getQ42A() { return this.q42_diseases_last_5_years_a; }
  getQ42B() { return this.q42_diseases_last_5_years_b; }
  getQ42C() { return this.q42_diseases_last_5_years_c; }
  getQ42D() { return this.q42_diseases_last_5_years_d; }
  getQ42E() { return this.q42_diseases_last_5_years_e; }
  getQ42F() { return this.q42_diseases_last_5_years_f; }
  getQ42G() { return this.q42_diseases_last_5_years_g; }
  getQ42H() { return this.q42_diseases_last_5_years_h; }
  getQ42I() { return this.q42_diseases_last_5_years_i; }
  getQ42J() { return this.q42_diseases_last_5_years_j; }
  getQ42K() { return this.q42_diseases_last_5_years_k; }
  getQ42L() { return this.q42_diseases_last_5_years_l; }
  getQ43A() { return this.q43_health_problems_a; }
  getQ43B() { return this.q43_health_problems_b; }
  getQ43C() { return this.q43_health_problems_c; }
  getQ43D() { return this.q43_health_problems_d; }
  getQ43E() { return this.q43_health_problems_e; }
  getQ43F() { return this.q43_health_problems_f; }
  getQ43G() { return this.q43_health_problems_g; }
  getQ43H() { return this.q43_health_problems_h; }
  getQ44() { return this.q44_amount_diagnostics; }
  getQ45() { return this.q45_medicines; }
  getQ46() { return this.q46_medicines_increase; }
  getQ47() { return this.q47_know_medicines; }
  getQ48() { return this.q48_medications_prescribed; }
  getQ49() { return this.q49_medicine_medical_advice; }
  getQ50() { return this.q50_already_stopped_medicines; }
  getQ51() { return this.q51_self_medication; }
  getQ52() { return this.q52_inappropriate_medication; }
  getQ53() { return this.q53_risk_adverse_reaction; }
  getNeedInvestigation() { return this.need_investigation_misuse; }
}


export class BiologicalAspects {
  private id: number;

  private sensoryDeficit: number;
  private functionalDisability: number;
  private malNutrition: number;
  private cardiovascularFactors: number;
  private misuseMedications: number;

  private sensoryDeficit_instance: SensoryDeficit;
  private functionalDisability_instance: FunctionalDisability;
  private malNutrition_instance: Malnutrition;
  private cardiovascularFactors_instance: CardiovascularFactors;
  private misuseMedications_instance: MisuseMedications;

  private comments_bio: string;
  private max_score_bio: number;

  constructor(data: any = {}, sensoryDeficit_instance?: SensoryDeficit, functionalDisability_instance?: FunctionalDisability, malNutrition_instance?: Malnutrition, cardiovascularFactors_instance?: CardiovascularFactors, misuseMedications_instance?: MisuseMedications) {
    this.id = data.id;

    this.sensoryDeficit = data.sensoryDeficit;
    this.functionalDisability = data.functionalDisability;
    this.malNutrition = data.malNutrition;
    this.cardiovascularFactors = data.cardiovascularFactors;
    this.misuseMedications = data.misuseMedications;

    this.sensoryDeficit_instance = sensoryDeficit_instance;
    this.functionalDisability_instance = functionalDisability_instance;
    this.malNutrition_instance = malNutrition_instance;
    this.cardiovascularFactors_instance = cardiovascularFactors_instance;
    this.misuseMedications_instance = misuseMedications_instance;

    this.comments_bio = data.comments_bio;
  }

  getId() { return this.id; }

  get sensoryDeficitInstance() { return this.sensoryDeficit_instance; }
  set sensoryDeficitInstance(sensoryDeficit: SensoryDeficit) { this.sensoryDeficit_instance = sensoryDeficit; }

  get functionalDisabilityInstance() { return this.functionalDisability_instance; }
  set functionalDisabilityInstance(functionalDisability: FunctionalDisability) { this.functionalDisability_instance = functionalDisability; }

  get malNutritionInstance() { return this.malNutrition_instance; }
  set malNutritionInstance(malNutrition: Malnutrition) { this.malNutrition_instance = malNutrition; }

  get cardiovascularFactorsInstance() { return this.cardiovascularFactors_instance; }
  set cardiovascularFactorsInstance(cardiovascularFactors: CardiovascularFactors) { this.cardiovascularFactors_instance = cardiovascularFactors; }

  get misuseMedicationsInstance() { return this.misuseMedications_instance; }
  set misuseMedicationsInstance(misuseMedications: MisuseMedications) { this.misuseMedications_instance = misuseMedications; }

  get comments() { return this.comments_bio; }
  set comments(comments: string) { this.comments_bio = comments; }
}

export class CognitionDeficit {
  private id: number;
  private q1_memory_good_like_before: string;
  private q2_memory_test: string;
  private q3_language_function_attention: string;
  private q4_visospatial_ability: string;
  private q4_visospatial_ability_score: number;
  private q5_praxia: string;
  private q6_memory_test: string;
  private need_investigation_cognition: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q1_memory_good_like_before = data.q1_memory_good_like_before;
    this.q2_memory_test = data.q2_memory_test;
    this.q3_language_function_attention = data.q3_language_function_attention;
    this.q4_visospatial_ability = data.q4_visospatial_ability;
    this.q4_visospatial_ability_score = data.q4_visospatial_ability_score;
    this.q5_praxia = data.q5_praxia;
    this.q6_memory_test = data.q6_memory_test;
    this.need_investigation_cognition = data.need_investigation_cognition;
  }

  public getId() { return this.id; }
  public getQ1() { return this.q1_memory_good_like_before; }
  public getQ2() { return this.q2_memory_test; }
  public getQ3() { return this.q3_language_function_attention; }
  public getQ4A() { return this.q4_visospatial_ability; }
  public getQ4B() { return this.q4_visospatial_ability_score; }
  public getQ5() { return this.q5_praxia; }
  public getQ6() { return this.q6_memory_test; }
  public getNeedInvestigation() { return this.need_investigation_cognition; }
}

export class NegativeAttitudesAging {
  private id: number;
  private q7_age_self_perception: string;
  private q7_age_self_perception_why: string;
  private q7_age_self_perception_analyze: string;
  private q8_aging_positive_points: string;
  private q8_aging_negative_points: number;
  private q8_aging_analyse: string;
  private need_investigation_negative: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q7_age_self_perception = data.q7_age_self_perception;
    this.q7_age_self_perception_why = data.q7_age_self_perception_why;
    this.q7_age_self_perception_analyze = data.q7_age_self_perception_analyze;
    this.q8_aging_positive_points = data.q8_aging_positive_points;
    this.q8_aging_negative_points = data.q8_aging_negative_points;
    this.q8_aging_analyse = data.q8_aging_analyse;
    this.need_investigation_negative = data.need_investigation_negative;
  }

  public getId() { return this.id; }
  public getQ7A() { return this.q7_age_self_perception; }
  public getQ7B() { return this.q7_age_self_perception_why; }
  public getQ7C() { return this.q7_age_self_perception_analyze; }
  public getQ8A() { return this.q8_aging_positive_points; }
  public getQ8B() { return this.q8_aging_negative_points; }
  public getQ8C() { return this.q8_aging_analyse; }
  public getNeedInvestigation() { return this.need_investigation_negative; }
}

export class Depression {
  private id: number;
  private q9_satisfied_with_life: string;
  private q10_frequently_sad: string;
  private q11_stopped_doing_things: string;
  private q12_fear_bad_things_happen: string;
  private q13_impatient_disquiet: number;
  private q14_concentration_problem: string;
  private need_investigation_depression: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q9_satisfied_with_life = data.q9_satisfied_with_life;
    this.q10_frequently_sad = data.q10_frequently_sad;
    this.q11_stopped_doing_things = data.q11_stopped_doing_things;
    this.q12_fear_bad_things_happen = data.q12_fear_bad_things_happen;
    this.q13_impatient_disquiet = data.q13_impatient_disquiet;
    this.q14_concentration_problem = data.q14_concentration_problem;
    this.need_investigation_depression = data.need_investigation_depression;
  }

  public getId() { return this.id; }
  public getQ9() { return this.q9_satisfied_with_life; }
  public getQ10() { return this.q10_frequently_sad; }
  public getQ11() { return this.q11_stopped_doing_things; }
  public getQ12() { return this.q12_fear_bad_things_happen; }
  public getQ13() { return this.q13_impatient_disquiet; }
  public getQ14() { return this.q14_concentration_problem; }
  public getNeedInvestigation() { return this.need_investigation_depression; }
}

export class PsychologicalAspects {
  private id: number;

  // ids
  private cognition_deficit: number;
  private negative_attitudes_aging: number;
  private depression: number;

  // instances
  private cognition_deficit_instance: CognitionDeficit;
  private negative_attitudes_aging_instance: NegativeAttitudesAging;
  private depression_instance: Depression;

  private comments_psico: string;

  constructor(data: any = {}, cognition_deficitInstance?: CognitionDeficit, negative_attitudes_agingInstance?: NegativeAttitudesAging, depressionInstance?: Depression) {
    this.id = data.id || -1;

    this.cognition_deficit = data.cognition_deficit;
    this.negative_attitudes_aging = data.negative_attitudes_aging;
    this.depression = data.depression;

    this.cognition_deficit_instance = cognition_deficitInstance;
    this.negative_attitudes_aging_instance = negative_attitudes_agingInstance;
    this.depression_instance = depressionInstance;

    this.comments_psico = data.comments_psico;
  }

  public getId() { return this.id; }

  get cognitionDeficitId() { return this.cognition_deficit; }
  set cognitionDeficitId(cognition_deficit_id: number) { this.cognition_deficit = cognition_deficit_id; }
  get negativeAttitudesAgingId() { return this.negative_attitudes_aging; }
  set negativeAttitudesAgingId(negative_attitudes_aging_id: number) { this.negative_attitudes_aging = negative_attitudes_aging_id; }
  get depressionId() { return this.depression; }
  set depressionId(depression_id: number) { this.depression = depression_id; }

  get cognitionDeficitInstance() { return this.cognition_deficit_instance; }
  set cognitionDeficitInstance(cognitionDeficitInstance: CognitionDeficit) { this.cognition_deficit_instance = cognitionDeficitInstance; }

  get negativeAttitudesAgingInstance() { return this.negative_attitudes_aging_instance; }
  set negativeAttitudesAgingInstance(negativeAttitudesAgingInstance: NegativeAttitudesAging) { this.negative_attitudes_aging_instance = negativeAttitudesAgingInstance; }

  get depressionInstance() { return this.depression_instance; }
  set depressionInstance(depressionInstance: Depression) { this.depression_instance = depressionInstance; }

  get comments() { return this.comments_psico; }
  set comments(comments: string) { this.comments_psico = comments; }

  public getRaw() {
    return {
      cognition_deficit: this.cognition_deficit,
      negative_attitudes_aging: this.negative_attitudes_aging,
      depression: this.depression,
      comments_psico: this.comments_psico
    };
  }


}

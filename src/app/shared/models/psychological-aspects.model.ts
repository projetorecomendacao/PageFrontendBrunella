export class CognitionDeficit {
  private id: number;
  private q1_memory_good_like_before: string;
  private q2_memory_test: string;
  private q2_memory_test_score: number;
  private q3_language_function_attention: string;
  private q3_language_function_attention_score: number;
  private q3_language_function_attention_15: string;
  private q3_language_function_attention_30: string;
  private q3_language_function_attention_45: string;
  private q3_language_function_attention_60: string;
  private q4_visospatial_ability: string;
  private q4_visospatial_ability_score: number;
  private q5_praxia: string;
  private q5_praxia_score : number;
  private q6_memory_test: string;
  private q6_memory_test_score: string;
  private score_cognition : number;
  private need_investigation_cognition: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q1_memory_good_like_before = data.q1_memory_good_like_before;
    this.q2_memory_test = data.q2_memory_test;
    this.q2_memory_test_score = data.q2_memory_test_score;
    this.q3_language_function_attention = data.q3_language_function_attention;
    this.q3_language_function_attention_score = data.q3_language_function_attention_score;
    this.q3_language_function_attention_15 = data.q3_language_function_attention_15;
    this.q3_language_function_attention_30 = data.q3_language_function_attention_30;
    this.q3_language_function_attention_45 = data.q3_language_function_attention_45;
    this.q3_language_function_attention_60 = data.q3_language_function_attention_60;
    this.q4_visospatial_ability = data.q4_visospatial_ability;
    this.q4_visospatial_ability_score = data.q4_visospatial_ability_score;
    this.q5_praxia = data.q5_praxia;
    this.q5_praxia_score = data.q5_praxia_score;
    this.q6_memory_test = data.q6_memory_test;
    this.q6_memory_test_score = data.q6_memory_test_score;
    this.score_cognition = data.score_cognition;
    this.need_investigation_cognition = data.need_investigation_cognition;
  }

  public getId() { return this.id; }
  public getQ1() { return this.q1_memory_good_like_before; }
  public getQ2A() { return this.q2_memory_test; }
  public getQ2B() { return this.q2_memory_test_score; }
  public getQ3A() { return this.q3_language_function_attention; }
  public getQ3B() { return this.q3_language_function_attention_score; }
  public getQ3_15() { return this.q3_language_function_attention_15; }
  public getQ3_30() { return this.q3_language_function_attention_30; }
  public getQ3_45() { return this.q3_language_function_attention_45; }
  public getQ3_60() { return this.q3_language_function_attention_60; }
  public getQ4A() { return this.q4_visospatial_ability; }
  public getQ4B() { return this.q4_visospatial_ability_score; }
  public getQ5A() { return this.q5_praxia; }
  public getQ5B() { return this.q5_praxia_score; }
  public getQ6A() { return this.q6_memory_test; }
  public getQ6B() { return this.q6_memory_test_score; }
  public getScoreCognition() {return this.score_cognition;}
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
  private score : number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q7_age_self_perception = data.q7_age_self_perception;
    this.q7_age_self_perception_why = data.q7_age_self_perception_why;
    this.q7_age_self_perception_analyze = data.q7_age_self_perception_analyze;
    this.q8_aging_positive_points = data.q8_aging_positive_points;
    this.q8_aging_negative_points = data.q8_aging_negative_points;
    this.q8_aging_analyse = data.q8_aging_analyse;
    this.need_investigation_negative = data.need_investigation_negative;
    this.score = data.score;
  }

  public getId() { return this.id; }
  public getQ7A() { return this.q7_age_self_perception; }
  public getQ7B() { return this.q7_age_self_perception_why; }
  public getQ7C() { return this.q7_age_self_perception_analyze; }
  public getQ8A() { return this.q8_aging_positive_points; }
  public getQ8B() { return this.q8_aging_negative_points; }
  public getQ8C() { return this.q8_aging_analyse; }
  public getScore() {return this.score;}
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
  private score : number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.q9_satisfied_with_life = data.q9_satisfied_with_life;
    this.q10_frequently_sad = data.q10_frequently_sad;
    this.q11_stopped_doing_things = data.q11_stopped_doing_things;
    this.q12_fear_bad_things_happen = data.q12_fear_bad_things_happen;
    this.q13_impatient_disquiet = data.q13_impatient_disquiet;
    this.q14_concentration_problem = data.q14_concentration_problem;
    this.score = data.score;
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
  public getScore() {return this.score;}
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

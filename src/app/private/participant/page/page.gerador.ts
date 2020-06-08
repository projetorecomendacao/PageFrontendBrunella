import { Injectable } from "@angular/core";
import { Page } from 'src/app/shared/models/page.model';
import { Participant, ParticipantSituation } from 'src/app/shared/models/participant.model';
import { CognitionDeficit, NegativeAttitudesAging, Depression, PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';
import { SensoryDeficit, FunctionalDisability, Malnutrition, CardiovascularFactors, MisuseMedications, BiologicalAspects } from 'src/app/shared/models/biological-aspects.model';
import { LowSocialSupport, EnvironmentalProblems, Violence, SocialAspects } from 'src/app/shared/models/social-aspects.model';
import { Falls, MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { CabecaPage } from 'src/app/shared/models/cabecaPage';


@Injectable()
export class PageGerador{
    private participantSituation = new ParticipantSituation({   
        id: 3,
        p02_address: 'N',
        p03_communication: 'N',
        p07_marital_status: 'N',
        p08_schooling: 'N',
        p09_study_time: 3,
        p10_is_retired: 'N',
        p10_retired_profession: 'N',
        p10_actual_profession: 'N',
        p11_retire_more_time_activity: 'N',
        p12_is_working_professionals_activities: 'N',
        p12_professional_activities: 'N',
        p13_income_I: 'N',
        p13_income_F: 'N',
        p14_lives_with: 'N',
        p15_has_religion: 'N',
        p15_religion: 'N',
        p16_health_self_report: 'N',
        p20_weight: 3,
        p20_height: 3,
        p20_IMC: 3,
        p3_car: 'N',
        p3_bus: 'N',
        p3_uber: 'N',
        p3_ride: 'N',
        p3_ride_with: 'N',
        p31_comments: 'N' 
    });


    private cognitionDeficit = new CognitionDeficit({
        id: 1,
        q1_memory_good_like_before: 'N',
        q2_memory_test: 'N',
        q2_memory_test_score: 1,
        q3_language_function_attention: 'N',
        q3_language_function_attention_score: 1,
        q3_language_function_attention_15: 'N',
        q3_language_function_attention_30: 'N',
        q3_language_function_attention_45: 'N',
        q3_language_function_attention_60: 'N',
        q4_visospatial_ability: 'N',
        q4_visospatial_ability_score: 1,
        q5_praxia: 'N',
        q5_praxia_score : 1,
        q6_memory_test: 'N',
        q6_memory_test_score: 'N',
        score_cognition : 1,
        need_investigation_cognition: 'N'
    });
     
    private negativeAttitudesAging = new NegativeAttitudesAging ({
        id: 1,
        q7_age_self_perception: 'N',
        q7_age_self_perception_why: 'N',
        q7_age_self_perception_analyze: 'N',
        q8_aging_positive_points: 'N',
        q8_aging_negative_points: 1,
        q8_aging_analyse: 'N',
        need_investigation_negative: 'N',
        score : 1
    });
     
    private depression = new Depression ({
        id: 1,
        q9_satisfied_with_life: 'N',
        q10_frequently_sad: 'N',
        q11_stopped_doing_things: 'N',
        q12_fear_bad_things_happen: 'N',
        q13_impatient_disquiet: 1,
        q14_concentration_problem: 'N',
        need_investigation_depression: 'N',
        score : 1
    });

    private psi = new PsychologicalAspects({id:1, comments_psico : 'Opa'},this.cognitionDeficit,this.negativeAttitudesAging,this.depression)
     
    private sensoryDeficit = new SensoryDeficit ({
        id: 1,
        q15_vision_problems: 'N',
        q16_hearing_problems: 'N',
        q17_taste_problems: 'N',
        q18_senses_problems: 'N',
        q19_interaction_problems: 'N',
        need_investigation_sensory: 'N',
        max_score_sensory: 1,
        score: 1
    });
     
    private functionalDisability = new FunctionalDisability ({
        id: 1,
        q20_to_shop: 'N',
        q21_use_transport: 'N',
        q22_to_cook: 'N',
        q23UseTelephone: 'N',
        q24_dress_up: 'N',
        q25TakeShower: 'N',
        need_investigation_functional: 'N',
        score: 1,
        max_score_functional: 1
    });
     
    private malnutrition = new Malnutrition ({
        id: 1,
        q26_yourself_malnourished: 'N',
        q27_chewing_mouth_problems: 'N',
        q28_less3_meal_daily: 'N',
        q29_decreases_amount_food: 'N',
        q30_lost_weight_no_reason: 'N',
        q31_stress_illness_hospitalization: 'N',
        q32_bmi_less22: 'N',
        need_investigation_malnutrition: 'N',
        score: 1,
        q30_lost_weight_no_reason_amount : 'N', 
        q31_stress : 'N',
        q31_illnes : 'N',
        q31_hospital : 'N',
        max_score_malnutrition: 1
    });
     
    private cardiovascularFactors = new CardiovascularFactors ({
        id: 1,
        q33_dcv_familiar_history: 'N',
        q34_hypertension: 'N',
        q34_hypertension_unknow: 'N',
        q35_uncontrolled_diabetes: 'N',
        q35_unknown_value_glycemia: 'N',
        q36_cholesterol: 'N',
        q36_unknown_value_ct_hdl: 'N',
        q37_smoker: 'N',
        q38_practice_150_minutes_exercises: 'N',
        q39_healthy_eating: 'N',
        q40_alcohol_Ingested_last_week: 'N',
        q40_alcohol_Ingested_last_week_amount: 'N',
        q41_bmi_obesity: 'N',
        need_investigation_cardio: 'N',
        score: 1,
        max_score_cardio: 1
    });
     
    private misuseMedications = new MisuseMedications ({
        id: 1,
        q42_diseases_last_5_years_a: 'N',
        q42_diseases_last_5_years_b: 'N',
        q42_diseases_last_5_years_c: 'N',
        q42_diseases_last_5_years_d: 'N',
        q42_diseases_last_5_years_e: 'N',
        q42_diseases_last_5_years_f: 'N',
        q42_diseases_last_5_years_g: 'N',
        q42_diseases_last_5_years_h: 'N',
        q42_diseases_last_5_years_i: 'N',
        q42_diseases_last_5_years_j: 'N',
        q42_diseases_last_5_years_k: 'N',
        q42_diseases_last_5_years_l: 'N',
        q43_health_problems_a: 'N',
        q43_health_problems_b: 'N',
        q43_health_problems_c: 'N',
        q43_health_problems_d: 'N',
        q43_health_problems_e: 'N',
        q43_health_problems_f: 'N',
        q43_health_problems_g: 'N',
        q43_health_problems_h: 'N',
        q44_amount_diagnostics: 1,
        q45_medicines: 'N',
        q46_medicines_increase: 'N',
        q47_know_medicines: 'N',
        q48_medications_prescribed: 'N',
        q49_medicine_medical_advice: 'N',
        q50_already_stopped_medicines: 'N',
        q51_self_medication: 'N',
        q52_inappropriate_medication: 'N',
        q53_risk_adverse_reaction: 'N',
        need_investigation_misuse: 'N',
        score: 1,
        max_score_misuse: 1
    });
     
    private bio = new BiologicalAspects({id:1, comments_bio : 'Opa'},this.sensoryDeficit, this.functionalDisability, this.malnutrition, this.cardiovascularFactors, 
                                       this.misuseMedications)
     
    lowSocialSupport = new LowSocialSupport ({
        id: 1,
        q54_spouse: 'N',
        q54_mother: 'N',
        q54_father: 'N',
        q54_brothers: 1,
        q54_children: 1,
        q54_gran_children: 1,
        q55_meet_family_friends: 'N',
        q56_participate_family_decisions: 'N',
        q57_satisfied_family_relationship: 'N',
        q58_helped_if_need_money: 'N',
        q59_someone_helps_if_need: 'N',
        q60_someone_to_have_fun: 'N',
        q61_participate_social_events: 'N',
        q62_regulary_healt_services: 'N',
        need_investigation_low: 'N',
        score : 1
    });
     
     
    private environmentalProblems = new EnvironmentalProblems ({
        id: 1,
        q63_estable_furniture: 'N',
        q64_loose_objects_carpets: 'N',
        q65_slippery_floor: 'N',
        q66_handrail_on_stairs: 'N',
        q67_lighted_stairs: 'N',
        q68_suitable_stairs_steps: 'N',
        q69_non_slippery_carpet: 'N',
        q70_get_on_stool: 'N',
        q71_turn_lights_off: 'N',
        q72_safe_shoes: 'N',
        q73_manicure_sidewalks: 'N',
        q74_public_transport_access: 'N',
        q75_commerce_access: 'N',
        q76_ease_plasewalking: 'N',
        q77_fun_access: 'N',
        q78_safety: 'N',
        score: 1,
        need_investigation_env: 'N'
    });
     
     
    private violence = new Violence ({
        id: 1,
        q79_afraid_close_person: 'N',
        q80_feels_abandoned: 'N',
        q81_forced: 'N',
        q82_assauteld: 'N',
        q83_in_need: 'N',
        q84_someone_used_money: 'N',
        q85_touched_without_permission: 'N',
        q86_dont_take_care_health: 'N',
        need_investigation_violence: 'N',
        score: 1
    });
     
    private soc = new SocialAspects({id:1, comments_social : 'Opa'}, this.lowSocialSupport, this.environmentalProblems, this.violence);

    falls = new Falls ({
        id: 1,
        q87_falls_last_year: 'N',
        q87_amount_falls_last_year: 1,
        q88_fractures_due_to_falls: 'N',
        q88_fractures_due_to_falls_list: 'N',
        q89_fractures_list: 'N',
        q90_strength_mmii: 'N',
        q91_equilibrium: 'N',
        q92_older_than75: 'N',
        q93_female: 'N',
        q94_cognitive_alterations: 'N',
        q95_av_ds_commitment: 'N',
        q96_visual_deficit: 'N',
        q97_domestic_risks: 'N',
        q98_behavior_risk: 'N',
        q99_inactivity: 'N',
        q100_prior_ave: 'N',
        q101_psychotropic_medications_use: 'N',
        q102_has_diseases: 'N',
        score: 1,
        need_investigation_falls: 'N'
    });

    private mul = new MultidisciplinaryDomain({id:1, comments_multi : 'Opa'},this.falls);

    private cabecaPage = new CabecaPage ({
        id: 1,
        service: 'Usp',
        entrance: new Date(),
        interviewed: 'Participante',
        interviewer: 'Teste',
        avaliation_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
        gerontologist: 1 
    });

    pegaPage(participant: Participant): Page{
        var page = new Page(this.cabecaPage,participant,this.participantSituation,this.psi,this.bio, this.soc, this.mul);
        return page;
    }
     
}

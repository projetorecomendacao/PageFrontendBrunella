export class LowSocialSupport {
    private id: number;
    private q54_spouse: string;
    private q54_mother: string;
    private q54_father: string;
    private q54_brothers: number;
    private q54_children: number;
    private q54_gran_children: number;
    private q55_meet_family_friends: string;
    private q56_participate_family_decisions: string;
    private q57_satisfied_family_relationship: string;
    private q58_helped_if_need_money: string;
    private q59_someone_helps_if_need: string;
    private q60_someone_to_have_fun: string;
    private q61_participate_social_events: string;
    private q62_regulary_healt_services: string;
    private need_investigation_low: string;

    constructor(data: any = {}) {
        this.id = data.id;
        this.q54_spouse = data.q54_spouse;
        this.q54_mother = data.q54_mother;
        this.q54_father = data.q54_father;
        this.q54_brothers = data.q54_brothers;
        this.q54_children = data.q54_children;
        this.q54_gran_children = data.q54_gran_children;
        this.q55_meet_family_friends = data.q55_meet_family_friends;
        this.q56_participate_family_decisions = data.q56_participate_family_decisions;
        this.q57_satisfied_family_relationship = data.q57_satisfied_family_relationship;
        this.q58_helped_if_need_money = data.q58_helped_if_need_money;
        this.q59_someone_helps_if_need = data.q59_someone_helps_if_need;
        this.q60_someone_to_have_fun = data.q60_someone_to_have_fun;
        this.q61_participate_social_events = data.q61_participate_social_events;
        this.q62_regulary_healt_services = data.q62_regulary_healt_services;
        this.need_investigation_low = data.need_investigation_low;
    }

    getId() { return this.id; }
    getQ54A() { return this.q54_spouse; }
    getQ54B() { return this.q54_mother; }
    getQ54C() { return this.q54_father; }
    getQ54D() { return this.q54_brothers; }
    getQ54E() { return this.q54_children; }
    getQ54F() { return this.q54_gran_children; }
    getQ55() { return this.q55_meet_family_friends; }
    getQ56() { return this.q56_participate_family_decisions; }
    getQ57() { return this.q57_satisfied_family_relationship; }
    getQ58() { return this.q58_helped_if_need_money; }
    getQ59() { return this.q59_someone_helps_if_need; }
    getQ60() { return this.q60_someone_to_have_fun; }
    getQ61() { return this.q61_participate_social_events; }
    getQ62() { return this.q62_regulary_healt_services; }
    getNeedInvestigation() { return this.need_investigation_low; }
}


export class EnvironmentalProblems {
    private id: number;
    private q63_estable_furniture: string;
    private q64_loose_objects_carpets: string;
    private q65_slippery_floor: string;
    private q66_handrail_on_stairs: string;
    private q67_lighted_stairs: string;
    private q68_suitable_stairs_steps: string;
    private q69_non_slippery_carpet: string;

    private q70_get_on_stool: string;
    private q71_turn_lights_off: string;
    private q72_safe_shoes: string;

    private q73_manicure_sidewalks: string;
    private q74_public_transport_access: string;
    private q75_commerce_access: string;
    private q76_ease_plasewalking: string;
    private q77_fun_access: string;
    private q78_safety: string;

    private need_investigation_env: string

    constructor(data: any = {}) {
        this.id = data.id;

        this.q63_estable_furniture = data.q63_estable_furniture;
        this.q64_loose_objects_carpets = data.q64_loose_objects_carpets;
        this.q65_slippery_floor = data.q65_slippery_floor;
        this.q66_handrail_on_stairs = data.q66_handrail_on_stairs;
        this.q67_lighted_stairs = data.q67_lighted_stairs;
        this.q68_suitable_stairs_steps = data.q68_suitable_stairs_steps;
        this.q69_non_slippery_carpet = data.q69_non_slippery_carpet;

        this.q70_get_on_stool = data.q70_get_on_stool;
        this.q71_turn_lights_off = data.q71_turn_lights_off;
        this.q72_safe_shoes = data.q72_safe_shoes;

        this.q73_manicure_sidewalks = data.q73_manicure_sidewalks;
        this.q74_public_transport_access = data.q74_public_transport_access;
        this.q75_commerce_access = data.q75_commerce_access;
        this.q76_ease_plasewalking = data.q76_ease_plasewalking;
        this.q77_fun_access = data.q77_fun_access;
        this.q78_safety = data.q78_safety;

        this.need_investigation_env = data.need_investigation_env;
    }


    getId() { return this.id; }
    getQ63() { return this.q63_estable_furniture; }
    getQ64() { return this.q64_loose_objects_carpets; }
    getQ65() { return this.q65_slippery_floor; }
    getQ66() { return this.q66_handrail_on_stairs; }
    getQ67() { return this.q67_lighted_stairs; }
    getQ68() { return this.q68_suitable_stairs_steps; }
    getQ69() { return this.q69_non_slippery_carpet; }

    getQ70() { return this.q70_get_on_stool; }
    getQ71() { return this.q71_turn_lights_off; }
    getQ72() { return this.q72_safe_shoes; }

    getQ73() { return this.q73_manicure_sidewalks; }
    getQ74() { return this.q74_public_transport_access; }
    getQ75() { return this.q75_commerce_access; }
    getQ76() { return this.q76_ease_plasewalking; }
    getQ77() { return this.q77_fun_access; }
    getQ78() { return this.q78_safety; }

    getNeedInvestigation() { return this.need_investigation_env; }
}

export class Violence {
    private id: number;
    private q79_afraid_close_person: string;
    private q80_feels_abandoned: string;
    private q81_forced: string;
    private q82_assauteld: string;
    private q83_in_need: string;
    private q84_someone_used_money: string;
    private q85_touched_without_permission: string;
    private q86_dont_take_care_health: string;
    private need_investigation_violence: string;

    constructor(data: any = {}) {
        this.id = data.id;
        this.q79_afraid_close_person = data.q79_afraid_close_person;
        this.q80_feels_abandoned = data.q80_feels_abandoned;
        this.q81_forced = data.q81_forced;
        this.q82_assauteld = data.q82_assauteld;
        this.q83_in_need = data.q83_in_need;
        this.q84_someone_used_money = data.q84_someone_used_money;
        this.q85_touched_without_permission = data.q85_touched_without_permission;
        this.q86_dont_take_care_health = data.q86_dont_take_care_health;
        this.need_investigation_violence = data.need_investigation_violence;
    }

    getId() { return this.id; }
    getQ79() { return this.q79_afraid_close_person; }
    getQ80() { return this.q80_feels_abandoned; }
    getQ81() { return this.q81_forced; }
    getQ82() { return this.q82_assauteld; }
    getQ83() { return this.q83_in_need; }
    getQ84() { return this.q84_someone_used_money; }
    getQ85() { return this.q85_touched_without_permission; }
    getQ86() { return this.q86_dont_take_care_health; }
    getNeedInvestigation() { return this.need_investigation_violence; }
}

export class SocialAspects {
    private id: number;

    private lowSocialSupport: number;
    private environmentalProblems: number;
    private violence: number;

    private lowSocialSupport_instance: LowSocialSupport;
    private environmentalProblems_instance: EnvironmentalProblems;
    private violence_instance: Violence;

    private comments_social: string;

    constructor(data: any = {}, lowSocialSupport_instance?: LowSocialSupport, environmentalProblems_instance?: EnvironmentalProblems, violence_instance?: Violence) {
        this.id = data.id;

        this.lowSocialSupport = data.lowSocialSupport;
        this.environmentalProblems = data.environmentalProblems;
        this.violence = data.violence;

        this.lowSocialSupport_instance = lowSocialSupport_instance;
        this.environmentalProblems_instance = environmentalProblems_instance;
        this.violence_instance = violence_instance;

        this.comments_social = data.comments_social;
    }

    getId() { return this.id; }
    getLowSocialSupport() { return this.lowSocialSupport; }
    getEnvironmentalProblems() { return this.environmentalProblems; }
    getViolence() { return this.violence; }
    getComments_social() { return this.comments_social; }

    get lowSocialSupportInstance() { return this.lowSocialSupport_instance; }
    set lowSocialSupportInstance(lowSocialSupport_instance: LowSocialSupport) { this.lowSocialSupport_instance = lowSocialSupport_instance; }

    get environmentalProblemsInstance() { return this.environmentalProblems_instance; }
    set environmentalProblemsInstance(environmentalProblems_instance: EnvironmentalProblems) { this.environmentalProblems_instance = environmentalProblems_instance; }

    get violenceInstance() { return this.violence_instance; }
    set violenceInstance(violence_instance: Violence) { this.violence_instance = violence_instance; }

    get comments() { return this.comments_social; }
    set comments(comments: string) { this.comments_social = comments; }
}

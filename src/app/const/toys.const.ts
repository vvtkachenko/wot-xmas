export const TREE_TOP: string = 'TreeTop';
export const TREE_GARLAND: string = 'TreeGarland';
export const TREE_HANGING_TOY: string = 'TreeHangingToy';
export const TREE_GIFT: string = 'TreeGift';
export const PLACE_XMAS_TREE: string[] = [TREE_TOP, TREE_GARLAND, TREE_HANGING_TOY, TREE_GIFT];

export const FAIR_GAZEBO: string = 'FairGazebo';
export const FAIR_KITCHEN: string = 'FairKitchen';
export const FAIR_GARLAND: string = 'FairGarland';
export const FAIR_ATRACTION: string = 'FairAtraction';
export const PLACE_FAIR: string[] = [FAIR_GAZEBO, FAIR_KITCHEN, FAIR_GARLAND, FAIR_ATRACTION];

export const INSTALLATION_SCULPTURE: string = 'InstalationSculpture';
export const INSTALLATION_SCULPTURE_LIGHTNING: string = 'InstalationSculptureLightning';
export const INSTALLATION_GARLAND: string = 'InstalationGarland';
export const INSTALLATION_PYROTECHNICS: string = 'InstalationPyrotechnics';
export const INSTALLATION_KIOSK: string = 'InstalationKiosk';
export const PLACE_INSTALLATION: string[] = [INSTALLATION_SCULPTURE, INSTALLATION_SCULPTURE_LIGHTNING, INSTALLATION_GARLAND, INSTALLATION_PYROTECHNICS, INSTALLATION_KIOSK];

export const CollectionToysCount = new Map([
    [TREE_HANGING_TOY, 7],
    [INSTALLATION_PYROTECHNICS, 4],
    [TREE_GARLAND, 8],
    [TREE_GIFT, 8],
    [TREE_TOP, 7],
    [INSTALLATION_SCULPTURE, 5],
    [INSTALLATION_SCULPTURE_LIGHTNING, 3],
    [FAIR_GAZEBO, 5],
    [FAIR_KITCHEN, 6],
    [FAIR_ATRACTION, 3],
])
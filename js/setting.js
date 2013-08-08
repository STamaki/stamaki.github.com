/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.057; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'nagoya_2013_ippan';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-3': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-4': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-5': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-6': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },
  '3': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-7': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-8': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-9': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-10': { icon: 'icons/foreign-military-aid.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-11': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-12': { icon: 'icons/medical-supplies.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-13': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-14': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-15': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-16': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-17': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#D33673' },
  '4-18': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#2A3A03' },
  '5-19': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '5-20': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '6': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-21': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-22': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-23': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-24': { icon: 'icons/energy.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-25': { icon: 'icons/culture.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-26': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#938626' },
  '7-27': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#938626' },
  '7-28': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#938626' },
  '7-29': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#938626' },
  '7-30': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#938626' },
  '7-31': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#938626' },
  '7-32': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  '8-33': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#C75746' },
  '8-34': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  '9': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '9-35': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '10-36': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '10-37': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '10-38': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#790586' },
  '10-39': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '10-40': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '10-41': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#790586' },
  '10-42': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#790586' },
  '10-43': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  '10-44': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#790586' },
  '10-45': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  '11-46': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  '12': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#790586' },
  '12-47': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#790586' },
  '13': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  '13-48': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' }
  
};


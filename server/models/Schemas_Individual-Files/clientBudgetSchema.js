var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientBudgetSchema = new Schema({
// email: { type: String, require: true, unique: true },

// BUDGET SHEETS
// budgetAssessment_label
// clientName: { type: String },
// assessmentDate: { type: Date },

budgetOnlyYou: { type: Boolean },
budgetWholeHousehold: { type: Boolean },
firstBudgetCreated: { type: Boolean },
updatePartial: { type: Boolean },
updateComplete: { type: Boolean },
incomeNet: { type: Boolean },
incomeGross: { type: Boolean },

// monthlyIncome_label
monthlyWagesNet: { type: Number },
monthlyWagesGross: { type: Number },
monthlySelfAndBusinessNet: { type: Number },
monthlySelfAndBusinessGross: { type: Number },
monthlyNetSSI: { type: Number },
monthlyGrossSSI: { type: Number },
monthlyNetSNAPWIC: { type: Number },
monthlyGrossSNAPWIC: { type: Number },
monthlyAlimonyNet: { type: Number },
monthlyAlimonyGross: { type: Number },
monthlyUnemploymentNet: { type: Number },
monthlyUnemploymentGross: { type: Number },
monthlyWorkersCompensationNet: { type: Number },
monthlyWorkersCompensationGross: { type: Number },
monthlyVeteransCompensationNet: { type: Number },
monthlyVeteransCompensationGross: { type: Number },
monthlyRentalIncomeNet: { type: Number },
monthlyRentalIncomeGross: { type: Number },
monthlyInvestmentIncomeNet: { type: Number },
monthlyInvestmentIncomeGross: { type: Number },
monthlyIncomeOtherHouseholdMembersNet: { type: Number },
monthlySocialSecurityNetNotSSI: { type: Number },
monthlySocialSecurityGrossNotSSI: { type: Number },
monthlyPensionsNet: { type: Number },
monthlyPensionsGross: { type: Number },
monthlyOtherPublicBenefitsNet: { type: Number },
monthlyOtherIncomeNet: { type: Number },
monthlyOtherIncomeGross: { type: Number },
totalMonthlyIncomeNet: { type: Number },
totalMonthlyIncomeGross: { type: Number },

// monthlyExpenses_label
// housing_label
monthlyRent: { type: Number },
monthlyRentersInsurance: { type: Number },
numberOfMortgages: { type: Number },  // ***(not a dollar amount - skip this?)
monthlyMortgage1: { type: Number },
monthlyMortgage2: { type: Number },
monthlyHeloc: { type: Number },
monthlyPropertyTaxIfNotInMortgage: { type: Number },
monthlyHomeownersInsurance: { type: Number },
monthlyHomeMaintenance: { type: Number },
monthlyCondoTownhomeFees: { type: Number },
monthlyOtherRealEstate: { type: Number },
monthlyOtherHousingExpenses: { type: Number },
monthlyTotalHousingExpenses: { type: Number },

// utilities_label
monthlyGasHeating: { type: Number },
monthlyElectric: { type: Number },
monthlyWater: { type: Number },
monthlyTrash: { type: Number },
monthlySewer: { type: Number },
monthlyLandline: { type: Number },
monthlyCellPhone: { type: Number },
monthlyOtherUtilitiesNotCableAndInternet: { type: Number },
monthlyTotalUtilities: { type: Number },

// food_label
monthlyGroceries: { type: Number },
monthlyOtherFood: { type: Number },
monthlyTotalFoodExpenses: { type: Number },

// transportation_label
numberOfVehicles: { type: Number },  // ***(not a dollar amount - could skip this)
monthlyVehicle1: { type: Number },
monthlyVehicle2: { type: Number },
monthlyVehiclesOther: { type: Number },
monthlyGas: { type: Number },
monthlyCarInsurance: { type: Number },
monthlyCarMaintenance: { type: Number },
monthlyPublicTransportation: { type: Number },
monthlyTransportationExpenses: { type: Number },
monthlyTotalTransportationExpenses: { type: Number },

// healthRelated_label
monthlyHealthInsurance: { type: Number },
monthlyDentalInsurance: { type: Number },
monthlyLifeInsurance: { type: Number },
monthlyMedicalAndPrescription: { type: Number },
monthlyOtherHealthRelated: { type: Number },
monthlyTotalHealthRelatedExpenses: { type: Number },

// dependentRelatedExpenses_label
monthlyChildSupport: { type: Number },
monthlyChildcare: { type: Number },
monthlyEducation: { type: Number },
monthlyOtherDependentExpenses: { type: Number },
monthlyTotalDependentRelatedExpenses: { type: Number },

// creditCardLoanDebtPayments_label
monthlyCombinedCreditCards: { type: Number },
monthlyStudentLoans: { type: Number },
monthlyConsumerLoans: { type: Number },
monthlyBusinessLoans: { type: Number },
monthlyInformalLoans: { type: Number },
monthlyOtherDebtPayments: { type: Number },
monthlyTotalCreditCardLoanDebtPayments: { type: Number },

// personalExpenses_label
monthlyCableInternet: { type: Number },
monthlyLaundryDryCleaning: { type: Number },
monthlyTobaccoAndAlcohol: { type: Number },
monthlyClothingAndAccessories: { type: Number },
monthlyHairProductsAndToiletries: { type: Number },
monthlyBeautySalonBarberShop: { type: Number },
monthlyRecreation: { type: Number },
monthlyOtherPersonalExpenses: { type: Number },
monthlyTotalPersonalExpenses: { type: Number },

// miscellaneous_label
monthlyCharitableGiving: { type: Number },
monthlyGiftsToOthers: { type: Number },
monthlyNewspapersMagazines: { type: Number },
monthlyPetCare: { type: Number },
monthlyAllowancesForDependencies: { type: Number },
monthlyMembershipDues: { type: Number },
monthlyEducationForParticipant: { type: Number },
monthlyFinancialFees: { type: Number },
monthlyOtherMiscellaneousExpenses: { type: Number },
monthlyTotalMiscellaneousExpenses: { type: Number },

// monthlySavingsTarget_label
monthlySavingsTarget: { type: Number },

// totalMonthlyNetIncome_label
totalMonthlyIncome: { type: Number },
totalMonthlyExpenses: { type: Number },
totalMonthlyNetIncome: { type: Number },

budgetAssessmentNotes: { type: Number }

});

var Client = mongoose.model('Client', clientBalanceSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.


module.exports = Client;
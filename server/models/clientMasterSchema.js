var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientMasterSchema = new Schema({
// example: { type: String, require: true, unique: true },
  name: String
},
{ strict: false});

// clientName: { type: String },
// assessmentDate: { type: Date },
//
// // BALANCE SHEET
// balanceOnlyYou: { type: Boolean }, // Boolean logic set with next line
// budgetWholeHousehold: { type: Boolean },
// firstBalanceCreated: { type: Boolean },
// updatePartial: { type: Boolean }, // Boolean logic set with next line
// updateComplete: { type: Boolean },
//
// // assets_label
// checkingBalanceValue: { type: Number },
// savingsBalanceValue: { type: Number },
// cashOnHandValue: { type: Number },
// vehicle1Value: { type: Number },
// vehicle2Value: { type: Number },
// vehicleOthersValue: { type: Number },
// primaryResidenceValue: { type: Number },
// otherRealEstateValue: { type: Number },
// stocksBondsAndSimilarValue: { type: Number },
// retirementAccountsValue: { type: Number },
// collegeSavingsValue: { type: Number },
// businessValue: { type: Number },
// otherAssetsValue: { type: Number },
// totalAssets: { type: Number },
//
// // liabilities_label
// // housingLiabilities_label
// mortgageBalance: { type: Number },
// helocBalance: { type: Number },
// otherRealEstateBalance: { type: Number },
// totalHousingLiabilities: { type: Number },
//
// // transportationLiabilities_label
// vehicle1Balance: { type: Number },
// vehicle2Balance: { type: Number },
// vehicleOthersBalance: { type: Number },
// totalTransportationLiabilities: { type: Number },
//
// // creditCardsOtherLoansBalance_label
// creditCardsCombinedBalance: { type: Number },
// studentLoansBalance: { type: Number },
// consumerLoansBalance: { type: Number },
// businessLoansBalance: { type: Number },
// informalLoansBalance: { type: Number },
// totalCreditCardsOtherLoansBalance: { type: Number },
//
// // unpaidBillsNotInCollections_label
// unpaidUtilitiesBalance: { type: Number },
// unpaidRentBalance: { type: Number },
// unpaidMedicalBillsBalance: { type: Number },
// moneyOwedToBanksBalance: { type: Number },
// otherUnpaidBillsBalance: { type: Number },
// totalUnpaidBillsNotInCollections: { type: Number },
//
// // collectionsChargeOffsJudgments_label
// medicalCollectionsBalance: { type: Number },
// allOtherCollectionsBalance: { type: Number },
// childSupportInArrearsBalance: { type: Number },
// BackTaxesBalance: { type: Number },
// otherPublicRecordsBalance: { type: Number },
// totalCollectionsChargeOffsJudgments: { type: Number },
//
// // balanceSheetCalculations_label
// totalAssets: { type: Number },
// totalLiabilities: { type: Number },
// totalNetWorth: { type: Number },
// balanceSheetAssessmentNotes: { type: Number },
//
//
// // BUDGET SHEETS
// // budgetAssessment_label
// budgetOnlyYou: { type: Boolean }, // Boolean logic set with next line
// budgetWholeHousehold: { type: Boolean },
// firstBudgetCreated: { type: Boolean },
// updatePartial: { type: Boolean }, // Boolean logic set with next line
// updateComplete: { type: Boolean },
// incomeNet: { type: Boolean }, // Boolean logic set with next line
// incomeGross: { type: Boolean },
//
// // monthlyIncome_label
// monthlyWagesNet: { type: Number },
// monthlyWagesGross: { type: Number },
// monthlySelfAndBusinessNet: { type: Number },
// monthlySelfAndBusinessGross: { type: Number },
// monthlyNetSSI: { type: Number },
// monthlyGrossSSI: { type: Number },
// monthlyNetSNAPWIC: { type: Number },
// monthlyGrossSNAPWIC: { type: Number },
// monthlyAlimonyNet: { type: Number },
// monthlyAlimonyGross: { type: Number },
// monthlyUnemploymentNet: { type: Number },
// monthlyUnemploymentGross: { type: Number },
// monthlyWorkersCompensationNet: { type: Number },
// monthlyWorkersCompensationGross: { type: Number },
// monthlyVeteransCompensationNet: { type: Number },
// monthlyVeteransCompensationGross: { type: Number },
// monthlyRentalIncomeNet: { type: Number },
// monthlyRentalIncomeGross: { type: Number },
// monthlyInvestmentIncomeNet: { type: Number },
// monthlyInvestmentIncomeGross: { type: Number },
// monthlyIncomeOtherHouseholdMembersNet: { type: Number },
// monthlySocialSecurityNetNotSSI: { type: Number },
// monthlySocialSecurityGrossNotSSI: { type: Number },
// monthlyPensionsNet: { type: Number },
// monthlyPensionsGross: { type: Number },
// monthlyOtherPublicBenefitsNet: { type: Number },
// monthlyOtherIncomeNet: { type: Number },
// monthlyOtherIncomeGross: { type: Number },
// totalMonthlyIncomeNet: { type: Number },
// totalMonthlyIncomeGross: { type: Number },
//
// // monthlyExpenses_label
// // housing_label
// monthlyRent: { type: Number },
// monthlyRentersInsurance: { type: Number },
// numberOfMortgages: { type: Number },  // ***(not a dollar amount - skip this?)
// monthlyMortgage1: { type: Number },
// monthlyMortgage2: { type: Number },
// monthlyHeloc: { type: Number },
// monthlyPropertyTaxIfNotInMortgage: { type: Number },
// monthlyHomeownersInsurance: { type: Number },
// monthlyHomeMaintenance: { type: Number },
// monthlyCondoTownhomeFees: { type: Number },
// monthlyOtherRealEstate: { type: Number },
// monthlyOtherHousingExpenses: { type: Number },
// monthlyTotalHousingExpenses: { type: Number },
//
// // utilities_label
// monthlyGasHeating: { type: Number },
// monthlyElectric: { type: Number },
// monthlyWater: { type: Number },
// monthlyTrash: { type: Number },
// monthlySewer: { type: Number },
// monthlyLandline: { type: Number },
// monthlyCellPhone: { type: Number },
// monthlyOtherUtilitiesNotCableAndInternet: { type: Number },
// monthlyTotalUtilities: { type: Number },
//
// // food_label
// monthlyGroceries: { type: Number },
// monthlyOtherFood: { type: Number },
// monthlyTotalFoodExpenses: { type: Number },
//
// // transportation_label
// numberOfVehicles: { type: Number },  // ***(not a dollar amount - could skip this)
// monthlyVehicle1: { type: Number },
// monthlyVehicle2: { type: Number },
// monthlyVehiclesOther: { type: Number },
// monthlyGas: { type: Number },
// monthlyCarInsurance: { type: Number },
// monthlyCarMaintenance: { type: Number },
// monthlyPublicTransportation: { type: Number },
// monthlyTransportationExpenses: { type: Number },
// monthlyTotalTransportationExpenses: { type: Number },
//
// // healthRelated_label
// monthlyHealthInsurance: { type: Number },
// monthlyDentalInsurance: { type: Number },
// monthlyLifeInsurance: { type: Number },
// monthlyMedicalAndPrescription: { type: Number },
// monthlyOtherHealthRelated: { type: Number },
// monthlyTotalHealthRelatedExpenses: { type: Number },
//
// // dependentRelatedExpenses_label
// monthlyChildSupport: { type: Number },
// monthlyChildcare: { type: Number },
// monthlyEducation: { type: Number },
// monthlyOtherDependentExpenses: { type: Number },
// monthlyTotalDependentRelatedExpenses: { type: Number },
//
// // creditCardLoanDebtPayments_label
// monthlyCombinedCreditCards: { type: Number },
// monthlyStudentLoans: { type: Number },
// monthlyConsumerLoans: { type: Number },
// monthlyBusinessLoans: { type: Number },
// monthlyInformalLoans: { type: Number },
// monthlyOtherDebtPayments: { type: Number },
// monthlyTotalCreditCardLoanDebtPayments: { type: Number },
//
// // personalExpenses_label
// monthlyCableInternet: { type: Number },
// monthlyLaundryDryCleaning: { type: Number },
// monthlyTobaccoAndAlcohol: { type: Number },
// monthlyClothingAndAccessories: { type: Number },
// monthlyHairProductsAndToiletries: { type: Number },
// monthlyBeautySalonBarberShop: { type: Number },
// monthlyRecreation: { type: Number },
// monthlyOtherPersonalExpenses: { type: Number },
// monthlyTotalPersonalExpenses: { type: Number },
//
// // miscellaneous_label
// monthlyCharitableGiving: { type: Number },
// monthlyGiftsToOthers: { type: Number },
// monthlyNewspapersMagazines: { type: Number },
// monthlyPetCare: { type: Number },
// monthlyAllowancesForDependencies: { type: Number },
// monthlyMembershipDues: { type: Number },
// monthlyEducationForParticipant: { type: Number },
// monthlyFinancialFees: { type: Number },
// monthlyOtherMiscellaneousExpenses: { type: Number },
// monthlyTotalMiscellaneousExpenses: { type: Number },
//
// // monthlySavingsTarget_label
// monthlySavingsTarget: { type: Number },
//
// // totalMonthlyNetIncome_label
// totalMonthlyIncome: { type: Number },
// totalMonthlyExpenses: { type: Number },
// totalMonthlyNetIncome: { type: Number },
//
// budgetAssessmentNotes: { type: Number },
//
//
// // CREDIT SHEETS
// // INFORMATION
// firstCreditReport: { type: Boolean },
// partialOrCompleteCreditReport: { type: Boolean },
//
// //// PARTICIPANT PRESENT?
// pullingCreditReportClientPresent: { type: Boolean },
// creditReportUnusualActivity: { type: Boolean },
// creditReportErrors: { type: Boolean },
//
// //// CREDIT REPORT
// ablePullCreditReport: { type: Boolean },
// pullCreditReport: { type: String }, // Add textArea or string for user notes??
// creditReportNoAgencyAccess: { type: Boolean },
// creditReportNoClientAccess: { type: Boolean },
// creditReportNoBusinessNoConsumer: { type: Boolean },
// creditReportAvailable: { type: Boolean },
// creditReportRefused: { type: Boolean },
//
//
// ////  TransUnion (Note: TransUnion = TU)
// TUAuthStatus6Mnth5Yrs: { type: Boolean },
// TUAuthStatus1Time: { type: Boolean },
// TUAuthStatusRefuse: { type: Boolean },
//
// WithdrewMultiPullAuth6Mnth5Yrs: { type: Boolean },
//
// TUReportTypeSingleBusiness: { type: Boolean },
// TUReportTypeTriBusiness: { type: Boolean },
// TUReportTypeConsumer: { type: Boolean },
//
// TUFICOScoreStatusNoAttempt: { type: Boolean },
// TUFICOScoreStatusScored: { type: Boolean },
// TUFICOScoreStatusNoInsufficient: { type: Boolean },
// TUFICOScoreStatusNoOther: { type: Boolean },
// TUFICOScoreStatus: { type: Boolean },
// TUFICOScore: { type: Number },
//
// TUNonFICOScoreStatusNoAttempt: { type: Boolean },
// TUNonFICOScoreStatusScored: { type: Boolean },
// TUNonFICOScoreStatusNoInsufficient: { type: Boolean },
// TUNonFICOScoreStatusNoOther: { type: Boolean },
// TUNonFICOScoreTypeVantageScore: { type: Boolean },
// TUNonFICOScoreTypeTransRiskScore: { type: Boolean },
// TUNonFICOScoreTypeCreditXpert: { type: Boolean },
// TUNonFICOScoreTypeCEScore: { type: Boolean },
// TUNonFICOScoreTypeOther: { type: Boolean },
// TUNonFICOScore: { type: Number },
//
// //// Other Bureaus
// OtherBureauAuthStatus6Mnth5Yrs: { type: Boolean },
// OtherBureauAuthStatus1Time: { type: Boolean },
// OtherBureauAuthStatusRefuse: { type: Boolean },
//
// WithdrewMultiPullAuth6Mnth5Yrs: { type: Boolean },
//
// OtherBureauReportTypeSingleBusiness: { type: Boolean },
// OtherBureauReportTypeTriBusiness: { type: Boolean },
// OtherBureauReportTypeConsumer: { type: Boolean },
//
// OtherBureauFICOScoreStatusNoAttempt: { type: Boolean },
// OtherBureauFICOScoreStatusScored: { type: Boolean },
// OtherBureauFICOScoreStatusNoInsufficient: { type: Boolean },
// OtherBureauFICOScoreStatusNoOther: { type: Boolean },
// OtherBureauFICOScoreStatus: { type: Boolean },
// OtherBureauFICOScore: { type: Number },
//
// OtherBureauNonFICOScoreStatusNoAttempt: { type: Boolean },
// OtherBureauNonFICOScoreStatusScored: { type: Boolean },
// OtherBureauNonFICOScoreStatusNoInsufficient: { type: Boolean },
// OtherBureauNonFICOScoreStatusNoOther: { type: Boolean },
// OtherBureauNonFICOScoreTypeVantageScore: { type: Boolean },
// OtherBureauNonFICOScoreTypeTransRiskScore: { type: Boolean },
// OtherBureauNonFICOScoreTypeCreditXpert: { type: Boolean },
// OtherBureauNonFICOScoreTypeCEScore: { type: Boolean },
// OtherBureauNonFICOScoreTypeOther: { type: Boolean },
// OtherBureauNonFICOScore: { type: Number },
//
// //// ACTIVE LINES OF CREDIT
// qtyActiveLinesCredit: { type: Number },
// qtyActiveInstallmentLoans: { type: Number },
// // qtyActiveRevolvingLinesCr ACTIVE CREDIT CARDS
// CreditCardName: { type: String },
// Limit: { type: Number },
// AcctBalance: { type: Number },
// AmtPastDue: { type: Number },
//
// ///// new TABLE:  REVOLVING ACCOUNTS – HOME EQUITY LINES OF CREDIT (HELOCs)
// NameOfHELOC: { type: String },
// TotalLimit: { type: Number },
// AccountBalance: { type: Number },
// AmountPastDue: { type: Number },
//
// foreclosureLastSevenYrs: { type: Number },
// recentForeclosureDate: { type: Date },
// bankruptcyLastTen: { type: Number },
// recentBankruptcyDate: { type: Date },
// collectionsChargeOffGeneral: { type: Number },
// collectionsChargeOffMedical: { type: Number },
// civilJudgmentsPublicRecordsTaxLiens: { type: Number },
// delinquencies30Day: { type: Number },
// delinquencies60Day: { type: Number },
// delinquencies90Day: { type: Number },
// });

var Client = mongoose.model('Client', clientMasterSchema); // (green) 'Client' refers to the users collection adding plurality and is not case sensitive.

module.exports = Client;

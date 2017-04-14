var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientCreditSchema = new Schema({
// email: { type: String, require: true, unique: true },

clientName: { type: String },
assessmentDate: { type: Date },

// CREDIT SHEETS
// INFORMATION
firstCreditReport: { type: Boolean },
partialOrCompleteCreditReport: { type: Boolean },

//// PARTICIPANT PRESENT?
pullingCreditReportClientPresent: { type: Boolean },
creditReportUnusualActivity: { type: Boolean },
creditReportErrors: { type: Boolean },

//// CREDIT REPORT
ablePullCreditReport: { type: Boolean },
pullCreditReport: { type: String }, // Add textArea or string for user notes??
creditReportNoAgencyAccess: { type: Boolean },
creditReportNoClientAccess: { type: Boolean },
creditReportNoBusinessNoConsumer: { type: Boolean },
creditReportAvailable: { type: Boolean },
creditReportRefused: { type: Boolean },

////  TransUnion (Note: TransUnion = TU)
TUAuthStatus6Mnth5Yrs: { type: Boolean },
TUAuthStatus1Time: { type: Boolean },
TUAuthStatusRefuse: { type: Boolean },

WithdrewMultiPullAuth6Mnth5Yrs: { type: Boolean },

TUReportTypeSingleBusiness: { type: Boolean },
TUReportTypeTriBusiness: { type: Boolean },
TUReportTypeConsumer: { type: Boolean },

TUFICOScoreStatusNoAttempt: { type: Boolean },
TUFICOScoreStatusScored: { type: Boolean },
TUFICOScoreStatusNoInsufficient: { type: Boolean },
TUFICOScoreStatusNoOther: { type: Boolean },
TUFICOScoreStatus: { type: Boolean },
TUFICOScore: { type: Number },

TUNonFICOScoreStatusNoAttempt: { type: Boolean },
TUNonFICOScoreStatusScored: { type: Boolean },
TUNonFICOScoreStatusNoInsufficient: { type: Boolean },
TUNonFICOScoreStatusNoOther: { type: Boolean },
TUNonFICOScoreTypeVantageScore: { type: Boolean },
TUNonFICOScoreTypeTransRiskScore: { type: Boolean },
TUNonFICOScoreTypeCreditXpert: { type: Boolean },
TUNonFICOScoreTypeCEScore: { type: Boolean },
TUNonFICOScoreTypeOther: { type: Boolean },
TUNonFICOScore: { type: Number },

//// Other Bureaus
OtherBureauAuthStatus6Mnth5Yrs: { type: Boolean },
OtherBureauAuthStatus1Time: { type: Boolean },
OtherBureauAuthStatusRefuse: { type: Boolean },

WithdrewMultiPullAuth6Mnth5Yrs: { type: Boolean },

OtherBureauReportTypeSingleBusiness: { type: Boolean },
OtherBureauReportTypeTriBusiness: { type: Boolean },
OtherBureauReportTypeConsumer: { type: Boolean },

OtherBureauFICOScoreStatusNoAttempt: { type: Boolean },
OtherBureauFICOScoreStatusScored: { type: Boolean },
OtherBureauFICOScoreStatusNoInsufficient: { type: Boolean },
OtherBureauFICOScoreStatusNoOther: { type: Boolean },
OtherBureauFICOScoreStatus: { type: Boolean },
OtherBureauFICOScore: { type: Number },

OtherBureauNonFICOScoreStatusNoAttempt: { type: Boolean },
OtherBureauNonFICOScoreStatusScored: { type: Boolean },
OtherBureauNonFICOScoreStatusNoInsufficient: { type: Boolean },
OtherBureauNonFICOScoreStatusNoOther: { type: Boolean },
OtherBureauNonFICOScoreTypeVantageScore: { type: Boolean },
OtherBureauNonFICOScoreTypeTransRiskScore: { type: Boolean },
OtherBureauNonFICOScoreTypeCreditXpert: { type: Boolean },
OtherBureauNonFICOScoreTypeCEScore: { type: Boolean },
OtherBureauNonFICOScoreTypeOther: { type: Boolean },
OtherBureauNonFICOScore: { type: Number },

//// ACTIVE LINES OF CREDIT
qtyActiveLinesCredit: { type: Number },
qtyActiveInstallmentLoans: { type: Number },
qtyActiveRevolvingLinesCredit: { type: Number },

//// REVOLVING ACCOUNTS – ACTIVE CREDIT CARDS
CreditCardName: { type: String },
Limit: { type: Number },
AcctBalance: { type: Number },
AmtPastDue: { type: Number },

///// new TABLE:  REVOLVING ACCOUNTS – HOME EQUITY LINES OF CREDIT (HELOCs)
NameOfHELOC: { type: String },
TotalLimit: { type: Number },
AccountBalance: { type: Number },
AmountPastDue: { type: Number },

foreclosureLastSevenYrs: { type: Number },
recentForeclosureDate: { type: Date },
bankruptcyLastTen: { type: Number },
recentBankruptcyDate: { type: Date },
collectionsChargeOffGeneral: { type: Number },
collectionsChargeOffMedical: { type: Number },
civilJudgmentsPublicRecordsTaxLiens: { type: Number },
delinquencies30Day: { type: Number },
delinquencies60Day: { type: Number },
delinquencies90Day: { type: Number },

});

var Client = mongoose.model('Client', clientBalanceSchema); // Green 'Client' refers to the users collection adding plurality and not case sensitive.


module.exports = Client;
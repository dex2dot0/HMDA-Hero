import { get } from 'svelte/store';
import * as store from '../stores.js';

export async function cancelChanges() {
	//Set values back to original
	console.log('Changes cancelled, reverting values back to original');
	try {
		console.log(get(store.editRowData));
		// store.ULI.resetToOriginal()
		// store.appDate.resetToOriginal()
		// store.loanType.resetToOriginal()
		// store.loanPurpose.resetToOriginal()
		// store.preapproval.resetToOriginal()
		// store.constructionMethod.resetToOriginal()
		// store.occupancyType.resetToOriginal()
		// store.loanAmount.resetToOriginal()
		// store.actionTaken.resetToOriginal()
		// store.actionTakenDate.resetToOriginal()
		// store.streetAddress.resetToOriginal()
		// store.city.resetToOriginal()
		// store.stateCode.resetToOriginal()
		// store.zipCode.resetToOriginal()
		// store.countyCode.resetToOriginal()
		// store.censusTract.resetToOriginal()
		// store.applicantEth1.resetToOriginal()
		// store.applicantEth2.resetToOriginal()
		// store.applicantEth3.resetToOriginal()
		// store.applicantEth4.resetToOriginal()
		// store.applicantEth5.resetToOriginal()
		// store.applicantEthOther.resetToOriginal()
		// store.coapplicantEth1.resetToOriginal()
		// store.coapplicantEth2.resetToOriginal()
		// store.coapplicantEth3.resetToOriginal()
		// store.coapplicantEth4.resetToOriginal()
		// store.coapplicantEth5.resetToOriginal()
		// store.coapplicantEthOther.resetToOriginal()
		// store.applicantEthBasis.resetToOriginal()
		// store.coapplicantEthBasis.resetToOriginal()
		// store.applicantRace1.resetToOriginal()
		// store.applicantRace2.resetToOriginal()
		// store.applicantRace3.resetToOriginal()
		// store.applicantRace4.resetToOriginal()
		// store.applicantRace5.resetToOriginal()
		// store.applicantRaceOther1.resetToOriginal()
		// store.applicantRaceOther2.resetToOriginal()
		// store.applicantRaceOther3.resetToOriginal()
		// store.coapplicantRace1.resetToOriginal()
		// store.coapplicantRace2.resetToOriginal()
		// store.coapplicantRace2.resetToOriginal()
		// store.coapplicantRace3.resetToOriginal()
		// store.coapplicantRace4.resetToOriginal()
		// store.coapplicantRace5.resetToOriginal()
		// store.coapplicantRaceOther1.resetToOriginal()
		// store.coapplicantRaceOther2.resetToOriginal()
		// store.coapplicantRaceOther3.resetToOriginal()
		// store.applicantRaceBasis.resetToOriginal()
		// store.coapplicantRaceBasis.resetToOriginal()
		// store.applicantSex.resetToOriginal()
		// store.coapplicantSex.resetToOriginal()
		// store.applicantSexBasis.resetToOriginal()
		// store.coapplicantSexBasis.resetToOriginal()
		// store.applicantAge.resetToOriginal()
		// store.coapplicantAge.resetToOriginal()
		// store.income.resetToOriginal()
		// store.purchaserType.resetToOriginal()
		// store.rateSpread.resetToOriginal()
		// store.hoepa.resetToOriginal()
		// store.lienStatus.resetToOriginal()
		// store.applicantCreditScore.resetToOriginal()
		// store.coapplicantCreditScore.resetToOriginal()
		// store.applicantCreditModel.resetToOriginal()
		// store.applicantCreditModelOther.resetToOriginal()
		// store.coapplicantCreditModel.resetToOriginal()
		// store.coapplicantCreditModelOther.resetToOriginal()
		// store.denialReason1.resetToOriginal()
		// store.denialReason2.resetToOriginal()
		// store.denialReason3.resetToOriginal()
		// store.denialReason4.resetToOriginal()
		// store.denialReasonOther.resetToOriginal()
		// store.loanCosts.resetToOriginal()
		// store.pointsFees.resetToOriginal()
		// store.originationCharges.resetToOriginal()
		// store.discountPoints.resetToOriginal()
		// store.lenderCredits.resetToOriginal()
		// store.interestRate.resetToOriginal()
		// store.prepaymentPenaltyTerm.resetToOriginal()
		// store.DTI.resetToOriginal()
		// store.CLTV.resetToOriginal()
		// store.loanTerm.resetToOriginal()
		// store.introRatePeriod.resetToOriginal()
		// store.balloonPayment.resetToOriginal()
		// store.ioPayments.resetToOriginal()
		// store.negativeAm.resetToOriginal()
		// store.otherNonAm.resetToOriginal()
		// store.propertyValue.resetToOriginal()
		// store.manufacturedHomeType.resetToOriginal()
		// store.manufacturedPropertyInterest.resetToOriginal()
		// store.totalUnits.resetToOriginal()
		// store.multifamilyUnits.resetToOriginal()
		// store.submissionOfApplication.resetToOriginal()
		// store.initiallyPayable.resetToOriginal()
		// store.NMLSR.resetToOriginal()
		// store.ausResult1.resetToOriginal()
		// store.ausResult2.resetToOriginal()
		// store.ausResult3.resetToOriginal()
		// store.ausResult4.resetToOriginal()
		// store.ausResult5.resetToOriginal()
		// store.ausResultOther.resetToOriginal()
		// store.ausSystem1.resetToOriginal()
		// store.ausSystem2.resetToOriginal()
		// store.ausSystem3.resetToOriginal()
		// store.ausSystem4.resetToOriginal()
		// store.ausSystem5.resetToOriginal()
		// store.ausSystemOther.resetToOriginal()
		// store.reverseMortgage.resetToOriginal()
		// store.openEndLOC.resetToOriginal()
		// store.businessOrCommercial.resetToOriginal()
	} catch (error) {
		console.log(error);
		return error;
	}
}
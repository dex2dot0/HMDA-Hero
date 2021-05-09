import { get } from 'svelte/store';
import * as store from '../stores.js';

export async function loadEditDataToStore(data, editRow) {
  //Update the store values for display on the edit form.
  try {
    //Store the row being edited so that when the save occurs, we can bind values regardless of whether the ULI has been updated or not
    store.editRow.set(editRow);
    store.editRowData.set(data);
    //Get Loan Number if we have LEI
    let lnNumber = '';
    if (get(store.LEI) !== '' && data[0] !== '') {
      lnNumber = await getLoanNumber(data[0], get(store.LEI));
    }
    store.LoanNumber.set(lnNumber);
    store.ULI.set(data[0]);
    let appDate = data[1];
    let appDateFormatted;
    if (data[1] !== 'NA') {
      appDateFormatted = `${appDate.slice(0, 4)}-${appDate.slice(
        4,
        6
      )}-${appDate.slice(6)}`;
    } else {
      appDateFormatted = 'NA';
    }
    store.appDate.set(appDateFormatted);
    store.loanType.set(data[2]);
    store.loanPurpose.set(data[3]);
    store.preapproval.set(data[4]);
    store.constructionMethod.set(data[5]);
    store.occupancyType.set(data[6]);
    store.loanAmount.set(data[7]);
    store.actionTaken.set(data[8]);
    let atDate = data[9];
    let atFormattedDate = `${atDate.slice(0, 4)}-${atDate.slice(
      4,
      6
    )}-${atDate.slice(6)}`;
    store.actionTakenDate.set(atFormattedDate);
    store.streetAddress.set(data[10]);
    store.city.set(data[11]);
    store.stateCode.set(data[12]);
    store.zipCode.set(data[13]);
    store.countyCode.set(data[14]);
    store.censusTract.set(data[15]);
    store.applicantEth1.set(data[16]);
    store.applicantEth2.set(data[17]);
    store.applicantEth3.set(data[18]);
    store.applicantEth4.set(data[19]);
    store.applicantEth5.set(data[20]);
    store.applicantEthOther.set(data[21]);
    //We could try and check whether or not there is a coApp or not based on some of the data.
    //However, will not try and check the No Co-Applicant checkbox on the Borrower Information screen for the Co-Applicant
    //The checkbox there is meant to allow for automation, not necessarily as a reflection of what has been entered.
    store.coapplicantEth1.set(data[22]);
    store.coapplicantEth2.set(data[23]);
    store.coapplicantEth3.set(data[24]);
    store.coapplicantEth4.set(data[25]);
    store.coapplicantEth5.set(data[26]);
    store.coapplicantEthOther.set(data[27]);
    store.applicantEthBasis.set(data[28]);
    store.coapplicantEthBasis.set(data[29]);
    store.applicantRace1.set(data[30]);
    store.applicantRace2.set(data[31]);
    store.applicantRace3.set(data[32]);
    store.applicantRace4.set(data[33]);
    store.applicantRace5.set(data[34]);
    store.applicantRaceOther1.set(data[35]);
    store.applicantRaceOther2.set(data[36]);
    store.applicantRaceOther3.set(data[37]);
    store.coapplicantRace1.set(data[38]);
    store.coapplicantRace2.set(data[39]);
    store.coapplicantRace3.set(data[40]);
    store.coapplicantRace4.set(data[41]);
    store.coapplicantRace5.set(data[42]);
    store.coapplicantRaceOther1.set(data[43]);
    store.coapplicantRaceOther2.set(data[44]);
    store.coapplicantRaceOther3.set(data[45]);
    store.applicantRaceBasis.set(data[46]);
    store.coapplicantRaceBasis.set(data[47]);
    store.applicantSex.set(data[48]);
    store.coapplicantSex.set(data[49]);
    store.applicantSexBasis.set(data[50]);
    store.coapplicantSexBasis.set(data[51]);
    store.applicantAge.set(data[52]);
    store.coapplicantAge.set(data[53]);
    store.income.set(data[54]);
    store.purchaserType.set(data[55]);
    store.rateSpread.set(data[56]);
    store.hoepa.set(data[57]);
    store.lienStatus.set(data[58]);
    store.applicantCreditScore.set(data[59]);
    store.coapplicantCreditScore.set(data[60]);
    store.applicantCreditModel.set(data[61]);
    store.applicantCreditModelOther.set(data[62]);
    store.coapplicantCreditModel.set(data[63]);
    store.coapplicantCreditModelOther.set(data[64]);
    store.denialReason1.set(data[65]);
    store.denialReason2.set(data[66]);
    store.denialReason3.set(data[67]);
    store.denialReason4.set(data[68]);
    store.denialReasonOther.set(data[69]);
    store.loanCosts.set(data[70]);
    store.pointsFees.set(data[71]);
    store.originationCharges.set(data[72]);
    store.discountPoints.set(data[73]);
    store.lenderCredits.set(data[74]);
    store.interestRate.set(data[75]);
    store.prepaymentPenaltyTerm.set(data[76]);
    store.DTI.set(data[77]);
    store.CLTV.set(data[78]);
    store.loanTerm.set(data[79]);
    store.introRatePeriod.set(data[80]);
    store.balloonPayment.set(data[81]);
    store.ioPayments.set(data[82]);
    store.negativeAm.set(data[83]);
    store.otherNonAm.set(data[84]);
    store.propertyValue.set(data[85]);
    store.manufacturedHomeType.set(data[86]);
    store.manufacturedPropertyInterest.set(data[87]);
    store.totalUnits.set(data[88]);
    store.multifamilyUnits.set(data[89]);
    store.submissionOfApplication.set(data[90]);
    store.initiallyPayable.set(data[91]);
    store.NMLSR.set(data[92]);
    store.ausResult1.set(data[93]);
    store.ausResult2.set(data[94]);
    store.ausResult3.set(data[95]);
    store.ausResult4.set(data[96]);
    store.ausResult5.set(data[97]);
    store.ausResultOther.set(data[98]);
    store.ausSystem1.set(data[99]);
    store.ausSystem2.set(data[100]);
    store.ausSystem3.set(data[101]);
    store.ausSystem4.set(data[102]);
    store.ausSystem5.set(data[103]);
    store.ausSystemOther.set(data[104]);
    store.reverseMortgage.set(data[105]);
    store.openEndLOC.set(data[106]);
    store.businessOrCommercial.set(data[107]);
    store.action.set('edit');
  } catch (error) {
    console.log(error);
    return error;
  }

  async function getLoanNumber(uli, lei) {
    let loanNumber = uli.slice(lei.length, uli.length - 2);
    return loanNumber;
  }
}

import {
  get
} from 'svelte/store';
import * as store from "../stores.js";
import {
  getEndRow
} from "../Excel Scripts/getEndRow.js"

export async function saveDataToExcel(saveType) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        //The row being edited is saved to when the loan is first selected for edit
        //so we can bind directly back to this row
        let editRow;
        console.log(`store.editRow is ${get(store.editRow)}`)
        if (saveType == 'edit') {
          editRow = get(store.editRow)
        } else {
          editRow = await getEndRow()
        }
        console.log(`Save type is ${saveType}. Saving data to row ${editRow}`)

        let sheet = context.workbook.worksheets.getItem("Data");
        let range = sheet.getRange(`B${editRow}:DF${editRow}`);
        // let appDateStr = get(store.appDate)
        // let appDateStrFormatted = (`${appDateStr.slice(0, 4)}${appDateStr.slice(4, 6)}${appDateStr.slice(6)}`)
        // let appDate = get(store.appDateNA) ? 'NA' : appDateStrFormatted.replace('-', '')
        // console.log(get(store.appDateNA))
        // console.log(get(store.appDate))
        // console.log(appDate)
        // range.values = [
        //   [
        //     get(store.LEI),
        //     get(store.ULI),
        //     get(store.appDate),
        //     get(store.loanType),
        //     get(store.loanPurpose),
        //     get(store.preapproval),
        //     get(store.constructionMethod),
        //     get(store.occupancyType),
        //     get(store.loanAmount),
        //     get(store.actionTaken),
        //     get(store.actionTakenDate),
        //     get(store.streetAddress),
        //     get(store.city),
        //     get(store.stateCode),
        //     get(store.zipCode),
        //     get(store.countyCode),
        //     get(store.censusTract),
        //     get(store.applicantEth1),
        //     get(store.applicantEth2),
        //     get(store.applicantEth3),
        //     get(store.applicantEth4),
        //     get(store.applicantEth5),
        //     get(store.applicantEthOther),
        //     get(store.coapplicantEth1),
        //     get(store.coapplicantEth2),
        //     get(store.coapplicantEth3),
        //     get(store.coapplicantEth4),
        //     get(store.coapplicantEth5),
        //     get(store.coapplicantEthOther),
        //     get(store.applicantEthBasis),
        //     get(store.coapplicantEthBasis),
        //     get(store.applicantRace1),
        //     get(store.applicantRace2),
        //     get(store.applicantRace3),
        //     get(store.applicantRace4),
        //     get(store.applicantRace5),
        //     get(store.applicantRaceOther1),
        //     get(store.applicantRaceOther2),
        //     get(store.applicantRaceOther3),
        //     get(store.coapplicantRace1),
        //     get(store.coapplicantRace2),
        //     get(store.coapplicantRace3),
        //     get(store.coapplicantRace4),
        //     get(store.coapplicantRace5),
        //     get(store.coapplicantRaceOther1),
        //     get(store.coapplicantRaceOther2),
        //     get(store.coapplicantRaceOther3),
        //     get(store.applicantRaceBasis),
        //     get(store.coapplicantRaceBasis),
        //     get(store.applicantSex),
        //     get(store.coapplicantSex),
        //     get(store.applicantSexBasis),
        //     get(store.coapplicantSexBasis),
        //     get(store.applicantAge),
        //     get(store.coapplicantAge),
        //     get(store.income),
        //     get(store.purchaserType),
        //     get(store.rateSpread),
        //     get(store.hoepa),
        //     get(store.lienStatus),
        //     get(store.applicantCreditScore),
        //     get(store.coapplicantCreditScore),
        //     get(store.applicantCreditModel),
        //     get(store.applicantCreditModelOther),
        //     get(store.coapplicantCreditModel),
        //     get(store.coapplicantCreditModelOther),
        //     get(store.denialReason1),
        //     get(store.denialReason2),
        //     get(store.denialReason3),
        //     get(store.denialReason4),
        //     get(store.denialReasonOther),
        //     get(store.loanCosts),
        //     get(store.pointsFees),
        //     get(store.originationCharges),
        //     get(store.discountPoints),
        //     get(store.lenderCredits),
        //     get(store.interestRate),
        //     get(store.prepaymentPenaltyTerm),
        //     get(store.DTI),
        //     get(store.CLTV),
        //     get(store.loanTerm),
        //     get(store.introRatePeriod),
        //     get(store.balloonPayment),
        //     get(store.ioPayments),
        //     get(store.negativeAm),
        //     get(store.otherNonAm),
        //     get(store.propertyValue),
        //     get(store.manufacturedHomeType),
        //     get(store.manufacturedPropertyInterest),
        //     get(store.totalUnits),
        //     get(store.multifamilyUnits),
        //     get(store.submissionOfApplication),
        //     get(store.intiallyPayable),
        //     get(store.NMLSR),
        //     get(store.ausSystem1),
        //     get(store.ausSystem2),
        //     get(store.ausSystem3),
        //     get(store.ausSystem4),
        //     get(store.ausSystem5),
        //     get(store.ausSystemOther),
        //     get(store.ausResult1),
        //     get(store.ausResult2),
        //     get(store.ausResult3),
        //     get(store.ausResult4),
        //     get(store.ausResult5),
        //     get(store.ausResultOther),
        //     get(store.reverseMortgage),
        //     get(store.openEndLOC),
        //     get(store.businessorCommercial)
        //   ]
        // ]
        // range.format.autofitColumns();
        resolve(context.sync());
      });
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}
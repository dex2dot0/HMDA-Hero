import {
  writable,
  get
} from 'svelte/store';
import {
  updateCell
} from './Excel Scripts/updateCell.js'

async function updateValue(value, column) {
  if (process.browser && editRowVal !== '') {
    console.log(`Updating cell ${column}${editRowVal} with value ${value}`)
    updateCell(value, `${column}${editRowVal}`)
  }
}

export const action = writable('add')
export const visible = writable(false)
export const isExempt = writable(false)
export const editRow = writable('')
let editRowVal
editRow.subscribe(value => {
  editRowVal = value
})

//Automation helper
function NoCoAppUpdate() {
  const {
    subscribe,
    update
  } = writable(false);

  return {
    subscribe,
    changed: () => update(n => !n)
  };
}

export const NoCoApp = NoCoAppUpdate()
export const LoanNumber = writable('')

//Reportable fields
function LEIFn() {
  let editColumn = 'B';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const LEI = LEIFn()

function ULIFn() {
  let editColumn = 'C';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ULI = ULIFn()

function appDateFn() {
  let editColumn = 'D';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    change: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue((`${val.slice(0, 4)}${val.slice(5, 7)}${val.slice(8)}`), editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue((`${val.slice(0, 4)}${val.slice(5, 7)}${val.slice(8)}`), editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue((`${originalVal.slice(0, 4)}${originalVal.slice(5, 7)}${originalVal.slice(8)}`), editColumn)
  }
}

export const appDate = appDateFn()

function loanTypeFn() {
  let editColumn = 'E';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
      console.log(`loan type original val set to ${originalVal}`)
    },
    resetToOriginal: () => {
      console.log(`reset to original called for loan type, resetting to ${originalVal}`)
      updateValue(originalVal, editColumn);
      //set(originalVal)
    }
  }
}

export const loanType = loanTypeFn()

function loanPurposeFn() {
  let editColumn = 'F';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const loanPurpose = loanPurposeFn()

function preapprovalFn() {
  let editColumn = 'G';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const preapproval = preapprovalFn();

function constructionMethodFn() {
  let editColumn = 'H';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const constructionMethod = constructionMethodFn();

function occupancyTypeFn() {
  let editColumn = 'I';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const occupancyType = occupancyTypeFn();

function loanAmountFn() {
  let editColumn = 'J';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const loanAmount = loanAmountFn();

function actionTakenFn() {
  let editColumn = 'K';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const actionTaken = actionTakenFn();

function actionTakenDateFn() {
  let editColumn = 'L';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      let dt = val.replace('-', '')
      let dtFormatted = dt.replace('-', '')
      updateValue(dtFormatted, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      let dt = originalVal.replace('-', '')
      let dtFormatted = dt.replace('-', '')
      updateValue(dtFormatted, editColumn);
    }
  }
}

export const actionTakenDate = actionTakenDateFn();

function streetAddressFn() {
  let editColumn = 'M';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const streetAddress = streetAddressFn()

function cityFn() {
  let editColumn = 'N';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const city = cityFn()

function stateCodeFn() {
  let editColumn = 'O';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const stateCode = stateCodeFn()

function zipCodeFn() {
  let editColumn = 'P';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const zipCode = zipCodeFn()

function countyCodeFn() {
  let editColumn = 'Q';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const countyCode = countyCodeFn()

function censusTractFn() {
  let editColumn = 'R';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const censusTract = censusTractFn()

function applicantEth1Fn() {
  let editColumn = 'S';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEth1 = applicantEth1Fn();

function applicantEth2Fn() {
  let editColumn = 'T';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEth2 = applicantEth2Fn();

function applicantEth3Fn() {
  let editColumn = 'U';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEth3 = applicantEth3Fn();

function applicantEth4Fn() {
  let editColumn = 'V';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEth4 = applicantEth4Fn();

function applicantEth5Fn() {
  let editColumn = 'W';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEth5 = applicantEth5Fn();

function applicantEthOtherFn() {
  let editColumn = 'X';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEthOther = applicantEthOtherFn();

function coapplicantEth1Fn() {
  let editColumn = 'Y';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEth1 = coapplicantEth1Fn();

function coapplicantEth2Fn() {
  let editColumn = 'Z';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEth2 = coapplicantEth2Fn();

function coapplicantEth3Fn() {
  let editColumn = 'AA';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEth3 = coapplicantEth3Fn();

function coapplicantEth4Fn() {
  let editColumn = 'AB';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEth4 = coapplicantEth4Fn();

function coapplicantEth5Fn() {
  let editColumn = 'AC';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEth5 = coapplicantEth5Fn();

function coapplicantEthOtherFn() {
  let editColumn = 'AD';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEthOther = coapplicantEthOtherFn();

function applicantEthBasisFn() {
  let editColumn = 'AE';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantEthBasis = applicantEthBasisFn();

function coapplicantEthBasisFn() {
  let editColumn = 'AF';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantEthBasis = coapplicantEthBasisFn();

function applicantRace1Fn() {
  let editColumn = 'AG';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRace1 = applicantRace1Fn();

function applicantRace2Fn() {
  let editColumn = 'AH';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRace2 = applicantRace2Fn();

function applicantRace3Fn() {
  let editColumn = 'AI';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRace3 = applicantRace3Fn();

function applicantRace4Fn() {
  let editColumn = 'AJ';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRace4 = applicantRace4Fn();

function applicantRace5Fn() {
  let editColumn = 'AK';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRace5 = applicantRace5Fn();

function applicantRaceOther1Fn() {
  let editColumn = 'AL';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRaceOther1 = applicantRaceOther1Fn();

function applicantRaceOther2Fn() {
  let editColumn = 'AM';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRaceOther2 = applicantRaceOther2Fn();

function applicantRaceOther3Fn() {
  let editColumn = 'AN';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRaceOther3 = applicantRaceOther3Fn();

function coapplicantRace1Fn() {
  let editColumn = 'AO';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRace1 = coapplicantRace1Fn();

function coapplicantRace2Fn() {
  let editColumn = 'AP';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRace2 = coapplicantRace2Fn();

function coapplicantRace3Fn() {
  let editColumn = 'AQ';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRace3 = coapplicantRace3Fn();

function coapplicantRace4Fn() {
  let editColumn = 'AR';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRace4 = coapplicantRace4Fn();

function coapplicantRace5Fn() {
  let editColumn = 'AS';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRace5 = coapplicantRace5Fn();

function coapplicantRaceOther1Fn() {
  let editColumn = 'AT';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRaceOther1 = coapplicantRaceOther1Fn();

function coapplicantRaceOther2Fn() {
  let editColumn = 'AU';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRaceOther2 = coapplicantRaceOther2Fn();

function coapplicantRaceOther3Fn() {
  let editColumn = 'AV';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRaceOther3 = coapplicantRaceOther3Fn();

function applicantRaceBasisFn() {
  let editColumn = 'AW';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantRaceBasis = applicantRaceBasisFn();

function coapplicantRaceBasisFn() {
  let editColumn = 'AX';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantRaceBasis = coapplicantRaceBasisFn();

function applicantSexFn() {
  let editColumn = 'AY';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantSex = applicantSexFn();

function coapplicantSexFn() {
  let editColumn = 'AZ';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantSex = coapplicantSexFn();

function applicantSexBasisFn() {
  let editColumn = 'BA';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantSexBasis = applicantSexBasisFn();

function coapplicantSexBasisFn() {
  let editColumn = 'BB';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantSexBasis = coapplicantSexBasisFn();

function applicantAgeFn() {
  let editColumn = 'BC';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const applicantAge = applicantAgeFn()


function coapplicantAgeFn() {
  let editColumn = 'BD';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const coapplicantAge = coapplicantAgeFn()

function incomeFn() {
  let editColumn = 'BE';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const income = incomeFn();

function purchaserTypeFn() {
  let editColumn = 'BF';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const purchaserType = purchaserTypeFn();

function rateSpreadFn() {
  let editColumn = 'BG';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const rateSpread = rateSpreadFn();

function hoepaFn() {
  let editColumn = 'BH';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const hoepa = hoepaFn();

function lienStatusFn() {
  let editColumn = 'BI';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const lienStatus = lienStatusFn();

function applicantCreditScoreFn() {
  let editColumn = 'BJ';
  let val;
  let originalVal = '';
  let isNAN = false;
  let isNA = false;
  let isExempt = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      isNAN ? isNAN = false : ''
      isNA ? isNA = false : ''
      isExempt ? isExempt = false : ''
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NAN: () => {
      isNAN = !isNAN
      if (isNAN) {
        updateValue('7777', editColumn);
        set('7777')
        isNA = false
        isExempt = false
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    NA: () => {
      isNA = !isNA
      if (isNA) {
        updateValue('8888', editColumn);
        set('8888')
        isNAN = false
        isExempt = false
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    Exempt: () => {
      isExempt = !isExempt
      if (isExempt) {
        updateValue('1111', editColumn);
        set('1111')
        isNAN = false
        isNA = false
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
      e == '7777' ? isNAN = true : ''
      e == '8888' ? isNA = true : ''
      e == '1111' ? isExempt = true : ''
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantCreditScore = applicantCreditScoreFn();

function coapplicantCreditScoreFn() {
  let editColumn = 'BK';
  let val;
  let originalVal = '';
  let isNAN = false;
  let isNA = false;
  let isExempt = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      isNAN ? isNAN = false : ''
      isNA ? isNA = false : ''
      isExempt ? isExempt = false : ''
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NAN: () => {
      isNAN = !isNAN
      if (isNAN) {
        updateValue('7777', editColumn);
        set('7777')
        isNA = false
        isExempt = false
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    NA: () => {
      isNA = !isNA
      if (isNA) {
        updateValue('8888', editColumn);
        set('8888')
        isNAN = false
        isExempt = false
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    Exempt: () => {
      isExempt = !isExempt
      if (isExempt) {
        updateValue('1111', editColumn);
        set('1111')
        isNAN = false
        isNA = false
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
      e == '7777' ? isNAN = true : ''
      e == '8888' ? isNA = true : ''
      e == '1111' ? isExempt = true : ''
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantCreditScore = coapplicantCreditScoreFn();

function applicantCreditModelFn() {
  let editColumn = 'BL';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantCreditModel = applicantCreditModelFn();

function applicantCreditModelOtherFn() {
  let editColumn = 'BM';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const applicantCreditModelOther = applicantCreditModelOtherFn();

function coapplicantCreditModelFn() {
  let editColumn = 'BN';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantCreditModel = coapplicantCreditModelFn();

function coapplicantCreditModelOtherFn() {
  let editColumn = 'BO';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const coapplicantCreditModelOther = coapplicantCreditModelOtherFn();

function denialReason1Fn() {
  let editColumn = 'BP';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const denialReason1 = denialReason1Fn();

function denialReason2Fn() {
  let editColumn = 'BQ';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const denialReason2 = denialReason2Fn();

function denialReason3Fn() {
  let editColumn = 'BR';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const denialReason3 = denialReason3Fn();

function denialReason4Fn() {
  let editColumn = 'BS';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const denialReason4 = denialReason4Fn();

function denialReasonOtherFn() {
  let editColumn = 'BT';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const denialReasonOther = denialReasonOtherFn();

function loanCostFn() {
  let editColumn = 'BU';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const loanCosts = loanCostFn()

function pointsFeesFn() {
  let editColumn = 'BV';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const pointsFees = pointsFeesFn()

function originationChargesFn() {
  let editColumn = 'BW';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const originationCharges = originationChargesFn()

function discountPointsFn() {
  let editColumn = 'BX';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const discountPoints = discountPointsFn()

function lenderCreditsFn() {
  let editColumn = 'BY';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const lenderCredits = lenderCreditsFn()

function interestRateFn() {
  let editColumn = 'BZ';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const interestRate = interestRateFn()

function prepaymentPenaltyTermFn() {
  let editColumn = 'CA';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const prepaymentPenaltyTerm = prepaymentPenaltyTermFn()

function DTIFn() {
  let editColumn = 'CB';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const DTI = DTIFn();

function CLTVFn() {
  let editColumn = 'CC';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const CLTV = CLTVFn();

function loanTermFn() {
  let editColumn = 'CD';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const loanTerm = loanTermFn()

function introRatePeriodFn() {
  let editColumn = 'CE';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const introRatePeriod = introRatePeriodFn()

function balloonPaymentFn() {
  let editColumn = 'CF';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const balloonPayment = balloonPaymentFn();

function ioPaymentsFn() {
  let editColumn = 'CG';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ioPayments = ioPaymentsFn();

function negativeAmFn() {
  let editColumn = 'CH';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const negativeAm = negativeAmFn();

function otherNonAmFn() {
  let editColumn = 'CI';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const otherNonAm = otherNonAmFn();

function propertyValueFn() {
  let editColumn = 'CJ';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const propertyValue = propertyValueFn()

function manufacturedHomeTypeFn() {
  let editColumn = 'CK';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const manufacturedHomeType = manufacturedHomeTypeFn();

function manufacturedPropertyInterestFn() {
  let editColumn = 'CL';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const manufacturedPropertyInterest = manufacturedPropertyInterestFn();

function totalUnitsFn() {
  let editColumn = 'CM';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const totalUnits = totalUnitsFn();

function multifamilyUnitsFn() {
  let editColumn = 'CN';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const multifamilyUnits = multifamilyUnitsFn()

function submissionOfApplicationFn() {
  let editColumn = 'CO';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const submissionOfApplication = submissionOfApplicationFn();

function initiallyPayableFn() {
  let editColumn = 'CP';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const initiallyPayable = initiallyPayableFn();

function NMLSRFn() {
  let editColumn = 'CQ';
  let val;
  let originalVal = '';
  let isNA = false;
  const {
    subscribe,
    set,
    update
  } = writable('');

  //We need to be able to 
  return {
    subscribe,
    set,
    reset: () => set(''),
    changed: (e) => {
      isNA ? val = false : '';
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    NA: (e) => {
      isNA = e.detail;
      if (isNA) {
        updateValue('NA', editColumn);
        set('NA')
      } else {
        val ? updateValue(val, editColumn) : updateValue('', editColumn)
        set(val)
      }
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => updateValue(originalVal, editColumn)
  }
}

export const NMLSR = NMLSRFn()

function ausSystem1Fn() {
  let editColumn = 'CR';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausSystem1 = ausSystem1Fn();

function ausSystem2Fn() {
  let editColumn = 'CS';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausSystem2 = ausSystem2Fn();

function ausSystem3Fn() {
  let editColumn = 'CT';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausSystem3 = ausSystem3Fn();

function ausSystem4Fn() {
  let editColumn = 'CU';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausSystem4 = ausSystem4Fn();

function ausSystem5Fn() {
  let editColumn = 'CV';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausSystem5 = ausSystem5Fn();

function ausSystemOtherFn() {
  let editColumn = 'CW';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausSystemOther = ausSystemOtherFn();

function ausResult1Fn() {
  let editColumn = 'CX';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausResult1 = ausResult1Fn();

function ausResult2Fn() {
  let editColumn = 'CY';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausResult2 = ausResult2Fn();

function ausResult3Fn() {
  let editColumn = 'CZ';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausResult3 = ausResult3Fn();

function ausResult4Fn() {
  let editColumn = 'DA';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausResult4 = ausResult4Fn();

function ausResult5Fn() {
  let editColumn = 'DB';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausResult5 = ausResult5Fn();

function ausResultOtherFn() {
  let editColumn = 'DC';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const ausResultOther = ausResultOtherFn();

function reverseMortgageFn() {
  let editColumn = 'DD';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const reverseMortgage = reverseMortgageFn();

function openEndLOCFn() {
  let editColumn = 'DE';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const openEndLOC = openEndLOCFn();

function businessOrCommercialFn() {
  let editColumn = 'DF';
  let val;
  let originalVal = '';
  const {
    subscribe,
    set,
    update
  } = writable('');

  return {
    subscribe,
    set,
    change: (e) => {
      val = e.target.value;
      set(val);
      updateValue(val, editColumn);
    },
    originalValue: (e) => {
      originalVal = e;
      val = e;
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
    }
  }
}

export const businessOrCommercial = businessOrCommercialFn();
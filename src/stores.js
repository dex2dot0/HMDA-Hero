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
    resetToOriginal: () => updateValue((`${Originalval.slice(0, 4)}${Originalval.slice(5, 7)}${Originalval.slice(8)}`), editColumn)
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
    },
    resetToOriginal: () => {
      updateValue(originalVal, editColumn);
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
      let dt = val.replace('-', '')
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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



export const purchaserType = writable('')
export const rateSpread = writable('')
export const hoepa = writable('')
export const lienStatus = writable('')
export const applicantCreditScore = writable('')
export const coapplicantCreditScore = writable('')
export const appScoreNAN = writable('')
export const appScoreNA = writable('')
export const appScoreExempt = writable('')
export const coappScoreNAN = writable('')
export const coappScoreNA = writable('')
export const coappScoreExempt = writable('')
export const applicantCreditModel = writable('')
export const applicantCreditModelOther = writable('')
export const coapplicantCreditModel = writable('')
export const coapplicantCreditModelOther = writable('')
export const denialReason1 = writable('')
export const denialReason2 = writable('')
export const denialReason3 = writable('')
export const denialReason4 = writable('')
export const denialReasonOther = writable('')

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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
  }
}

export const prepaymentPenaltyTerm = prepaymentPenaltyTermFn()

export const DTI = writable('')
export const CLTV = writable('')

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
    resetToOriginal: () => updateValue(Originalval, editColumn)
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
    resetToOriginal: () => updateValue(Originalval, editColumn)
  }
}

export const introRatePeriod = introRatePeriodFn()
export const balloonPayment = writable('')
export const ioPayments = writable('')
export const negativeAm = writable('')
export const otherNonAm = writable('')

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
    resetToOriginal: () => updateValue(Originalval, editColumn)
  }
}

export const propertyValue = propertyValueFn()
export const manufacturedHomeType = writable('')
export const manufacturedPropertyInterest = writable('')
export const totalUnits = writable('')

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
    resetToOriginal: () => updateValue(Originalval, editColumn)
  }
}

export const multifamilyUnits = multifamilyUnitsFn()
export const submissionOfApplication = writable('')
export const intiallyPayable = writable('')

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
    resetToOriginal: () => updateValue(Originalval, editColumn)
  }
}

export const NMLSR = NMLSRFn()
export const ausSystem1 = writable('')
export const ausSystem2 = writable('')
export const ausSystem3 = writable('')
export const ausSystem4 = writable('')
export const ausSystem5 = writable('')
export const ausSystemOther = writable('')
export const ausResult1 = writable('')
export const ausResult2 = writable('')
export const ausResult3 = writable('')
export const ausResult4 = writable('')
export const ausResult5 = writable('')
export const ausResultOther = writable('')
export const reverseMortgage = writable('')
export const openEndLOC = writable('')
export const businessorCommercial = writable('')
<script>
  let d = new Date();
  let Year = d.getFullYear();
  //Month is 0-11, Jan = 0
  let Month = d.getMonth();
  let filingYear;
  let excelEnv = "online";
  let girGuide = "https://www.ffiec.gov/hmda/pdf/2019guide.pdf";
  let fiGuide =
    "https://s3.amazonaws.com/cfpb-hmda-public/prod/help/2019-hmda-fig.pdf";

  switch (Year) {
    case 2020:
      filingYear = 2019;
      break;
    case 2021:
      //Handling for future to occur here...
      Month < 12 ? (filingYear = 2019) : (filingYear = 2020); //Just change Month based on month we publish updated resources
      break;
    default:
      break;
  }

  (async () => {
    if (process.browser) {
      await Office.onReady().then(async function() {
        if (window.top == window) {
          // the add-in is not running in Excel Online
          excelEnv = "desktop";
          girGuide = "https://www.ffiec.gov/hmda/guide.htm";
          fiGuide = "https://ffiec.cfpb.gov/documentation/2020/fig/";
        }
      });
    }
  })();
</script>

<style>
  .container {
    text-align: center;
    max-width: 90%;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 90%;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 80%;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 70%;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 60%;
    }
  }

  .header {
    padding: 0;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #323130;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  h3 {
    color: #4e9668;
  }

  .card {
    width: 100%;
  }

  a {
    text-align: center !important;
    width: 100%;
  }
</style>

<div class="container">
  <form class="shadow-sm mb-5 bg-white rounded">
    <div class="header">
      <h3>Resources</h3>
    </div>
    <div class="card">
      <div class="card-body">
        <h5>{filingYear} Filing Resources</h5>
        {#if filingYear == 2019}
          <div class="row">
            <a target="_blank" href={girGuide}>Getting It Right Guide</a>
          </div>
          {#if excelEnv == 'online'}
            <div class="row">
              <a
                target="_blank"
                href="https://files.consumerfinance.gov/f/documents/cfpb_hmda_small-entity-compliance-guide_2020.pdf">
                Small Entity Compliance Guide
              </a>
            </div>
          {/if}
          <div class="row">
            <a target="_blank" href={fiGuide}>Filing Instructions Guide</a>
          </div>
          {#if excelEnv == 'online'}
            <div class="row">
              <a
                target="_blank"
                href="https://files.consumerfinance.gov/f/documents/cfpb_reportable-hmda-data_regulatory-and-reporting-overview-reference-chart-2019.pdf">
                Filing Overview Reference Chart
              </a>
            </div>
          {/if}
          <div class="row">
            <a
              target="_blank"
              href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
              HMDA Help Search
            </a>
          </div>
        {/if}
        <div class="row">
          <a
            target="_blank"
            href="https://www.consumerfinance.gov/policy-compliance/guidance/mortgage-resources/hmda-reporting-requirements/">
            CFPB HMDA Resources Page
          </a>
        </div>
      </div>
    </div>
  </form>
</div>

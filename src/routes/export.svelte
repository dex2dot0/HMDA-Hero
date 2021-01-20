<script>
    import Modal from "../components/Modal.svelte";
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
  </style>
  
  <div class="container">
    <form class="shadow-sm mb-5 bg-white rounded">
      <div class="header">
        <h3>EXPORT</h3>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="mr-2" style="text-align:left;">
            Pipe-delimited
            <Modal
              idName="pipeDelimited"
              modalTitle="CFPB Pipe-delimited Formatted Text File"
              tabindex="-1"
              modalBody="<p>Hello World!</p>" />
          </h5>
          <div class="input-group align-items-end">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="pipe"
                on:change=""
                accept="text/plain" />
              <label
                class="custom-file-label"
                for="pipe"
                style="text-align:left;">
                Choose file
              </label>
            </div>
          </div>
          <p
            style="text-align:left;font-size:11px;background-color:#fff;padding:10px;"
            id="pipeError" />
        </div>
      </div>
    </form>
  </div>
  
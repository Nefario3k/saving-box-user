<template>
  <div>
    <div class="mb-4 right-drawer-title">
      <h1>Loan Application</h1>
      <p>Enter your Bio Data</p>
    </div>

    <div class="col-12">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >Reason for Loan</label
      >
      <input
        type="text"
        class="form-control input-design dark__input"
        id="exampleFormControlInput1"
        placeholder="Reason for Loan"
      />
    </div>

    <div class="col-12">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >Phone Number</label
      >
      <input
        type="text"
        class="form-control input-design dark__input"
        id="exampleFormControlInput1"
        placeholder="Phone Number"
      />
    </div>

    <div class="col-12">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >{{ addressLabel }}
      </label>
      <input
        type="text"
        placeholder="Business Address"
        class="form-control input-design dark__input"
        aria-label="Business Address"
      />
    </div>

    <div class="col-12">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >Enter Amount</label
      >
      <div
        style="
          box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
          border-radius: 8px;
        "
        class="input-group"
      >
        <label
          for="loanAmount"
          class="input-group-text input-design dark__input"
        >
          <!-- ₦ -->
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.304 12V0.12H5.13L8.856 6.942L9.882 9.012H9.918L9.846 7.14V0.12H12.006V12H9.18L5.526 5.358L4.428 3.162H4.41L4.464 5.106V12H2.304ZM0.306 6.834V5.268H14.004V6.834H0.306Z"
              fill="#666B70"
            />
          </svg>
        </label>
        <input
          id="loanAmount"
          type="text"
          class="form-control input-design dark__input"
          aria-label="Amount (to the nearest naira)"
        />
        <label
          for="loanAmount"
          class="input-group-text input-design dark__input secondLabel"
          style="
            font-weight: 400px;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.5);
            text-transform: capitalize;
          "
          >Max, Amount ₦100,000</label
        >
      </div>
    </div>

    <div class="col-12">
      <label for="exampleFormControlInput1" class="form-label label-design"
        >Period (1 to 12 Months)</label
      >
      <select class="form-select input-design dark__input">
        <option value="">1 Month</option>
        <option value="">4 Month</option>
        <option value="">8 Month</option>
        <option value="">12 Month</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  props: { addressType: { Type: String, default: null } },
  computed: {
    addressLabel() {
      return this.addressType ? this.addressType + " " + "Address" : "Address";
    },
  },
};
</script>
<style scoped>
div.col-12 {
  padding-right: 0;
}
</style>
<template>
  <div v-if="step == 1" class="autobox-details-card">
    <div class="mb-3 right-drawer-title">
      <h1 class="">Children’s Fee Plan</h1>
      <p>Autobox</p>
    </div>
    <!--  -->
    <AutoboxDetailsCard></AutoboxDetailsCard>

    <div class="description mt-8">
      <h3>Description</h3>
      <p>This is a one-time savings option in which users invest</p>
    </div>

    <div class="pay-info row my-3">
      <div class="col-8">
        <h3>Payment Due in 15 days</h3>
        <p>
          <v-icon>mdi-menu-up</v-icon>
          <span style="font-weight: 500; font-size: 14px; color: #666b70">
            ₦1,000 (10%)
          </span>
          <span style="font-weight: 400; font-size: 12px; color: #999c9f"
            >Earned all time</span
          >
        </p>
      </div>
      <div class="col text-right">
        <h3>₦1,000 /Day</h3>
        <p style="font-weight: 400; font-size: 12px; color: #666b70">
          Deposit Amount
        </p>
      </div>
    </div>

    <div class="autobox-summary-box mt-6">
      <div class="row">
        <div class="col-6">
          <div class="summary-item">
            <h4>Amount per Week</h4>
            <p>₦1000</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Started Date</h4>
            <p>22 Aug. 2022</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Target Due Amount</h4>
            <p>₦100,000</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Due Date</h4>
            <p>22 April. 2023</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Funding Source</h4>
            <p>SavingsBox Wallet</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Frequency</h4>
            <p>Weekly</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Interest Rate</h4>
            <p>10 %</p>
          </div>
        </div>

        <div class="col-6">
          <div class="summary-item">
            <h4>Period</h4>
            <p>6 Months</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 35px">
      <div class="col-md-6">
        <button
          class="btn btn-primary btn-outline-design btn-design"
          @click="setAction()"
        >
          Edit
        </button>
      </div>
      <div class="col-md-6">
        <button
          class="btn btn-primary btn-design"
          @click="setAction('liquidation')"
        >
          Liquidate
        </button>
      </div>
    </div>

    <div class="" style="margin-top: 35px">
      <v-tabs
        v-model="invoicesTab"
        background-color="transparent"
        color="basil"
        grow
        class="v-tabs-styles"
        style="background-color: rgba(246, 246, 246, 1)"
      >
        <v-tab :ripple="false"> Pending Invoices </v-tab>

        <v-tab :ripple="false"> Overdue </v-tab>

        <v-tab :ripple="false"> Paid Invoice </v-tab>
      </v-tabs>

      <v-tabs-items
        v-model="invoicesTab"
        style="
          padding-left: 10px;
          padding-right: 10px;
          min-height: 300px;
          background-color: transparent;
        "
      >
        <v-tab-item>
          <!-- invoice-item -->
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
        </v-tab-item>

        <v-tab-item>
          <!-- empty state -->
          <InvoiceEmptyState />
        </v-tab-item>

        <v-tab-item>
          <!-- empty state -->
          <InvoiceEmptyState />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
  <section v-else class="">
    <template v-if="isEditing && step == 2">
      <div class="right-drawer-title">
        <h1>Edit Plan</h1>
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Plan Title</label
        >
        <input
          type="text"
          class="form-control input-design"
          id="exampleFormControlInput1"
          placeholder="Plan name"
        />
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design"
          >Description</label
        >
        <textarea
          rows="4"
          class="form-control input-design"
          id="exampleFormControlInput1"
          placeholder="Describe your plan"
          style="height: 100px"
        >
        </textarea>
      </div>
      <div class="col-12" style="margin-top: 100px">
        <button class="btn btn-primary btn-design" @click.prevent="step = 3">
          Update
        </button>
      </div>
    </template>
    <template v-if="isLiquidating && step == 2">
      <div class="mb-0 right-drawer-title">
        <h1>Are you sure you want to liquidate this plan?</h1>
      </div>
      <div class="col-12">
        <label for="exampleFormControlInput1" class="form-label label-design">
          Please, Kindly let us know the reason for liquidating your investment.
        </label>
        <select
          style="
            background-color: transparent !important;
            border: 0.5px solid #d8d8d8 !important;
            box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.02);
            border-radius: 8px;
          "
          class="mt-1 form-select input-design"
        >
          <option value="">I am not interested anymore</option>
          <option value="">I was treated badly</option>
        </select>
      </div>
      <p class="mb-5 mt-3">
        Kindly note that if you wish to liquidate your investment, you will lose
        your accrued interest on your capital.
      </p>
      <p class="mb-5 mt-3">
        If you have any complaint, reach our support team at
        <a href="mailto:support@savingsbox.com"
          ><strong style="color: #4169e1">support@savingsbox.com</strong></a
        >
      </p>
      <p class="mb-5 mt-3">Do you wish to continue?</p>
      <div class="col-12">
        <label
          for="exampleFormControlInput1"
          class="mb-1 form-label label-design"
          >Enter your Password</label
        >
        <div
          style="
            box-shadow: 0px 0px 0px 3px rgba(65, 105, 225, 0.1);
            border-radius: 8px;
          "
          class="input-group"
        >
          <input
            type="password"
            placeholder="Enter Password"
            class="form-control input-design lefting"
            aria-label="Enter Password Here"
          />
        </div>
      </div>
      <div class="row" style="margin-top: 35px">
        <div class="col-md-6">
          <button
            class="btn btn-primary btn-design btn-outline-design"
            @click="step = 1"
          >
            Cancel
          </button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-primary btn-design" @click="step = 3">
            Liquidate
          </button>
        </div>
      </div>
    </template>
    <template v-if="step == 3">
      <success-screen
        :title="successMessage.title"
        :body="successMessage.body"
      ></success-screen>
    </template>
  </section>
</template>

<script lang="js">
import AutoboxDetailsCard from "@/components/savings/autobox/AutoboxDetailsCard.vue";
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import InvoiceEmptyState from "@/components/invoice/EmptyState.vue";
import SuccessScreen from "~/components/loan/form/SuccessScreen.vue";
export default {
  components: {
    AutoboxDetailsCard,
    InvoiceCard,
    InvoiceEmptyState,
    SuccessScreen,
  },
  data() {
    return {
      showSavingsDetails: false,
      invoicesTab: null,
      isEditing: false,
      isLiquidating: false,
      step: 1,
      successMessage: {
        title: 'Plan Updated',
        body: 'Your plan is successfully updated',
      }
    };
  },
  methods: {
    setAction(action) {
      this.step = 2;
      if (action == 'liquidation') {
        this.isLiquidating = true;
        this.isEditing = false
        this.successMessage = {
          title: "Plan Liquidated",
          body: "Your plan is successfully liquidated"
        }
      } else {
        this.isLiquidating = false;
        this.isEditing = true;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0rem;
  padding: 0rem;
}

div.description {
  p {
    color: #999c9f;
    font-size: 1.4rem;
  }
}

.pay-info {
  font-size: 1.4rem;
  border-radius: var(--normal-radius);
  border: 1px solid #e7e7e7;
}

.autobox-summary-box {
  padding: 0.2rem;
  border: none;

  .col-6 {
    padding: 0rem;

    &:nth-child(odd) {
      padding-right: 0.6rem;
    }

    &:nth-child(even) {
      padding-left: 0.6rem;
    }
  }

  .summary-item {
    border: 1px solid #e7e7e7;
    padding: 1.4rem 2.1rem;
    border-radius: var(--normal-radius);
  }
}

.btn-design {
  height: 5rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: 1.8rem;
  &.btn-outline-design {
    background-color: transparent;
  }
}
</style>

<template>
    <div class="autobox-details-card">
        <h1 class="autobox-details-title">Loan Details</h1>
        <p class="mt-n5">SME Loan</p>
        <!--  -->

        <div class="autobox-card">
            <div class="d-flex justify-content-between">
                <h1 class="autobox-card-title" @click="showSavingsDetails = true">
                    SME Loan
                </h1>
                <div class="autobox-card-amount">
                    <h1>₦100,000</h1>
                    <p>Amount Borrowed</p>
                </div>
            </div>


            <div class="simple-card-progress">
                <v-progress-linear rounded value="10" height="8px" background-color="rgba(227, 227, 227, 1)"
                    color="rgba(97, 202, 97, 1)"></v-progress-linear>
                <div class="d-flex justify-content-between mt-2">
                    <small class="text-left">10% Completed</small>
                    <small class="text-right">6 Months Left</small>
                </div>
            </div>
        </div>

        <div class="next-repayment d-flex justify-space-between align-center">
            <div class="">
                <h4>Next Repayment Date</h4>
                <span>12 Feb. 2023</span>
            </div>
            <span class="">₦12,000</span>
        </div>

        <div class="autobox-summary-box" style="margin-top: 45px">
            <div class="row">
                <div class="col-6">
                    <div class="summary-item">
                        <h4>Loan Amount</h4>
                        <p>₦100,000</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Purpose</h4>
                        <p>Business</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Interest Rate</h4>
                        <p>12%</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Interest Amount</h4>
                        <p>₦20,000</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Period</h4>
                        <p>12 Months</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Repayment Date</h4>
                        <p>22 April. 2023</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Due Amount</h4>
                        <p>₦120,000</p>
                    </div>
                </div>

                <div class="col-6">
                    <div class="summary-item">
                        <h4>Montly Repayment</h4>
                        <p>₦12,000</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="" style="margin-top: 35px">
            <v-tabs v-model="invoicesTab" background-color="transparent" color="basil" grow style="
          border-radius: 8px;
          height: 50px;
          margin-bottom: 20px;
          background-color: rgba(246, 246, 246, 1);
        ">
                <v-tab> Pending Invoices </v-tab>

                <v-tab> Overdue </v-tab>

                <v-tab> Paid Invoice </v-tab>
            </v-tabs>

            <v-tabs-items v-model="invoicesTab" style="
          padding-left: 10px;
          padding-right: 10px;
          min-height: 300px;
          background-color: transparent;
        ">
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
</template>

<script lang="js">
import AutoboxDetailsCard from "@/components/savings/autobox/AutoboxDetailsCard.vue";
import InvoiceCard from "@/components/invoice/InvoiceCard.vue";
import InvoiceEmptyState from "@/components/invoice/EmptyState.vue";
export default {
    components: {
        AutoboxDetailsCard,
        InvoiceCard,
        InvoiceEmptyState,
    },
    data() {
        return {
            showSavingsDetails: false,
            invoicesTab: null
        };
    },
    // page properties go here
};
</script>

<style lang="scss" scoped>
.autobox-details-title {
    color: rgba(0, 8, 16, 1);
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 23px;
}

/* tab */
.v-tabs-bar .v-tab:not(.v-tab--active) {
    color: rgba(102, 107, 112, 1) !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    text-transform: capitalize;
}

.v-tab--active {
    background-color: #ffffff;
    margin: 3px 3px 2px 3px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    color: rgba(65, 105, 225, 1) !important;
    text-transform: capitalize;
}

.v-tabs-slider-wrapper {
    display: none;
}

/* tab */
.v-tabs-bar .v-tab:not(.v-tab--active) {
    color: rgba(102, 107, 112, 1) !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    text-transform: capitalize;
}

.v-tab--active {
    background-color: #ffffff;
    margin: 3px 3px 2px 3px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 8, 16, 1) !important;
    text-transform: capitalize;
}

.v-tabs-slider-wrapper {
    display: none;
}

.next-repayment {
    background-color: var(--green);
    padding: 1rem 1.2rem;
    border-radius: var(--normal-radius);
    margin-top: 2.1rem;
    color: white;

    h4,
    &>span {
        font-size: 1.6rem;
        font-weight: 600;
    }

    &>span {
        background-color: #85DD85;
        padding: .6rem .85rem;
        border-radius: var(--normal-radius);
    }
}
</style>

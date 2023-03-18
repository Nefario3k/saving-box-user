<template>
    <div class="investibox-details-card">
        <!-- step 1 investibox details -->
        <section v-if="step == 1">
            <div class="right-drawer-title">
                <h1>Poultry Farm, Wuye Abuja</h1>
                <p>By Thrive Agric Abuja</p>
            </div>

            <div class="investibox-image-holder" @click="showDrawer = true"
                style="background-image: url(/images/temporary/investibox-image.jpg)"></div>

            <div class="investibox-deccription">
                <p>
                    Lorem ipsum dolor sit amet consectetur. Orci nisi tortor malesuada
                    dictum semper vel risus egestas nec. Sed senectus orci nibh sit amet
                </p>
            </div>

            <div class="row mb-0">
                <div class="col-4 pb-3">
                    <div class="investibox-stat-item">
                        <h1>₦10,000</h1>
                        <p>Per unit</p>
                    </div>
                </div>

                <div class="col-4 pb-3">
                    <div class="investibox-stat-item">
                        <h1>12 Months</h1>
                        <p>Duration</p>
                    </div>
                </div>

                <div class="col-4 pb-3">
                    <div class="investibox-stat-item">
                        <h1>12% per Year</h1>
                        <p>Expected ROI</p>
                    </div>
                </div>
            </div>

            <div class="row mt-0">
                <div class="col-4">
                    <div class="investibox-stat-item">
                        <h1>499/500</h1>
                        <p>Available Units</p>
                    </div>
                </div>

                <div class="col-4">
                    <div class="investibox-stat-item">
                        <h1>23</h1>
                        <p>Active Investors</p>
                    </div>
                </div>
            </div>

            <div v-if="editingInvestibox" class="col-12 mt-8">
                <label for="exampleFormControlInput1" class="form-label label-design">New Selling Amount</label>
                <div class="input-group mb-3">
                    <span class="input-group-text input-design">₦</span>
                    <input type="text" class="form-control input-design" aria-label="Amount (to the nearest naira)" />
                    <span class="input-group-text input-design" style="font-weight: 400px;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
              ">Total Amount</span>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-6" v-if="editingInvestibox == false">
                    <button class="btn btn-primary btn-outline-design">
                        Cancel Sale
                    </button>
                </div>
                <div class="col-6" :class="{ 'col-12': editingInvestibox }">
                    <button @click="editingInvestibox = true" class="btn btn-primary btn-design">
                        {{ editingInvestibox? 'Update': 'Edit' }}
                    </button>
                </div>
            </div>
        </section>


    </div>
</template>

<script lang="js">

export default {
    data() {
        return {
            step: 1,
            editingInvestibox: false,
        };
    },
    // page properties go here
};
</script>

<style scoped>
.alert {
    color: red;
    border: 1px solid red;
}

.investibox-image-holder {
    width: 100%;
    height: 189px;
    overflow: hidden;
    background-size: cover;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 17px;
}

.investibox-deccription {
    color: rgba(0, 8, 49, 1);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 39px;
}

.investibox-stat-item h1 {
    color: rgba(0, 0, 0, 1);
    font-weight: 500px;
    font-size: 14px;
}

.investibox-stat-item p {
    color: rgba(0, 0, 0, 1);
    font-weight: 400px;
    font-size: 10px;
    margin: 0px;
}
</style>

<template>
    <div class="row">
        <div class="heading-group">
            <h1 class="right-drawer-title">Add Card</h1>
            <p>
                Enter your Card Details
            </p>
        </div>
        <div class="form-group">
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Card Number</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1" placeholder="234" />
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label label-design">Expiry Date</label>
                    <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                        placeholder="234" />
                </div>
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label label-design">CVV</label>
                    <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                        placeholder="234" />
                </div>
            </div>
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Name on Card</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="Name on Card" />
            </div>

            <div class="col-12 mt-16">
                <button class="btn btn-primary btn-design">
                    Generate Virtual Account
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFruits: ''
        };
    },
};
</script>

<style lang="scss" scoped>
.heading-group {
    p {
        font-size: 1.4rem;
        color: var(--gray-darken2);
    }
}
</style>

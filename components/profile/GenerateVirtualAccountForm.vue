<template>
    <div class="row">
        <div class="heading-group">
            <h1 class="right-drawer-title">Generate Virtual Account</h1>
            <p>
                Enter Details below to generate account
            </p>
        </div>
        <div class="form-group">
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Choose a Bank</label>
                <select class="form-select input-design">
                    <option value="">GTB (Guarantee Trust Bank)</option>
                    <option value="">FIRST BANK OF NIGERIA</option>
                </select>
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

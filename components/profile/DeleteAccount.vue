<template>
    <div class="row">
        <div class="right-drawer-title">
            <h1 class="">Delete My Account</h1>
            <p>
                Are you sure you want to delete your account?
            </p>
        </div>
        <div class="form-group">
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Why do you want to delete your
                    account?</label>
                <select class="form-select input-design">
                    <option value="">I am not interested anymore</option>
                    <option value="">I was treated badly</option>
                </select>
            </div>
            <p>
                Deleting your account requires that have a Zero (0) wallet balance, no active Savings, Investibox or
                jollification
                plans, and no loan owed.
            </p>
            <p>
                Did we do something wrong, Kenneth? you can let Us know here. We would love to hear from you on how we
                can do better.
            </p>
            <div class="col-12 mt-16">
                <button class="btn btn-primary btn-design" @click.prevent="formStep = 2">
                    Delete Account
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            formStep: 1,
            selectedFruits: ''
        };
    },
};
</script>

<style lang="scss" scoped>
.form-group {

    p {
        padding-bottom: 1.7rem;
        color: var(--gray-darken2);
    }
}
</style>

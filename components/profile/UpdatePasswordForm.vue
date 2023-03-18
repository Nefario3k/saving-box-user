<template>
    <div class="row">
        <div class="heading-group">
            <h1 class="right-drawer-title">Change Password</h1>
            <p>
                Update Password if you encountered any unusual activity
            </p>
        </div>
        <div class="form-group">
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Old Password</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="Old Password" />
            </div>
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">New Password</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="New Password" />
            </div>
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Confirm New Password</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="Confirm New Password" />
            </div>
            <div class="col-12 mt-16">
                <button class="btn btn-primary btn-design" @click.prevent="formStep = 2">
                    Change Password
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
.heading-group {
    p {
        font-size: 1.4rem;
        color: var(--gray-darken2);
    }
}
</style>

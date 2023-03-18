<template>
    <div>
        <div class="right-drawer-title">
            <h1>Loan Application</h1>
            <p>
                {{ collateralType == 'machinery' ? 'Machineries purchase' : 'Landed property'}} documents
            </p>
        </div>
        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                R of O
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                C of O (optional)
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Dead of sales (optional)
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Power of attorney (optional)
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Passport photograph
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Government-issued ID
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['collateralType'],
}
</script>
<style lang="scss" scoped>
@import url('@/static/css/file-input.css');
</style>
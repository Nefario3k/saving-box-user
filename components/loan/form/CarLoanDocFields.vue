<template>
    <div>
        <div class="right-drawer-title">
            <h1>Loan Application</h1>
            <p>Upload Car documents</p>
            <span class=""><span class="font-weight-bold">Note:</span> All names on document provided must tally with
                your
                profile Name</span>
        </div>
        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">Car Manufactured Year</label>
            <select class="form-select input-design">
                <option value="">2014</option>
                <option value="">2015</option>
                <option value="">2020</option>
                <option value="">2021</option>
            </select>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Proof of ownership
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Car expiration date
            </label>
            <div class="input-group">
                <span class="input-group-text input-design"><v-icon>mdi-tray-arrow-up</v-icon></span>
                <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
        </div>

        <div class="col-12">
            <label for="exampleFormControlInput1" class="form-label label-design">
                Customs documents
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
<style lang="scss" scoped>
@import url('@/static/css/file-input.css');
</style>
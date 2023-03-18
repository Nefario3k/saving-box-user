<template>
    <div class="row">
        <!-- step one form -->
        <section v-if="formStep == 1">
            <div class="back-btn"></div>

            <div class="right-drawer-title">
                <h1>December Jolly Items</h1>
                <p>For Members who want to get Items For December</p>
            </div>
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Enter phone number</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="Enter phone number" />
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Alternative phone number</label>
                <input type="number" step="1000" min="5000" max="5000000" class="form-control input-design"
                    id="exampleFormControlInput1" placeholder="Alternative phone number" />
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">State</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="State" />
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">City</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1" placeholder="City" />
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Enter the full address</label>
                <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="Enter full address" />
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Description (optional)</label>
                <textarea rows="4" class="form-control input-design" id="exampleFormControlInput1"
                    placeholder="Describe your plan" style="height: 100px">
                </textarea>
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">
                    Do you want to gift this plan?
                </label>
                <select v-model="giftPlan" class="form-select input-design">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <template v-if="giftPlan == 'yes'">
                <div class="col-12">
                    <label for="exampleFormControlInput1" class="form-label label-design">Beneficiary Name</label>
                    <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                        placeholder="Beneficiary Name" />
                </div>
                <div class="col-12">
                    <label for="exampleFormControlInput1" class="form-label label-design">Beneficiary phone
                        number</label>
                    <input type="text" class="form-control input-design" id="exampleFormControlInput1"
                        placeholder="Beneficiary phone number" />
                </div>
                <div class="col-12">
                    <label for="exampleFormControlInput1" class="form-label label-design">Beneficiary email
                        address</label>
                    <input type="email" class="form-control input-design" id="exampleFormControlInput1"
                        placeholder="Beneficiary email address" />
                </div>
                <div class="col-12">
                    <label for="exampleFormControlInput1" class="form-label label-design">Beneficiary address</label>
                    <input type="email" class="form-control input-design" id="exampleFormControlInput1"
                        placeholder="Beneficiary address" />
                </div>
            </template>

            <div class="col-12" style="margin-top: 100px">
                <button class="btn btn-primary btn-design" @click.prevent="++formStep">
                    Continue
                </button>
            </div>
        </section>

        <!-- step 2 form -->
        <section v-if="formStep == 2">
            <div class="back-btn">
                <a href="" @click.prevent="--formStep"><i class="fa-solid fa-arrow-left"></i> Back</a>
            </div>
            <div class="right-drawer-title">
                <h1>December Jolly Items</h1>
                <p>Customize your item Check list</p>
                <span class="">Items marked (*) Asterisk are optional</span>
            </div>

            <v-simple-table dense>
                <template v-slot:default>
                    <tbody>
                        <tr v-for="(item, index) in desserts" :key="item.name">
                            <td>
                                <input type="checkbox" name="" id="" :checked='index < 3' :disabled="index < 3">
                                {{ item.name }}
                            </td>
                            <td>{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <div class="jolli-total px-8 pr-16 mt-5 d-flex justify-space-between">
                <span class="total">Total:</span>
                <span class="">₦13,000</span>
            </div>
            <div class="col-12" style="margin-top: 100px">
                <button class="btn btn-primary btn-design" @click.prevent="++formStep">
                    Next
                </button>
            </div>
        </section>

        <section v-if="formStep == 3">
            <div class="back-btn">
                <a href="" @click.prevent="--formStep"><i class="fa-solid fa-arrow-left"></i> Back</a>
            </div>

            <div class="join-jolli-form-title">
                <h1>December Jolly Items</h1>
                <p>Bind Payment Method</p>
                <!-- <span class="">Items marked (*) Asterisk are optional</span> -->
            </div>

            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Funding Source (Optional)</label>
                <v-container class="pa-0" fluid>
                    <v-checkbox v-model="checkbox" color="blue" :label="` Fund From SavingBox Wallet`"></v-checkbox>
                </v-container>
            </div>
            <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label label-design">Payment Method</label>
            </div>

            <div class="col-12">
                <v-select v-model="selectedFruits" :items="['1234', '5678', '9876', '4534', '5476']"
                    label="Select a payment method" outlined>
                    <!-- style each item -->
                    <template #item="{ item }">
                        <div class="payment-method-item">
                            <span class="payment-method-item-date">03/24</span>

                            <span class="payment-method-item-card">
                                5336 5899 ****** {{ item }}
                            </span>
                        </div>
                    </template>

                    <!-- append item design -->
                    <template v-slot:append-item>
                        <div class="bind-new-card" style="margin-top: 15px; margin-bottom: 15px">
                            <a href="" style="
                              text-decoration: none;
                              margin-left: 15px;
                              font-size: 16px;
                              font-weight: 500;
                              color: black;
                            "><i class="fa-solid fa-plus"></i> Bind New Card</a>
                        </div>
                    </template>
                </v-select>
            </div>

            <div class="col-12">
                <div class="text-center d-flex justify-center align-center">
                    <button class="add-new-card">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#4169E1" />
                        </svg>
                        <span class="pl-3">Add New Card</span>
                    </button>
                </div>
            </div>

            <div class="col-12" style="margin-top: 100px">
                <button class="btn btn-primary btn-design" @click.prevent="++formStep">
                    Continue
                </button>
            </div>
        </section>

        <section v-if="formStep == 4">
            <div class="back-btn">
                <a href="" @click.prevent="--formStep"><i class="fa-solid fa-arrow-left"></i> Back</a>
            </div>
            <div class="right-drawer-title">
                <h1 class="">December Jolly Items</h1>
                <p>
                    December Jolly Items
                </p>
            </div>
            <section class="jolli-details">
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <div class="keyvalue-container">
                    <div class="key-value d-flex justify-space-between">
                        <div class="">
                            <span>Worth of items</span>
                            <p>₦100,000</p>
                            <span>Duration</span>
                            <p>11 Months</p>
                            <span>Date Started</span>
                            <p>1st January 2023</p>
                        </div>
                        <div class="">
                            <span>Amount / Month</span>
                            <p>₦10,000</p>
                            <span>Members</span>
                            <p>2,398</p>
                            <span>Months Left</span>
                            <p>8 Months</p>
                        </div>
                    </div>
                </div>
            </section>
            <button class="btn btn-primary btn-design mt-8" @click.prevent="++formStep">
                Continue
            </button>
        </section>

        <section v-if="formStep == 5">
            <div class="back-btn">
                <a href="" @click.prevent="--formStep"><i class="fa-solid fa-arrow-left"></i> Back</a>
            </div>

            <div class="text-center" style="margin-top: 130px; margin-bottom: 30px">
                <img src="/images/icons/success-check.png" alt="" />
            </div>

            <div class="create-autobox-form-title text-center">
                <h1>Subscription Submitted</h1>
                <p>
                    You have successfully subscribed to December Jollification Plan
                </p>
            </div>

            <div class="text-center" style="margin-top: 20px">
                <a href="" style="            text-decoration: none;
            color: #4169e1;
            font-weight: 500;
            font-size: 18px;
          ">Back to Home</a>
            </div>
        </section>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            formStep: 1,
            selectedFruits: '',
            checkbox: false,
            giftPlan: 'no',
            desserts: [
                {
                    name: 'Generator X2',
                    calories: '₦98,300',
                },
                {
                    name: 'TV Sets',
                    calories: '₦104,000',
                },
                {
                    name: 'Refrigerator',
                    calories: '₦175,000',
                },
                {
                    name: '50 Tins of Tomatoes',
                    calories: '₦18,500',
                },
                {
                    name: 'A tin of Thailand Rice',
                    calories: '₦25,000',
                },
                {
                    name: 'Provisions',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: '₦13, 000',
                },
            ],
        };
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
.join-jolli-form-title {
    margin-bottom: 4rem;

    h1,
    h1.title,
    title {
        font-weight: 600;
        font-size: 25px;
        color: rgba(0, 8, 16, 1);
    }

    p,
    .subtitle1 {
        font-weight: 400;
        font-size: 1.4rem;
        margin: 0rem;
        color: #333940;
    }

    span,
    .subtitle2 {
        font-weight: 400;
        font-size: 1.2rem;
        color: #666B70;
    }
}


// 
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row) {
    border: none;
}

.v-data-table>.v-data-table__wrapper>table>tbody>tr>td {
    font-size: 1.6rem;
    font-weight: 400;
    color: #000831;
    height: 3rem;
    padding: 1rem 0rem;
}

.jolli-total {
    background: #EEF5FC;
    padding: 1rem 1.4rem;
    border-radius: var(--normal-radius);

    .total {
        font-size: 1.4rem;
        font-weight: 500;
    }

    .total+span {
        font-size: 1.6;
        font-weight: 600;
    }
}

button.add-new-card {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    font-weight: 500;
    font-size: 1.8rem;
    width: 100%;
    padding: 1.5rem 3rem;
    margin-top: 3rem;
    border-radius: var(--normal-radius);

    &:hover {
        background-color: var(--primary-color);
        color: white;

        svg {
            stroke: white;
        }
    }
}

.jolli-details {
    h3 {
        padding: 1.4rem;
    }

    .keyvalue-container {
        border: 1px solid #D0D0D0;
        border-radius: .8rem;
        margin-top: 2.4rem;
        padding: 2.2rem 2.8rem;

        .key-value {
            margin-top: 2.2rem;

            p {
                font-weight: 500;
                font-size: 1.6rem;
            }

            span {
                color: #666B70;
                font-size: 1.4rem;
            }
        }

    }

    button {
        color: var(--primary-color);
        margin: auto;
        margin-top: 2.2rem;
        display: block;
        width: 80%;
        font-size: 2rem;
    }

    button.see-rule {
        font-weight: 600;
        color: var(--primary-color);
    }

    button.join {
        color: white;
        background-color: var(--primary-color);
        padding: 1.4rem 12rem;
        border-radius: .8rem;
        margin-top: 4.3rem;
        font-weight: 600;
    }
}
</style>

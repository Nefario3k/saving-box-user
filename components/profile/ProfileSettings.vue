<template>
  <div class="settingTYpe1">
    <h2 class="settingHeader">Personal Information</h2>
    <div class="dp-container d-flex align-start">
      <img src="images/profile-image.png" alt="profile image" />
      <div style="height: 100%">
        <span class="d-block profile-name">John Doe</span>
        <button class="btn btn-primary">Update Photo</button>
      </div>
    </div>
    <section class="update-form mt-8">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12">
              <label for="userName" class="form-label label-design"
                >Username</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="userName"
                placeholder="@Johndoe"
              />
            </div>
            <div class="col-6">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >First Name</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="exampleFormControlInput1"
                placeholder="First name"
              />
            </div>
            <div class="col-6">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >Last Name</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="exampleFormControlInput1"
                placeholder="Last name"
              />
            </div>
            <div class="col-12">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >Email</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="exampleFormControlInput1"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div class="col-12">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >Phone Number</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="exampleFormControlInput1"
                placeholder="234"
              />
            </div>
            <div class="col-12">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >Gender</label
              >
              <select class="form-select input-design">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div class="col-12 d-flex justify-end align-center">
              <button class="btn btn-primary btn-design">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="account-options">
      <v-divider></v-divider>
      <div class="row">
        <div class="ps-0 col-10 col-md-6">
          <div class="2fa">
            <h3>Account Protection</h3>
            <p>Two-Factor Authentication</p>
            <p class="fa2-intro">
              Protect your SavingBox account from unauthorized transactions
              using a software token.
            </p>
          </div>
        </div>
        <div class="col-2 twoFactorAuthWrapper">
          <v-switch
            color="var(--primary-color)"
            inset
            v-model="switch1"
          ></v-switch>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="pw-pin">
        <h3>Password & PIN</h3>
        <button
          @click="$refs.rightDraw.showPanel()"
          class="font-weight-medium update-password"
        >
          Update Password
        </button>
        <p>Change Password</p>
      </div>
      <v-divider></v-divider>
      <div class="account-p">
        <h3>Account Option</h3>
        <p class="font-weight-medium">Termination</p>
        <button
          @click="$refs.rightDrawSecond.showPanel()"
          class="delete-account"
        >
          Delete My Account
        </button>
      </div>
    </section>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="updatePassword"
      @closeDrawer="updatePassword = false"
    >
      <update-password-form />
    </RightDrawer>
    <RightDrawer
      ref="rightDrawSecond"
      :showDrawer="deleteAccount"
      @closeDrawer="deleteAccount = false"
    >
      <delete-account />
    </RightDrawer>
  </div>
</template>
<script>
import RightDrawer from "@/components/assets/RightDrawer.vue";
import UpdatePasswordForm from "@/components/profile/UpdatePasswordForm.vue";
import DeleteAccount from "@/components/profile/DeleteAccount.vue";
export default {
  components: {
    RightDrawer,
    DeleteAccount,
    UpdatePasswordForm,
  },
  data() {
    return {
      updatePassword: false,
      deleteAccount: false,
      switch1: false,
    };
  },
};
</script>
<style lang="scss" scoped>
h2.settingHeader {
  font-weight: 500;
  font-size: 2.5rem;
  color: #666b70;
  margin-bottom: 0;
  line-height: normal;
}
div.dp-container {
  margin-top: 33px;
  img {
    max-width: 98px;
    max-height: 98px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
  }

  .profile-name {
    font-size: 2.5rem;
    line-height: 2.15;
    color: var(--black);
  }

  button {
    width: 14rem;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 8px;
    background-color: var(--primary-color);
  }
}

.account-options {
  margin-top: 6.7rem;
  .twoFactorAuthWrapper {
    display: flex;
    align-items: center;
  }

  h3 {
    color: #333940;
    font-weight: 500;
    margin-bottom: 11px;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.8rem;
    color: #333940;
    font-weight: 500;
    margin: 0px;
  }

  p.fa2-intro {
    color: var(--gray-darken2);
    font-weight: 400;
    line-height: 26px;
    margin-top: 5px;
  }

  .update-password {
    color: var(--primary-color);
  }

  .update-password + p {
    font-size: 1.4rem;
    color: var(--gray-darken1);
  }

  .delete-account {
    font-size: 1.4rem;
    color: #ff0000;
  }

  & > div {
    margin-bottom: 5rem;
  }
}
.update-form {
  & > .row {
    margin: 0;
    & > .col-12 {
      padding: 0;
      .row {
        .col-6,
        .col-12 {
          padding: 0;
          padding-bottom: 12px;
        }

        & > .col-6 {
          &:nth-child(2) {
            padding-right: 12px;
          }
        }
      }
    }
  }
}
.btn-design {
  height: 5rem;
  width: 100%;
  max-width: 20rem;
  border-radius: 8px;
  background-color: var(--primary-color);
}
</style>
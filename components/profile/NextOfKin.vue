<template>
  <div>
    <h2>Next of Kin Details</h2>
    <section class="update-form">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="row">
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
              <label for="passport" class="form-label label-design">
                Passport Photograph
              </label>
              <div class="relative coverImageWrapper">
                <input
                  type="text"
                  disabled
                  class="form-control input-design"
                  id="coverImage"
                  placeholder="Upload Passport here"
                />
                <div class="absolute accessIcon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.368 8.79442C7.782 8.79442 8.118 9.13042 8.118 9.54442C8.118 9.95842 7.782 10.2944 7.368 10.2944H6.435C4.816 10.2944 3.5 11.6104 3.5 13.2284V18.1034C3.5 19.7224 4.816 21.0384 6.435 21.0384H17.565C19.183 21.0384 20.5 19.7224 20.5 18.1034V13.2194C20.5 11.6064 19.188 10.2944 17.576 10.2944H16.633C16.219 10.2944 15.883 9.95842 15.883 9.54442C15.883 9.13042 16.219 8.79442 16.633 8.79442H17.576C20.015 8.79442 22 10.7794 22 13.2194V18.1034C22 20.5494 20.01 22.5384 17.565 22.5384H6.435C3.99 22.5384 2 20.5494 2 18.1034V13.2284C2 10.7834 3.99 8.79442 6.435 8.79442H7.368ZM12.5306 2.22202L15.4466 5.15002C15.7386 5.44402 15.7376 5.91802 15.4446 6.21002C15.1506 6.50202 14.6766 6.50202 14.3846 6.20802L12.749 4.56677L12.7496 15.5413H11.2496L11.249 4.56677L9.6156 6.20802C9.4696 6.35602 9.2766 6.42902 9.0846 6.42902C8.8936 6.42902 8.7016 6.35602 8.5556 6.21002C8.2626 5.91802 8.2606 5.44402 8.5536 5.15002L11.4686 2.22202C11.7496 1.93902 12.2496 1.93902 12.5306 2.22202Z"
                      fill="#999C9F"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="file"
                class="d-none form-control input-design"
                id="passport"
                ref="passportInput"
              />
            </div>
            <div class="col-12">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >Address Location</label
              >
              <input
                type="text"
                class="form-control input-design"
                id="exampleFormControlInput1"
                placeholder="Address Location"
              />
            </div>
            <div class="col-12">
              <label
                for="exampleFormControlInput1"
                class="form-label label-design"
                >Relationship</label
              >
              <select class="form-select input-design dark__input">
                <option value="">Father</option>
                <option value="">Mother</option>
                <option value="">Brother</option>
                <option value="">Sister</option>
              </select>
            </div>
            <div class="col-12 pt-5 d-flex justify-end">
              <button class="btn btn-primary btn-design">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="updatePassword"
      @closeDrawer="updatePassword = false"
    >
      <UpdatePasswordForm />
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
    };
  },
};
</script>
<style lang="scss" scoped>
h2 {
  font-weight: 500;
  font-size: 2.5rem;
  color: #666b70;
  margin-bottom: 22px;
  line-height: normal;
}
div.dp-container {
  img {
    max-width: 98px;
    max-height: 98px;
    margin-top: 4rem;
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
  }
}

.account-options {
  margin-top: 6.7rem;

  h3 {
    color: var(--black);
    font-size: 2.5rem;
  }

  p {
    font-size: 1.8rem;
    margin: 0px;
  }

  p.fa2-intro {
    color: var(--gray-darken2);
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
  }

  div {
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
          &:nth-child(1) {
            padding-right: 12px;
          }
        }
      }
    }
  }
}
.btn-design {
  height: 5rem;
  width: 20rem;
  border-radius: 8px;
  background-color: var(--primary-color);
  line-height: normal;
}
@media (max-width: 599px) {
  h2 {
    font-size: 2rem;
  }
  .btn-design {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>
<template>
    <div>
        <div class="right-drawer-title">
            <h1 class="">Notification</h1>
            <p>Keep tab with the latests</p>
        </div>
        <hr style="color: #D0D0D0;">
        <h4>TODAY</h4>
        <div class="notification-item d-flex align-center">
            <div class="icon-container">
                <img src="images/icons/notification_icon.png" alt="notification icon">
            </div>
            <div class="info-note">
                <p class="">
                    Received Payment of 2,000 from <strong>@johndoe</strong>
                </p>
                <span>3 days ago</span>
            </div>
        </div>
        <div class="notification-item d-flex align-center">
            <div class="icon-container">
                <img src="images/icons/notification_icon-active.png" alt="notification icon">
            </div>
            <div class="info-note flex-grow-1">
                <p class="d-flex justify-space-between">
                    <span>Savings payment overdue</span> <span style="float: right;"><strong>NGN1000</strong></span>
                </p>
                <span>3 days ago</span> <br>
            </div>
        </div>
        <div class="note-action">
            <button>Pay Now</button>
        </div>
        <div class="notification-item d-flex align-center">
            <div class="icon-container">
                <img src="images/icons/notification_icon.png" alt="notification icon">
            </div>
            <div class="info-note">
                <p class="">
                    Received Payment of 2,000 from <strong>@johndoe</strong>
                </p>
                <span>3 days ago</span>
            </div>
        </div>
        <div class="notification-item d-flex align-center">
            <div class="icon-container">
                <img src="images/icons/notification_icon.png" alt="notification icon">
            </div>
            <div class="info-note">
                <p class="">
                    Received Payment of 2,000 from <strong>@johndoe</strong>
                </p>
                <span>3 days ago</span>
            </div>
        </div>
        <div class="notification-item d-flex align-center">
            <div class="icon-container">
                <img src="images/icons/notification_icon.png" alt="notification icon">
            </div>
            <div class="info-note">
                <p class="">
                    Received Payment of 2,000 from <strong>@johndoe</strong>
                </p>
                <span>3 days ago</span>
            </div>
        </div>
        <div class="notification-item d-flex align-center">
            <div class="icon-container">
                <img src="images/icons/notification_icon.png" alt="notification icon">
            </div>
            <div class="info-note">
                <p class="">
                    Received Payment of 2,000 from <strong>@johndoe</strong>
                </p>
                <span>3 days ago</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h4 {
    color: #999C9F;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
}

div.note-action {
    margin: -1.5rem 0px 2.7rem 6.7rem;

    button {
        background-color: var(--primary-color);
        color: white;
        padding: .7rem 1.5rem;
        border-radius: var(--normal-radius);
    }
}

div.notification-item {
    margin-bottom: 2.7rem;



    p {
        padding: 0px;
        margin: 0px;
    }

    div.icon-container {
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 50%;
        background-color: #E3EAFF;

        img {
            max-width: 5rem;
        }
    }

    div.info-note {
        color: #333940;
        font-size: 1.6rem;
        margin-left: 1.2rem;

        p+span {
            color: #999C9F;
            font-size: 1.4rem;
        }
    }
}
</style>
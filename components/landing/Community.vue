<template>
    <div class="community row">
        <div class="col-3 image-container d-none d-md-block">
            <div class=" mt-12"><img src="images/community1.png" alt=""></div>
            <div class="text-right"><img src="images/community2.png" alt=""></div>
            <div class=""><img src="images/community3.png" alt=""></div>
            <div class="text-right"><img src="images/community4.png" alt=""></div>
        </div>
        <div class="col-12 col-md-6 text-center relative">
            <img src="images/community1.png" class="d-md-none" alt="">
            <img src="images/community2.png" class="d-md-none" alt="">
            <img src="images/community3.png" class="d-md-none" alt="">
            <img src="images/community4.png" class="d-md-none" alt="">
            <h2>
                Join SavingBox Community
            </h2>
            <p class="mt-8 mt-md-12 mx-4 mx-md-0">
                We are growing a community and as you follow your financial path, you will be surrounded by members of our
                Telegram community who can provide you ideas, support, guidance, and instruction. It is absolutely free and
                open
                to both new and existing users.
            </p>
            <button class="mt-8 mt-md-16">LAUNCH TELEGRAM</button>
        </div>
        <div class="col-3 image-container d-none d-md-block">
            <div class="text-right mt-12"><img src="images/community5.png" alt=""></div>
            <div class=""><img src="images/community6.png" alt=""></div>
            <div class="text-right"><img src="images/community7.png" alt=""></div>
            <div class=""><img src="images/community8.png" alt=""></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
div.row {
    background-color: #F4F7FF;
    padding: 10.2rem var(--landing-x-padding);
    background-color: #F4F7FF;
    padding: 10.2rem var(--landing-x-padding);
    background-image: url('/images/community-bg.png');
    background-repeat: no-repeat;
    background-size: contain;

    div.image-container {

        div {
            // border: 1px solid blue;
        }

        div+div {
            margin-top: -2rem;
        }

        img {
            max-width: 10.4rem;
        }
    }

    h2 {
        font-size: 6rem;
        font-weight: 600;
        line-height: 6.8rem;
        color: #000810;
    }

    p {
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 3.2rem;
        color: #666B70;
    }

    button {
        padding: 1.6rem 6rem;
        background-color: var(--primary-color);
        color: white;
        border-radius: 1rem;

        &:hover {
            background-color: darken($color: #4169E1, $amount: 10%);
        }
    }
}

@media screen and (max-width: 800px) {
    div.row {
        padding: 5rem var(--landing-x-padding);

        div.image-container {

            div {
                // border: 1px solid blue;
            }

            div+div {
                margin-top: -2rem;
            }

            img {
                max-width: 10.4rem;
            }
        }

        div.relative {
            img {
                max-width: 4rem;
                position: absolute;
            }

            img:nth-child(1) {
                left: 0rem;
                top: 2rem;
            }

            img:nth-child(2) {
                right: 0rem;
                top: 2rem;
            }

            img:nth-child(3) {
                left: 0rem;
                bottom: 10rem;
            }

            img:nth-child(4) {
                right: 0rem;
                bottom: 10rem;
            }
        }

        h2 {
            font-size: 3rem;
            line-height: 3.4rem;
        }

        p {
            font-size: 1.4rem;
            line-height: 1.8rem;
        }

        button {
            padding: 1.6rem 6rem;
            background-color: var(--primary-color);
            color: white;
            border-radius: 1rem;

            &:hover {
                background-color: darken($color: #4169E1, $amount: 10%);
            }
        }
    }
}
</style>
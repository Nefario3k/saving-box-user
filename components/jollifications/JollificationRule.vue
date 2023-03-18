<template>
    <div class="row">
        <div class="right-drawer-title">
            <h1 class="">Jolly Rules</h1>
            <p>
                The rules for effective jollification
            </p>
        </div>
        <div class="rules">
            <ol>
                <li>
                    Jollification plans can be transferred from one user to another, the new user will continue making
                    payment for the plan.
                </li>
                <li>All plans start from January to November</li>
                <li>
                    If a user does not start from January, they must pay all the backlog of months including payment for
                    the
                    month they are
                    starting from.
                </li>
                <li>Subscription will automatically be disqualified if they miss up to 3 months of payment.</li>
                <li>Registration for the year will end on the 30th of august.</li>
                <li>All disqualified payments will be settled in December.</li>
            </ol>
        </div>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
div.rules {
    ol {
        li {
            font-size: 1.6rem;
            line-height: 2.8rem;
            margin-top: .5rem;
        }
    }
}
</style>

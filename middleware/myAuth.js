import { useUserStore } from "~/stores";

export default function ({ $pinia, redirect }) {
    let user = useUserStore($pinia);
    console.log(user.isLoggedIn);
    if (!user.isLoggedIn) {
        return redirect('/auth/login')
    }
}
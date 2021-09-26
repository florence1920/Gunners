<template>
    <div>
        <div class="footer">
            <ul class="menu">
                <li><a href="">Team</a></li>
                <li><a href="">History</a></li>
                <li><a href="">Schedule</a></li>
                <li><a href="">Board</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
            <ul class="address">
                <li><a href=""><img src="../assets/git.png" alt="" width="20px"></a></li>
                <li>
                    <a href=""><img src="../assets/facebook.png" alt="" width="9px"></a>
                </li>
                <li>
                    <a href=""><img src="../assets/insta.png" alt="" width="19px"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {overflow: hidden; position: relative; background: #000; padding: 50px 220px 25px;}
.footer .menu {overflow: hidden;}
.footer .menu > li {float: left; margin: 0 20px;}
.footer .menu > li > a {color: #fff; font-weight: 600;}
.footer .address {overflow: hidden;}
.footer .address li {float: right; margin: 0 20px;}
</style>
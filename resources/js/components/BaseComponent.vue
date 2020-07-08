
<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :expand-on-hover="expandOnHover"
            class="test-design rectangle"
            app
        >
                <v-list
                    dense
                    nav
                    class="py-0"
                >
                    <v-list-item two-line :class="'px-0'">
                        <v-list-item-avatar>
                            <img src="images/trapmelogo.png" width="50" height="50">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title > <img src="images/trapMe.png" width="100" height="50"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
<!--            <div class="mid-design" @click.stop="expandOnHover = !expandOnHover">-->

<!--            </div>-->


        </v-navigation-drawer>

        <v-app-bar
            app
            elevate-on-scroll
            color="white"
        >

        </v-app-bar>

        <v-main>


        </v-main>

    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Agents', icon: 'mdi-headset' },
                { title: 'Clients', icon: 'mdi-account' },
                { title: 'Devices', icon: 'mdi-laptop-chromebook' },
                { title: 'Device History', icon: 'mdi-clock-check-outline' },
                { title: 'Traps', icon: 'mdi-view-parallel' },
                { title: 'Data Collector', icon: 'mdi-database' },
                { title: 'Support', icon: 'mdi-face-agent' },
                { title: 'Production', icon: 'mdi-decagram' },
            ],
            expandOnHover: false,


        }),
    }
</script>
<style scoped>
    /*.test-design{*/
    /*    border-right: 2px solid #CAD5E0;*/
    /*}*/
    /*!*.mid-design{*!*/
    /*!*    border-right: 2px solid #CAD5E0;*!*/
    /*!*}*!*/
    .test-design:before{
        content: '';
        display: block;
        position: absolute;
        top: 24px;
        right: -9px;
        width: 17px;
        height: 17px;
        background: #F6F7FB;
        border-left: 2px solid #CAD5E0;
        border-top: 2px solid #CAD5E0;
        -moz-transform:rotate(-45deg);
        -webkit-transform:rotate(-45deg);
    }
    /*.top-box:before{*/
    /*    content: '';*/
    /*    display: block;*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    right: 10px;*/
    /*    width: 15px;*/
    /*    height: 15px;*/
    /*    background: #F6F7FB;*/
    /*    border-left: 1px solid #CAD5E0;*/
    /*    border-right: 1px solid #CAD5E0;*/
    /*    border-top:  1px solid #CAD5E0;*/
    /*    border-bottom:  1px solid #CAD5E0;*/
    /*    !*border-top-right-radius: 10px;*!*/
    /*    !*border-bottom-right-radius:10px;*!*/


    /*    !*-moz-transform:rotate(-45deg);*!*/
    /*    !*-webkit-transform:rotate(-45deg);*!*/
    /*}*/
    /*.mid-design:after{*/
    /*    content: '';*/
    /*    display: block;*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    right: -26px;*/
    /*    width: 15px;*/
    /*    height: 80px;*/
    /*    background: #F4511E;*/
    /*    border-left: 1px solid #F4511E;*/
    /*    border-right: 1px solid #F4511E;*/
    /*    border-top:  #F4511E;*/
    /*    border-bottom:  #F4511E;*/
    /*    border-top-right-radius: 10px;*/
    /*    border-bottom-right-radius:10px;*/
    /*    !*-moz-transform:rotate(-45deg);*!*/
    /*    !*-webkit-transform:rotate(-45deg);*!*/
    /*}*/
    .rectangle:after{
        content: '||';
        color: black;
        font-size: 23px;
        display: block;
        position: absolute;
        top: 400px;
        right: -14px;
        width: 15px;
        height: 40px;
        background: #ffffff;
        border-right: 2px solid #CAD5E0;
        border-bottom: 2px solid #CAD5E0;
        border-top: 2px solid #CAD5E0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    /*.bottom-box:before{*/
    /*    content: '';*/
    /*    display: block;*/
    /*    position: absolute;*/
    /*    top: 50%;*/
    /*    right: 20px;*/
    /*    width: 15px;*/
    /*    height: 100px;*/
    /*    background: #F6F7FB;*/
    /*    border-left: 1px solid #CAD5E0;*/
    /*    border-right: 1px solid #CAD5E0;*/
    /*    border-top:  1px solid #CAD5E0;*/
    /*    border-bottom:  1px solid #CAD5E0;*/
    /*    !*border-top-right-radius: 10px;*!*/
    /*    !*border-bottom-right-radius:10px;*!*/


    /*    !*-moz-transform:rotate(-45deg);*!*/
    /*    !*-webkit-transform:rotate(-45deg);*!*/
    /*}*/
</style>

<template>
    <v-app  id="test" style="background-color: #F6F7FB">
        <v-navigation-drawer
            v-model="primaryDrawer.model"
            :mini-variant="primaryDrawer.mini"
            :mini-variant-width="primaryDrawer.miniWidth"
            permanent
            class="test-design clickable-b"
            floating
            app
        >
            <v-list
                dense
                nav
                class="py-0"
            >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="images/trapmelogo.png"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-img src="images/trapMe.png" class="img-thumbnail"/>
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
            <div class="mid-design">

            </div>
            <div class="rectangle-top"></div>
            <div class="rectangle" @click.stop="primaryDrawer.mini = !primaryDrawer.mini"></div>
            <div class="rectangle-bottom" ></div>
        </v-navigation-drawer>


<!--        <v-app-bar class="app-bar"-->
<!--                   app-->
<!--                   elevate-on-scroll-->
<!--                   color="white"-->
<!--        >-->
<!--            <v-app-bar-nav-icon-->
<!--                @click.stop="primaryDrawer.mini = !primaryDrawer.mini"-->
<!--            ></v-app-bar-nav-icon>-->
<!--            <v-toolbar-title>Test Project</v-toolbar-title>-->
<!--        </v-app-bar>-->

        <v-main>
<!--            <v-container>-->
<!--                <v-row>-->
<!--                    -->

<!--                </v-row>-->
<!--            </v-container>-->




        </v-main>

    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({

            primaryDrawer:
                {
                    model: null,
                    mini: false,
                    miniWidth: 65,
                },
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
        }),
    }
</script>
<style scoped>


    .test-design{
        border-right: 2px solid #CAD5E0;
    }
    .test-design:before{
        content: '';
        display: E2E3E6;
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

    .rectangle-top:after{
        content: '';
        color: black;
        display: block;
        position: absolute;
        top: 340px;
        right: -15px;
        width: 15px;
        height: 15px;
        background: #ffffff;
        border-left: 2px solid #CAD5E0;
        border-right: 0px  #CAD5E0;
        border-bottom: 2px solid #CAD5E0;
        border-top: 0px  #CAD5E0;
        border-bottom-left-radius:10px;
        /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);*/
    }

    .rectangle-bottom:after{
        content: '';
        color: #E2E3E6;
        display: block;
        position: absolute;
        top: 411px;
        right: -15px;
        width: 15px;
        height: 15px;
        background: #ffffff;
        border-left: 2px solid #CAD5E0;
        border-right: 0px solid #CAD5E0;
        border-bottom: 0px  #CAD5E0;
        border-top: 2px solid #CAD5E0;
        border-top-left-radius:10px;
        /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);*/
    }

    .rectangle:after{
        content: '||';
        color: black;
        font-size: 30px;
        display: block;
        position: absolute;
        top: 40%;
        right: -14px;
        width: 20px;
        height: 60px;
        background: #ffffff;
        /*border-right: 2px solid #CAD5E0;*/
        /*border-bottom: 2px solid #CAD5E0;*/
        /*border-top: 2px solid #CAD5E0;*/
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }

    .v-navigation-drawer{
        overflow: visible;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
</style>

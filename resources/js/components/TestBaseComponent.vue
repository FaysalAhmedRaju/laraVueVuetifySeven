<template>
    <v-app  id="test" style="background-color: #F6F7FB">
        <div class="hidden-md-and-up">
            <v-app-bar>
                <v-toolbar-items>
                    <v-list-item-avatar>
                        <v-img src="images/trapmelogo.png"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-img
                            height="50"
                            width="50"
                            src="images/trapMe.png"
                        />
                    </v-list-item-content>
                </v-toolbar-items>

                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <span><img src="images/john.png" width="60px" ></span>
                    <v-btn @click.stop="drawer = !drawer">
                        <v-icon large left>mdi-menu</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-app-bar>

            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right

            >
                <v-divider></v-divider>
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
            </v-navigation-drawer>
        </div>

        <v-navigation-drawer
            v-model="primaryDrawer.model"
            :mini-variant="primaryDrawer.mini"
            :mini-variant-width="primaryDrawer.miniWidth"
            permanent
            class="test-design clickable-b hidden-sm-and-down"
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
<!--            <div class="rectangle-top"></div>-->
            <div class="rectangle" @click.stop="primaryDrawer.mini = !primaryDrawer.mini"></div>
<!--            <div class="rectangle-bottom" ></div>-->

        </v-navigation-drawer>


        <v-navigation-drawer
            absolute
            permanent
            right
            width="25%"
            class="hidden-sm-and-down"
        >
            <template>

                    <v-toolbar flat app >
<!--                        <v-toolbar-title class="text-uppercase grey&#45;&#45;text">-->
<!--                            <span class="font-weight-light" >Todo</span>-->
<!--                            <span>trapme</span>-->
<!--                        </v-toolbar-title>-->
                        <v-spacer></v-spacer>
<!--                        <v-btn flat >-->
                        <v-badge
                            color="red"
                            content="6" left
                        >
                            <v-icon left>mdi-bell </v-icon>
                        </v-badge>
                            <span><img src="images/john.png" width="50px" ></span>
                            <span>JOHN DOE</span>
<!--                        </v-btn>-->

                    </v-toolbar>
                    <v-toolbar flat>
                        <div style="padding-left: 20px;">
                            <br>
                            <h3>Overview</h3>
                        </div>

                    </v-toolbar>

                <div>
                    <v-tabs
                        v-model="tab"
                    >
                        <v-tab>Elements</v-tab>
                        <v-tab>Device Overview</v-tab>
                        <v-tab>Misconfigured Devices</v-tab>
                    </v-tabs>

                    <v-tabs-items
                        v-model="tab"
                    >
                        <v-tab-item
                            v-for="item in itemstab"
                            :key="item.tab"
                        >
                            <v-card flat>

                                <v-card-text>
                                    <v-card-title>
                                        <v-icon
                                            large
                                            left
                                            color="#00E5FF"
                                        >
                                            {{item.icon}}
                                        </v-icon>
                                        <span class="title font-weight-dark">{{item.title}}</span>
                                    </v-card-title>

                                    <div>
                                       <h4>Total Count: {{item.total_count}}</h4>
                                    </div>
                                    <div>{{ item.content }}</div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
            </template>

        </v-navigation-drawer>

        <v-main >

        </v-main>

    </v-app>
</template>

<script>
    export default {

        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
            tab: null,
            itemstab: [
                { tab: 'elements',icon:'mdi-account',title: 'Clients', total_count: '250', content: 'Little description about progrss from previous months can be added here.' },
                { tab: 'device_overview', icon:'mdi-bag-personal-outline',title: 'Sold', total_count: '16612', content: 'Little description about progrss from previous months can be added here.' },
                { tab: 'misconfigured_devices', icon:'mdi-account',title: 'Clients', total_count: '250', content: 'Little description about progrss from previous months can be added here.' },

            ],

            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

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
            mobiles: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
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

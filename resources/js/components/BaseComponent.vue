<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :expand-on-hover="expandOnHover"
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


        </v-navigation-drawer>

        <v-app-bar
            app
            elevate-on-scroll
            color="white"

        >
<!--            absolute-->
<!--            elevate-on-scroll-->
<!--            scroll-target="#scrolling-techniques-7"-->

            <v-app-bar-nav-icon @click.stop="expandOnHover = !expandOnHover"></v-app-bar-nav-icon><!--            @click.stop="drawer = !drawer"-->
<!--            <v-toolbar-title>Application</v-toolbar-title>-->
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

</style>

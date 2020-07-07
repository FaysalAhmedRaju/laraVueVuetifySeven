<template>
    <v-app id="inspire">

        <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            absolute
            red
        >
            <v-list
                dense
                nav
                class="py-0"
            >
                <v-list-item two-line :class="'px-0'">
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Application</v-list-item-title>
                        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
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

<!--        <v-navigation-drawer-->
<!--            v-model="drawer"-->
<!--            app-->
<!--        >-->
<!--            <v-list dense>-->
<!--                <v-list-item link>-->
<!--                    <v-list-item-action>-->
<!--                        <v-icon>mdi-home</v-icon>-->
<!--                    </v-list-item-action>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title>Home</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--                <v-list-item link>-->
<!--                    <v-list-item-action>-->
<!--                        <v-icon>mdi-email</v-icon>-->
<!--                    </v-list-item-action>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title>Contact</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--            </v-list>-->
<!--        </v-navigation-drawer>-->

        <v-app-bar
            app
            color="indigo"
            dark
        >
            <v-app-bar-nav-icon

                @click.stop="expandOnHover = !expandOnHover"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-main >
            <!--      at Main body start -->


            <!--      at Main body   end-->
        </v-main>
        <v-footer
            color="indigo"
            app
        >
            <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
<script>
    export default {

        props: {
            source: String,
        },
        data: () => ({
            // drawer: null,

            drawer: true,
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
            color: 'white',
            expandOnHover: false,

        })
    }

</script>
<style scoped>

</style>

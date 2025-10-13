<template>
    <v-snackbar v-model="visible" :color="color" :timeout="timeout" top right>
        <v-icon left small>{{ icon }}</v-icon>
        {{ message }}
    </v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            message: '',
            color: '',
            timeout: 3000,
            icon: ''
        }
    },
    methods: {
        show(msg, type = 'info') {
            const map = {
                success: { color: 'green', icon: 'mdi-check-circle' },
                error: { color: 'red', icon: 'mdi-alert-circle' },
                warning: { color: 'orange', icon: 'mdi-alert' },
                info: { color: 'blue', icon: 'mdi-information' },
            }

            const cfg = map[type] || map.info

            this.message = msg
            this.color = cfg.color
            this.icon = cfg.icon
            this.visible = true
        }
    }
}
</script>

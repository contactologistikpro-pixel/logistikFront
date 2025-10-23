<template>
    <v-card flat>
        <v-card-text class="mt-2">
            <v-row align="center">
                <v-col cols="12" sm="8" class="d-flex align-center">
                    <v-icon :color="colorIcono" class="mr-2">{{ icon }}</v-icon>
                    <div>
                        <h3 :class="`${colorTitulo} font-weight-bold mb-1`">
                            {{ titulo }}
                        </h3>
                        <div class="grey--text text--darken-1">
                            {{ subtitulo }}
                        </div>
                    </div>
                </v-col>

                 <v-col cols="12" sm="4" class="d-flex justify-end pr-2">
                    <img src="/images/logoNegro.png" alt="Logo" height="70" class="mr-2" />
                </v-col>

            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "EncabezadoSeccion",
    props: {
        icon: {
            type: String,
            default: "mdi-information",
        },
        colorIcono: {
            type: String,
            default: "blue",
        },
        titulo: {
            type: String,
            required: true,
        },
        colorTitulo: {
            type: String,
            default: "blue--text text--darken-2",
        },
        subtitulo: {
            type: String,
            default: "",
        },
    },
};
</script>

<template>

    <v-card>

        <v-card-text>

            <header-pages :icon="'mdi-cog'" :titulo="'Gestión de Clientes'"
                :subtitulo="'Administración y registro de clientes en el sistema.'" />

            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <v-btn color="success">Crear cliente <v-icon right>mdi-plus</v-icon></v-btn>
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="4" sm="4" md="4">
                    <v-text-field label="Nombre" dense>

                    </v-text-field>
                </v-col>

                <v-col cols="4" sm="4" md="4">
                    <v-text-field label="Identificacion" type="number" dense>

                    </v-text-field>
                </v-col>

                <v-col cols="4" sm="4" md="4">
                    <v-btn color="primary" small>Buscar<v-icon right>mdi-magnify</v-icon></v-btn>
                    <v-btn class="mr-2" color="error" small>limpiar<v-icon right>mdi-broom</v-icon></v-btn>
                </v-col>

            </v-row>

            <v-alert color="teal" dense outlined class="text-center font-weight-bold mt-5">
                Clientes
            </v-alert>
            <v-data-table :headers="headersClientes" disable-pagination hide-default-footer></v-data-table>


        </v-card-text>

    </v-card>
</template>


<script>
import HeaderPages from '../../components/header/headerPages.vue';

export default {

    components: {
        HeaderPages
    },

    data() {
        return {
            headersClientes: [
                {
                    text: 'id',
                    value: 'id',
                    align: 'center'
                },
                {
                    text: 'Nombre completo',
                    value: 'nombre_completo',
                    align: 'center'
                },
                {
                    text: 'Identificacion',
                    value: 'ientificacion',
                    align: 'center'
                },
                {
                    text: 'Telefono | Contacto',
                    value: 'telefono_contacto',
                    align: 'center'
                },
                {
                    text: 'Direccion',
                    value: 'direccion',
                    align: 'center'
                },
                {
                    text: 'Estado',
                    value: 'estado',
                    align: 'center'
                },
                {
                    text: 'Acciones',
                    value: 'estado',
                    align: 'center'
                }
            ]
        }
    }

}

</script>
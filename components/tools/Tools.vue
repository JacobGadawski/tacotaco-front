<template>
    <v-card>
        <v-card-title class="justify-center">Tools</v-card-title>
        <v-card-text class="tools-content">
            <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    exact
                    class="tools-item"
                >
                    <v-list-item-content class="tools-content">
                        {{item.name}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        return {
            items: [
                { name: 'Create Quiz', to: { name: 'quizes-create' } },
                { name: 'Create Homework', to: { name: 'homework-create' } },
                { name: 'Give Grade', to: { name: 'index' } },
                { name: 'Create Classroom', to: { name: 'index' } },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.tools{
    &-content{
        ::before{
            opacity: 0;
        }
    }
    &-content{
        color: black;
    }
}
</style>
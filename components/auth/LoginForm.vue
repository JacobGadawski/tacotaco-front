<template>
    <v-form>
        <div class="row pl-10 pr-10">
            <div class="form-input-container rounded-xl">
                <input type="email" v-model="email" name="email" placeholder="Type your school email">
                <button type="submit" @click="handleSubmit">
                    <v-icon>mdi-arrow-right</v-icon>
                    <div :class="{ pulse: loading }"></div>
                </button>
            </div>      
        </div>
    </v-form>
</template>
<script>
export default {
    data(){
        return {
            loading: true,
            email: ""
        }
    },
    methods: {
        async handleSubmit(e){
            e.preventDefault();
            this.$emit("submit", { email: this.email })
        }
    }
}
</script>
<style scoped>
.form-input-container  {
    border: solid 5px #fdca5f;
    min-height: 70px;
    overflow: hidden;
    background: white;
    box-sizing: border-box;
    align-items: stretch;
    display: flex;
    width: 100%;
}
.form-input-container input {
    flex-grow: 8;
    padding-left: 10px;
    outline: none;
}
.form-input-container button {
    flex-grow: 2;
    background-color: #fdca5f;
    outline: none;
}
.form-input-container button i {
    font-size: 2.5em;
}
</style>